class Stone extends BaseClass {
  constructor(x,y,r){
    super(x,y,r,false);
    this.image = loadImage("sprites/stone.png");
  }
  display(){
    super.display();
   //console.log("stonehere")
  }
}