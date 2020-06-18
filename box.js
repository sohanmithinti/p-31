class Snake {
  constructor() {
    var options = {
        'restitution':0.9,
        'friction':0.3,
        'density':1.0
    }
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
    rect(200,380,10,10);
    pop();
  }
};
