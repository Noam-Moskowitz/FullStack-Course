import User from "./script.js";
const myUsers = new User();
const myHtml = myUsers.getUsersAsHTML();
console.log(myHtml);
document.getElementById(`output`).innerHTML = `<table>${myHtml}</table>`