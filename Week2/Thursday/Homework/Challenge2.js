let course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

// Name of the course ('JavaScript Applications')
console.log("Course name: " + course.name);

// Name of the second teacher ('Shane')
console.log("Teacher two name: " + course.teachers[1]);

// Name of the first student ('Steve')
console.log("Student one name: " + course.students[0].name);

// Katy's computer type ('macbook')
let index = 0;

for (let x = 0; x < course.students.length; x++) {
  if (course.students[x].name == "Katy") {
    index = x;
  }
}

console.log("Katy's computer type: " + course.students[index].computer.type);

// The preReq equipment object
console.log("preReqs: ")
console.log(course.preReqs);

// The second OSOption from equipment prereqs ('osx')
console.log("The second OSOption: " + course.preReqs["equipment"].OSOptions[1]);

// String listing the OSOptions separated by 'or' ('linux or osx')
var osOptionString = (course.preReqs["equipment"].OSOptions).join(" or ");

console.log("OS Options: " + osOptionString);


// An array of all the students that are using OSX.
var osxStudents = [];

for (let x = 0; x < course.students.length; x++) {
  if (course.students[x].computer.OS == "OSX") {
    osxStudents.push(course.students[x].name);
  }
}

console.log("OSSX Students: ");
console.log(osxStudents);

