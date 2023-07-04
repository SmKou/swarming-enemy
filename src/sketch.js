const app = {
    width: 0,
    height: 0,
    unit: 50,
    img: '',
    pos: {
        x: 0,
        y: 0
    },
    dir: {
        dx: 0,
        dy: 0
    }
};

export function setApp(width, height) {
    app.width = width;
    app.height = height;
}

export function sketch(p) {
    p.preload = function () {
        app.img = p.loadImage('http://localhost:3000/imperial-coat.jpg');
    };

    p.setup = function () {
        p.ellipseMode(p.CORNER);
        p.createCanvas(app.width, app.height);
    };

    p.draw = function () {
        p.background(0);
        p.image(app.img, app.pos.x, app.pos.y);
        p.fill(255);
        p.stroke(0);
        if (p.keyIsDown(p.LEFT_ARROW)) { app.dir.dx = 1; }
        if (p.keyIsDown(p.RIGHT_ARROW)) { app.dir.dx = -1; }
        if (p.keyIsDown(p.UP_ARROW)) { app.dir.dy = 1; }
        if (p.keyIsDown(p.DOWN_ARROW)) { app.dir.dy = -1; }
        if (!p.keyIsPressed) { app.dir.dx = 0; app.dir.dy = 0; }
        app.pos.x += app.dir.dx * 5;
        app.pos.y += app.dir.dy * 5;
    };
}