import Person from "./personModel.js"
import { Student } from "./personModel.js"
function eventHandler() {
    const person1 = new Person('Noam Moskowitz', 'noammz101@gmail.com');
    person1.presentSelf();

    const student1 = new Student('Kayla Moskowitz', `Kayrose44@gmail.com`);
    student1.presentSelf();
    student1.addGrade(88);
    student1.addGrade(99);
    student1.addGrade(93);
    student1.printGrades()
}

document.getElementById(`btn`).addEventListener(`click`, eventHandler)