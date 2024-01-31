class User{
    private _name:string;
    static age=20;
    readonly createdAt:Date;

    constructor(name:string){
this._name=name;
this.createdAt=new Date();
    }
    
}

console.log(User.age);
const u = new User(`noam`);
console.log(u.createdAt);

