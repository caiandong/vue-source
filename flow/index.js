/*@flow*/

function split(str) {
  return str.split(' ')
}
split('11')


function add(x: number, y: number): number {
  return x + y
}
add(22, 11)


class Bar {
  x: string;           // x 是字符串
  y: string | number | void;  // y 可以是字符串或者数字
  z: boolean;

  constructor(x: string, y: string | number) {
    this.x = x
    this.y = y
    this.z = false
  }
}
var bar: Bar = new Bar('hello', 4)
var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
}

var foo: ?string = null // 此时，foo 可以为字符串，也可以为 null。
var foo: ?string = undefined