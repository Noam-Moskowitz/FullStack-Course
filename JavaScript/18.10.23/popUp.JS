const btn = document.getElementById('btn');
const wrapper = document.getElementById('wrapper');
const close = document.getElementById('close');

btn.addEventListener('click', function(){
    wrapper.style.display = "block";
});
close.addEventListener("click", function(){
    wrapper.style.display = "none";
});
