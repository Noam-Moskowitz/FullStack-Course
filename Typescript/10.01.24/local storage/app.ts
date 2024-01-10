function getOrShowData(dataKey: string){
    let data: string |null;
    let storedData=localStorage.getItem(`user${dataKey}`);
    
    if (!storedData) {
        data = prompt(`Please enter your ${dataKey}`)
    
    
    localStorage.setItem(`user${dataKey}`,data as string);
    }else{
    alert(`your ${dataKey} in our database is: ${storedData}`)

    }
};

function clearLocalStorage(){
    localStorage.clear();
}
function removeItem(){
    let item: string|null= prompt(`ENter item to be removed`)
    localStorage.removeItem(`${item}`)
}


function addGrade() {
    const grade: string=prompt(`Add new grade`) as string;

    let strFromLs:string=localStorage.getItem(`arrGrades`) as string;
    let arrGrades: String[] = JSON.parse(strFromLs);
    if(!arrGrades){
        arrGrades=[];
    }
    arrGrades.push(grade);
    console.log(arrGrades);


    let strToLs:string=JSON.stringify(arrGrades)
    localStorage.setItem(`arrGrades`,strToLs);

}

function displayGrades() {
}

document.getElementById(`btnStart`)?.addEventListener(`click`,()=>{
    getOrShowData(`age`);
    getOrShowData(`name`);
    getOrShowData(`address`);
});
document.getElementById(`btnClear`)?.addEventListener(`click`,clearLocalStorage);
document.getElementById(`btnRemove`)?.addEventListener(`click`,removeItem);
document.getElementById(`addGrade`)?.addEventListener(`click`,addGrade);


