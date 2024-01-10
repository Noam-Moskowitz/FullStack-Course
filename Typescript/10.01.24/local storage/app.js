"use strict";
var _a, _b, _c, _d;
function getOrShowData(dataKey) {
    let data;
    let storedData = localStorage.getItem(`user${dataKey}`);
    if (!storedData) {
        data = prompt(`Please enter your ${dataKey}`);
        localStorage.setItem(`user${dataKey}`, data);
    }
    else {
        alert(`your ${dataKey} in our database is: ${storedData}`);
    }
}
;
function clearLocalStorage() {
    localStorage.clear();
}
function removeItem() {
    let item = prompt(`ENter item to be removed`);
    localStorage.removeItem(`${item}`);
}
function addGrade() {
    const grade = prompt(`Add new grade`);
    let strFromLs = localStorage.getItem(`arrGrades`);
    let arrGrades = JSON.parse(strFromLs);
    if (!arrGrades) {
        arrGrades = [];
    }
    arrGrades.push(grade);
    console.log(arrGrades);
    let strToLs = JSON.stringify(arrGrades);
    localStorage.setItem(`arrGrades`, strToLs);
}
function displayGrades() {
}
(_a = document.getElementById(`btnStart`)) === null || _a === void 0 ? void 0 : _a.addEventListener(`click`, () => {
    getOrShowData(`age`);
    getOrShowData(`name`);
    getOrShowData(`address`);
});
(_b = document.getElementById(`btnClear`)) === null || _b === void 0 ? void 0 : _b.addEventListener(`click`, clearLocalStorage);
(_c = document.getElementById(`btnRemove`)) === null || _c === void 0 ? void 0 : _c.addEventListener(`click`, removeItem);
(_d = document.getElementById(`addGrade`)) === null || _d === void 0 ? void 0 : _d.addEventListener(`click`, addGrade);
