class Ground {

    constructor(x, y, w, h ){

        var groundOptions = {

            isStatic : true

        }

        this.body = Bodies.rectangle(x, y, w, h, groundOptions);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);

    }

    display(){

        var groundPos = this.body.position;
        rectMode(CENTER);
        fill ("red");
        rect(groundPos.x, groundPos.y, this.w, this.h);

    }

}