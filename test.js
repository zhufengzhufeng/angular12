function A() {
    this['+'] =function (a,b) {return a+b};
    this['-'] =function (a,b) {return a-b};
}
var a = new A()
console.log(a);