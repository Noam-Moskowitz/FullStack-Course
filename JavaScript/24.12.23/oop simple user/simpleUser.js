class Simple_User{
    firstName;
    lastName;
    age;
constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

welcome(){
    alert(`Welcome ${this.firstName} ${this.lastName}`);
}

changeName(){
    this.firstName=prompt('Enter Your First Name');
    this.lastName=prompt('Enter Your Last Name');
}
}

const newUser=new Simple_User();
newUser.changeName()
newUser.welcome();