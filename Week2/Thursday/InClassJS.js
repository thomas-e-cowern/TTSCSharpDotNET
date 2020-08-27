// address = ["Dad", "Mom", "SonA", "SonB"];

// for (let x = 0; x < address.length; x++) {
//   console.log(address[x]);
// }

// console.log("address length: " + address.length);

// address.push("Dog");

// console.log("address length: " + address.length);

// missingMember = address.pop();

// console.log(missingMember + " has been removed");

// address.unshift("Kitty");

// for (let x = 0; x < address.length; x++) {
//   console.log("Family member: " + address[x]);
// }

// missingFamMember = address.shift();

// console.log(missingFamMember + " is missing.");

// for (let x = 0; x < address.length; x++) {
//   console.log("Family member: " + address[x]);
// }

let teachers = ['Shane', 'Zack'];

console.log("teacher 0 is " + teachers[0]);
console.log("current number of teachers: " + teachers.length);

teachers.push("Asaf");
console.log("Asaf was added to teachers");

console.log("current number of teachers: " + teachers.length);
console.log("current teachers: " + teachers);

console.log("about to pop a teacher");
let teacher1 = teachers.pop();
console.log("current number of teachers: " + teachers.length);
 
console.log("the teacher popped was " + teacher1);

console.log("about to unshift a teacher");
teachers.unshift(teacher1);

console.log("current teachers: " + teachers);

let teacher = teachers.shift();

console.log("the teacher shifted was " + teacher);