## 解构赋值

```javascript
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
let { baz } = { foo: 'aaa', bar: 'bbb' };

const { log } = console;
log('hello')

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;

var {x: y = 3} = {x: 5};


 
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]


function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```