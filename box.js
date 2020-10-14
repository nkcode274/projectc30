class Box{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution :0.8,
          friction :0.1,
          density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else {
          
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          pop();

          World.remove(world,this.body);
        }
      }
}