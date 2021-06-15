var x = [[1,2], [3,4], 5, 6]

//Deep cloning//
dcl = JSON.parse(JSON.stringify(x));
dcl[0].push(10); //Modifying the deep clone
console.log("Deep Copy: ",dcl);
console.log("Original Array:",x,'\n'); //Original array remains unmodified even after the deep copy is modified

//Shallow Cloning//
scl = x.slice();
scl[0].push(10); //Modifying the shallow clone
console.log("Shallow Copy: ",scl);
console.log("Original Array:", x); //Original array also modified due to modificattion done to shallow copy



