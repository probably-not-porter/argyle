var x = 0;
var container = document.getElementById("pattern-container");

window.onload = function() {
    container = document.getElementById("pattern-container");
    setInterval(main, 20);
}

function main() {
    if (x > 140){
        x = 0;
    }
    else{
        x += 2;
    }
    container.style.marginLeft = (x - 300).toString() + 'px';
    console.log(x - 300);
}


