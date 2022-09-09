#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    console.log(("X".repeat(this.width) + "\n").repeat(this.height));
  }

  rotate() {
    console.log(("X".repeat(this.height) + "\n").repeat(this.width));
  }

  double() {
    console.log(("X".repeat(this.width * 2) + "\n").repeat(this.height * 2));
  }
}
module.exports = Rectangle;
