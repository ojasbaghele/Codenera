let count = document.getElementById('countdown');
let countdown = count.innerHTML;
setInterval(function() {
    countdown= countdown >0 ? countdown-1 : 0;
    count.innerHTML = countdown;
    count.style.fontSize= countdown*10+'px';
    count.style.marginLeft= countdown*10+'px';
},1000)
document.write(`Count Start From : ${countdown}`);
console.log(countdown);
console.log(count.innerHTML); 
let btn= document.getElementById('btn');
function btnClick(){
    alert("Button Clicked");
}                             
btn.onclick = btnClick;
btn.addEventListener('click', btnClick);