function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
  Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  };
}

function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
  };
}

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(newSize) {
    // Минимальный размер
    const minWidth = 1;
    const minHeight = 1;

    // Вычисляем максимальный допустимый размер на основе текущей позиции
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    // Ограничиваем размер окна
    this.size.width = Math.max(minWidth, Math.min(newSize.width, maxWidth));
    this.size.height = Math.max(minHeight, Math.min(newSize.height, maxHeight));
  }
  move(position) {
    this.position.x = Math.max(
      0,
      Math.min(position.x, this.screenSize.width - this.size.width)
    );
    this.position.y = Math.max(
      0,
      Math.min(position.y, this.screenSize.height - this.size.height)
    );
  }  
}
function changeWindow(programWindow) {
    programWindow.size.width = 400;
    programWindow.size.height = 300;
    programWindow.position.x = 100;
    programWindow.position.y = 150;
    return programWindow;
  }


const programWindow = new ProgramWindow();
const updatedWindow = changeWindow(programWindow);

console.log(updatedWindow.size.width);
console.log(updatedWindow.size.height);

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
// const programWindow = new ProgramWindow();
// const newSize = new Size(100, 100);
// programWindow.resize(newSize);
// const newPosition = new Position(750, 650);
// programWindow.move(newPosition);
// console.log(programWindow.position.x)
// console.log(programWindow.position.y)

