function cylinder(radius, height){
    this.radius = radius;
    this.height = height;
}

cylinder.prototype.volume = function(){
    return (Math.PI*this.radius*this.radius*this.height).toFixed(4);
}

var c1 = new cylinder(5, 4);
console.log("Volume of cylinder is: ",c1.volume());