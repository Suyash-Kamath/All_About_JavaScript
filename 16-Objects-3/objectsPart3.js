const course = {
    courseName:"JavaScript with Suyash",
    price:999,
    courseInstructor:'Suyash'
}

// console.log(course.courseInstructor)

const {courseInstructor:Instructor,price} = course

// console.log(courseInstructor);
console.log(price);
console.log(Instructor);



// if you wanna rename the keys while using then you can do by simply doing this => courseInstructor:Instructor 