import User from "./userModel.js";

async function eventHandler(){
const userObj = new User();
//console.log(await userObj.getUser());

document.getElementById(`output`).innerHTML=await userObj.getUsersAsHTML();
}

document.getElementById(`btn`).addEventListener(`click`,eventHandler)