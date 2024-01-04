class Person {
    name;
    age;
    email;
    phone;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    presentSelf() {
        const str = `
        Let me introduce myself:\n
        Name: ${this.name} 
        Email: ${this.email}
        `
        alert(str);
    }

};


//student inherits from person
class Student extends Person {
    grades; // array of grades

    constructor(name, email) {
        super(name, email);
        this.grades = [];
    }

    addGrade(intGrade) {
        this.grades.push(intGrade);
    }

    printGrades() {
        for (let grade of this.grades) {
            console.log(`${grade}\n`);
        }
    }

}


export default Person;
export {
    Student
}

