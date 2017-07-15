function Animator(balls, container){
	var intervalId;
	var that = this;
	this.balls = balls;
	this.container = container;

	this.animate = function(){
		intervalId = setInterval(function(){
			that.balls.forEach(function(ball){
				that.move(ball);
        // ball.move();  

        that.checkWallCollision(ball);

        that.checkBallCollision(that.balls);
			});
		}, 1);
	}

  this.move = function(ball){
    // debugger;
    ball.move();
  }

  //
  this.checkWallCollision = function(ball){
    // debugger;

    // check right wall and left wall
    // if any of the two results in true
    // ie. if the ball strikes on left or right wall
    // --> change d
    if((ball.x + ball.width) >= container.width || ball.x <= 0){
          ball.xDirection *= -1;
        if((ball.y + ball.height) >= container.height || ball.y <= 0){ 
            ball.yDirection *= -1;
          }
        // }
      }

      //check bottom wall
      else if((ball.y + ball.height) >= container.height || ball.y <= 0){
         ball.yDirection *= -1;
        if((ball.x + ball.width) >= container.width || ball.x <= 0){ 
          ball.xDirection *= -1;
        }
      }
  }

  this.checkBallCollision = function(balls){
    for(var i =0; i < balls.length; i++){
      for(var j = i; j < balls.length; j++){
        if(i != j){

          // if(overlap(balls[i], balls[j]))
          // {
          //   debugger;
          //   balls[i].xDirection *= -1;
          //   balls[j].xDirection *= -1;
          // }

          var distanceX = balls[j].x - balls[i].x;
          var distanceY = balls[j].y - balls[i].y;
          if(Math.abs(distanceX) <= 50 && Math.abs(distanceY) <= 50){
            // debugger;
            balls[i].element.style.background = 'green';
            balls[j].element.style.background = 'green';
            // debugger;
            // var len1 = Math.abs(balls[j].y - balls[i].y);
            // var len2 = Math.abs((balls[j].y + balls[j].height) - (balls[i].y + balls[i].height))
            // if((len1 + len2) <= 30){

            // Collision at the bottom of first box (i)
            if(distanceY >= 0){
              // debugger;
              console.log('Collision at the bottom of ball'+i+' at top ball'+j);
              balls[i].yDirection *= -1;
              balls[j].yDirection *= -1;
            }
            // Collision at the right side of the first box (i)
            else if(distanceX >= 0){
              // debugger;
              console.log('Collision at the right of ball'+i+' at top ball'+j);
              balls[i].xDirection *= -1;
              balls[j].xDirection *= -1;
              // balls[i].yDirection *= -1;
              // balls[j].yDirection *= -1;
            }
            // Collision at the top of the first box (i)
            else if(distanceY < 0)
            {
              // debugger;
              console.log('Collision at the top of ball'+i+' at top ball'+j);
              // balls[i].xDirection *= -1;
              // balls[j].xDirection *= -1;
              balls[i].yDirection *= -1;
              balls[j].yDirection *= -1;
            }
            // Collision at the left side of the first box
            else if(distanceX < 0){
              // debugger;
              console.log('Collision at the left of ball'+i+' at top ball'+j);
              balls[i].xDirection *= -1;
              balls[j].xDirection *= -1;
              // balls[i].yDirection *= -1;
              // balls[j].yDirection *= -1;
            }




              // debugger;
              // balls[i].xDirection *= -1;
              // balls[j].xDirection *= -1;
              // balls[i].yDirection *= -1;
              // balls[j].yDirection *= -1;
              
            // }
            // else{
            //   balls[i].element.style.background = 'red';
            // balls[j].element.style.background = 'red';
            // }
          }
        }
      }
    }
  }

   function overlap(a, b){
    if (a.x < b.x) return false; // a is left of b
    if (a.x > b.x) return false; // a is right of b
    if (a.y < b.y) return false; // a is above b
    if (a.y > b.y) return false; // a is below b
    return true; // boxes overlap
  }


}