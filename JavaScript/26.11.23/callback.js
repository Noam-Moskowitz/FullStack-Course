function alrt(name){
    alert('Noam Moskowitz')
}
function wrte(name){
    document.write('Noam Moskowitz')
}
function cllback(calll){
    alert("Displaying your name")
    calll();
    
}
cllback(alrt);
cllback(wrte);