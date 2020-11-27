class Mango extends BaseClass {
  constructor(x, y, r){
    super(x,y,r, true);
    this.image = loadImage("sprites/mango.png");
  }
  display(){
    super.display();
    //console.log("mangohere")
  }
};
