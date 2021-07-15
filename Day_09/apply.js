const obj1 = {
    name: "Called within obj1",
    getsum: function(a,b){
        console.log(this.name);
        console.log(a+b);
    }
}

const obj2 = {
    name: "Called within obj2"
}

obj1.getsum.apply(obj2,[10,50]);