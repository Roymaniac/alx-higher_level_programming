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
}

module.exports = Rectangle;
