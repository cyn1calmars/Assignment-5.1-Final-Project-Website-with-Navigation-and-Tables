
function start(){
myTimeout = setTimeout(start, 1000);
let x = document.getElementById('memeimage');
x.style.marginTop = x.style.marginTop == "0px" ? "200px" : "0px";
}

function stop(){
    clearTimeout(myTimeout);
}
