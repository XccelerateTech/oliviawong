class Person {
    constructor(option){
        this.age = option.age;
        this.name = option.name;
    }

    //key to remember the ${} notation uses curly bracket!!
    info(){
        console.log(`The person is called ${this.name} and is ${this.age} years old`)
    }
}

// const person = new Person( {age: 44, name: 'Tom' });
// person.info() // The person is called Tom and is 44 years old

class Student extends Person{
    constructor(option){
        super(option);
        this.gpa = option.gpa;
    }

    info(){
        console.log(`The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of 4 in his university`)
    }
}

const student = new Student( {age: 44, name: 'Tom', gpa:"4" });
student.info()