class Dustbin{

    constructor(x,y,w,h){

       
        this.body = Bodies.rectangle(x,y,w,h);
        
        this.width = w;
        this.height = h;
        this.image = loadImage("dustbingreen.png");
    }
    display(){

      var posi =  this.body.position;

      imageMode(CENTER);
      image(this.image,posi.x,posi.y,this.width,this.height);
    }
}