class Fly{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0,
            length: 120
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    display(){
        push();
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("white");
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}