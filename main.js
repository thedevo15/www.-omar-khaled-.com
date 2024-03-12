let stars1 = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains1');
let mountains4 = document.getElementById('mountains2');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nouvil = querryselector('.nouvil'); 
window.onscroll = function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 3 + 'px';

}