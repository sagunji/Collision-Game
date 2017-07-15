/*
Creating Balls as an object
Properties:
  radius

*/

function Ball(x, y, r){

	this.x = x || 200;
  this.y = y || 200;


	this.width = 50;
	this.height = 50;
	this.color = 'black';
	this.position = 'absolute';
  this.velocity = 10;
  this.xDirection = 1;
  this.yDirection = 1;
  this.name = "";

	this.element;

	  this.createBall = function(){
		this.element = document.createElement('div');
		this.element.style.background = this.color;
		this.element.style.width = this.width + "px";
		this.element.style.height = this.height + "px";
    // this.element.style.borderRadius = '50%';
		this.setPosition(this.x, this.y);
    this.element.style.position = this.position;

	}

	this.setPosition = function(x,y) {
		this.left = x;
    	this.top = y;
      this.element.style.top = this.top + "px";
      this.element.style.left = this.left + "px";
	}
  this.move = function(){
    this.x = this.x + (this.velocity * this.xDirection);
    this.y = this.y + (this.velocity * this.yDirection);
    this.setPosition(this.x, this.y);
    // this.x += "px";
  }
}

