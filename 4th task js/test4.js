this._x = 1; //var _x =1

var foo = {
  _x: 2,
  bar: function () {
    return this._x;
  },
};

console.log('1. ', foo.bar());
baz = foo.bar;
console.log('2. ', foo.bar()/*baz()*/);

setTimeout(function () {
  console.log('3. ', baz());
}, 0);

this._x = 4; //var _x =4
