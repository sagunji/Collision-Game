// Main class i.e. execution starts in 

function BallCollision(elementId){
	var element = document.getElementById(elementId);
	this.ballsObjs = [];
	this.init = function(){
		var container = new Container();
		container.createContainer();

		for(var i = 0; i< 2; i++){
			var ball = new Ball(xRandom(),yRandom());
      // ball.width = 50;
      // ball.height = 50;
			ball.color = 'red';
			ball.name = "ball"+i;
			ball.velocity = 1;
			ball.createBall();			
      this.ballsObjs.push(ball);
		}
		container.append(this.ballsObjs);
		// container.append(ball1.element);
		element.appendChild(container.element);

		var animator = new Animator(this.ballsObjs, container);
    animator.animate();
	}

	function xRandom(){
		return Math.floor((Math.random() * 750) + 1);
	}
	function yRandom() {
		return Math.floor((Math.random() * 450) + 1);
	}
}

var ballCollision = new BallCollision('collision');

ballCollision.init();	