let f = function () {
        this.a = 1;
        this.b = 7;
}
let o = new f(); {a: 1, b:2}
f.prototype.b = 3;
f.prototype.c = 4;

//
console.log(o.a);

//
console.log(o.b);

console.log(o.c);

console.log(o.d);
