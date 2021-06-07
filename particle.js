class Particles {
    constructor(x, y, r) {
        var options = {

            isStatic:false,
        }
        this.body = Bodies.circle(x, y,r,  options);
        this.r=r;
        this.color=color(random(55,255),random(45,255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push()
       translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill(color(random(0,255),random(0,255)));
       ellipse(0,0,this.r,this.r,this.color)
       pop()
       
    }
};