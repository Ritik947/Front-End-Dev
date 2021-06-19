var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var key, size = 0;
for (key in student) {
    if (student.hasOwnProperty(key))
        size++;
}
//OR
// count = Object.keys(student).length;
console.log("Length of given object:", size);