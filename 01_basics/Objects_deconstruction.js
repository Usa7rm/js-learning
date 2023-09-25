// Objects Deconstruction

course = {
    coursename: "JavaScript",
    coursecode: "JS101",
    credit: 3,
    instructor: "Hitesh"
}

console.log("normaally");
console.log(course.instructor);
console.log("conventionally")

const {instructor : helper} = course;
console.log(helper);  