interface students {
    name: string 
    studentID: number 
    course: string 
    marks: number 

}

let student1 = {
    name : 'khumbelo',
    studentID : 2601,
    course : 'accounting',
    marks : 43
}


if (student1.marks < 50) {
console.log ('student fail')
}
 else {
    console.log ('student passed')
 }