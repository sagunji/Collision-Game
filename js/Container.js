function Container(){
	this.height = 500;
	this.width = 800;
	this.color = 'gray';
	this.position = 'relative';

	this.element;

	this.createContainer = function(){
		this.element = document.createElement('div');
		this.element.style.width = this.width + "px";
		this.element.style.height = this.height + "px";
		this.element.style.background = this.color;
		this.element.style.position = this.position;
	}

	this.append = function (elementName) {
		 if(elementName.length > 0 ){
            for(var i = 0; i < elementName.length ;i++){
              this.element.appendChild(elementName[i].element);
            }
    	}
    	else{
    	this.element.appendChild(elementName);
    }
  }
}
