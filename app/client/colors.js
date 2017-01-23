export class Color {
  constructor (r = 0, g = 0, b = 0, a = 1) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }

  alpha (a) {
    return new Color(this.r, this.g, this.b, a)
  }

  delta (d) {
    return new Color(this.r + d, this.g + d, this.b + d, this.a)
  }

  lighten () {
    return this.delta(20)
  }

  darken () {
    return this.delta(-20)
  }

  string () {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }
}

export const text = new Color(255, 255, 255)
export const black = new Color(0, 0, 0)
export const gray = new Color(60, 60, 62)
export const blue = new Color(49, 109, 146)
export const darkBlue = new Color(42, 70, 92)
export const darkerBlue = new Color(3, 16, 25)
export const green = new Color(150, 240, 100)
