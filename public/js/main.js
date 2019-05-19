var x = 0;
var container = document.getElementById("pattern-container");

window.onload = function() {
    container = document.getElementById("pattern-container");
    setInterval(main, 10);
    document.getElementById("colorpick1").value = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
    document.getElementById("colorpick2").value = getComputedStyle(document.documentElement).getPropertyValue('--color-2');
    document.getElementById("colorpick3").value = getComputedStyle(document.documentElement).getPropertyValue('--color-3');
    document.getElementById("colorpick4").value = getComputedStyle(document.documentElement).getPropertyValue('--color-4');
}

function change1(color){
    document.documentElement.style.setProperty('--color-1', color);
}
function change2(color){
    document.documentElement.style.setProperty('--color-2', color);
}
function change3(color){
    document.documentElement.style.setProperty('--color-3', color);
}
function change4(color){
    document.documentElement.style.setProperty('--color-4', color);
}

function main() {
    if (x > 560){
        x = 0;
    }
    else{
        x += 1;
    }
    container.style.marginLeft = (x - 600).toString() + 'px';
    container.style.marginTop = (x / 2 - 600).toString() + 'px';
}


