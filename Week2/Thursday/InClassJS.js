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

// let teachers = ['Shane', 'Zack'];

// console.log("teacher 0 is " + teachers[0]);
// console.log("current number of teachers: " + teachers.length);

// teachers.push("Asaf");
// console.log("Asaf was added to teachers");

// console.log("current number of teachers: " + teachers.length);
// console.log("current teachers: " + teachers);

// console.log("about to pop a teacher");
// let teacher1 = teachers.pop();
// console.log("current number of teachers: " + teachers.length);
 
// console.log("the teacher popped was " + teacher1);

// console.log("about to unshift a teacher");
// teachers.unshift(teacher1);

// console.log("current teachers: " + teachers);

// let teacher = teachers.shift();

// console.log("the teacher shifted was " + teacher);
// console.log("current teachers: " + teachers);
// teachers[1] = "Bonnie";

// console.log("current teachers: " + teachers);

// console.log("the index of Bonnie is " + teachers.indexOf("Bonnie"));
// console.log("the index of Shane is " + teachers.indexOf("Shane"));
// console.log("the index of Asaf is " + teachers.indexOf("Asaf"));

// teachers.push("Johnny");
// teachers.push("Susan");
// teachers.push("Angeline");

// console.log("current teachers: " + teachers);

// slicedTeachers = teachers.slice(1,3);

// console.log("sliced teachers: " + slicedTeachers);

// console.log("current teachers: " + teachers);

// console.log("spliced teachers: Mary, Ken");

// splicedTeachers = teachers.splice(1,2,"Mary","Ken");

// console.log("current teachers: " + teachers);

//Iterating over Arrays using for loop and forEach

// let teachers = ['Assaf', 'Shane', 'Zack']

// for(let i = 0; i < teachers.length; i++) {
// 	console.log(teachers[i]);
// }

// //Uses a function, more on that next class
// teachers.forEach(function(item, index) {
// 	console.log(item, index);
// });

// //Stringifying
// teachers = ['Assaf', 'Shane'];
// teachers2 = ['Assaf', 'Shane'];

// console.log("toString teachers: "  + teachers.toString());

// console.log("join teachers: " + teachers2.join(" & "));

// let a = [2, 1, 3]

// console.log(a.sort());

// console.log(a.reverse());

// let random = ["Hello", "world", true, 99];
// let newArray = [1,2, ...random, 3];

// console.log(newArray);

// let hi = "Hello World"
// let hiArray = [ ...hi ]

// console.log(hiArray);

var students = ["Julian", "AJ", "Matt"];
var[a,x,y,z] = students

console.log(a,x,y,z);

students = ["Julian", "AJ", "Matt"];
var[ ,y,z] = students

console.log(y,z);

students = ["Julian", "AJ", "Matt"];
var[x,,y] = students

console.log(x,y);


students = ["Julian", "AJ", "Matt"];
var[x, ...rest] = students;

console.log(x, rest);
