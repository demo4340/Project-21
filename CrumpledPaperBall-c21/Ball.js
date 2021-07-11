class Ball {

    constructor(x, y, r){

        var ballOptions = {

            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
    
        }

        this.body = Bodies.circle(x, y, r, ballOptions);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);

    }

    display(){

        var ballPosition = this.body.position;
        ellipseMode(RADIUS);
        ellipse(ballPosition.x, ballPosition.y,  this.r, this.r);

    }

}