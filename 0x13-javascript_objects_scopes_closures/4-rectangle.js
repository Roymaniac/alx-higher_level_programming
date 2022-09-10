#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print() {
    console.log(
      ("X".repeat(this.width) + "\n").repeat(this.height) +
        "X".repeat(this.width)
    );
  }

  rotate() {
    const h = this.height;
    const w = this.weight;
    this.width = h;
    this.height = w;
  }

  double() {
    this.height *= 2;
    this.weight *= 2;
  }
}
module.exports = Rectangle;
