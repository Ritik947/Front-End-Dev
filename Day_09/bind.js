const obj1 = {
    a: 10,
    b: 40,
    getsum: function(){
        console.log(this.a+this.b);
    }
}

const obj2 = {
    a: 10,
    b: 20
}

const temp = obj1.getsum.bind(obj2);
console.log(temp);
temp();