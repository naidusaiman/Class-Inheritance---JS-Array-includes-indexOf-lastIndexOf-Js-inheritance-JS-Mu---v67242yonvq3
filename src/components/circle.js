// import using require

// declare class
import Shape require('/shape.js');
class Circle extends Shape {
  calculateArea(){
   console.log("Circle Area Drawn"); 
  }
}

// export class using module.exports
