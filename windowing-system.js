function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
    Size.prototype.resize = function(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }
}


function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    Position.prototype.move = function (newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }
    resize(newSize) {
        if (newSize.width <= 0) {
            this.size.width = 1;
        }
        if (newSize.height <= 0) {
            this.size.height = 1;
        }
        if (newSize.height > this.screenSize.height) {
            this.size.height = this.screenSize.height;
        }
        if (newSize.width > this.screenSize.width) {
            this.size.width = this.screenSize.width;
        }
        if (newSize.height > 1 && newSize.height < this.screenSize.height) {
            this.size.height = newSize.height;
        }
        if (newSize.width > 1 && newSize.width < this.screenSize.width) {
            this.size.width = newSize.width;
        }
    }

    move(position) {
        if (position.x < 0) {
            this.position.x = 0;
        }
        if (position.y < 0) {
            this.position.y = 0;
        }
        if (position.x > this.screenSize.height) {
            this.position.x = this.screenSize.height - this.size.height;
        }
        if (position.y > this.screenSize.width) {
            this.position.y = this.screenSize.width - this.size.width;
        }
        if (position.x > 1 && position.x < this.screenSize.height) {
            this.position.x = position.x;
        }
        if (position.y > 1 && position.y < this.screenSize.width) {
            this.position.y = position.y;
        }

    }
}

//const size = new Size(1080, 764);
//const point = new Position();
//point.move(100, 200)
//const programWindow = new ProgramWindow();
// const programWindow = new ProgramWindow();
//
// const newSize = new Size(0, -10);
// programWindow.resize(newSize);
// console.log(programWindow.size.width);;
// // => 600
// console.log(programWindow.size.height);;
// // => 400
const programWindow = new ProgramWindow();
const newSize = new Size(100, 100);
programWindow.resize(newSize);
const newPosition = new Position(750, 650);
programWindow.move(newPosition);
console.log(programWindow.position.x)
console.log(programWindow.position.y)