var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log("Object before property deletion:",  student);
delete student.rollno;
console.log("Object after property deletion:",  student);