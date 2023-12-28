class Person {
    first = `Noam`;
    last = `Moskowitz`;
    age = 24;

}

const p1 = new Person()
console.log(p1);

p1.first = `Harley`;
p1.last = `Davidson`;
console.log(p1);

const p2 = new Person()
console.log(p2);
p2.first = `Jane`;
p2.last = `Doe`;
p2.age = 56;
console.log(p2);

