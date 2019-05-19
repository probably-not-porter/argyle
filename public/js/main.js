var x = 0;
var container = document.getElementById("pattern-container");
var display = document.getElementById("frame");
var framecount = 565;

window.onload = function() {
    container = document.getElementById("pattern-container");
    display = document.getElementById("frame");
    setInterval(main, 10);
    document.getElementById("colorpick1").value = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
    document.getElementById("colorpick2").value = getComputedStyle(document.documentElement).getPropertyValue('--color-2');
    document.getElementById("colorpick3").value = getComputedStyle(document.documentElement).getPropertyValue('--color-3');
    document.getElementById("colorpick4").value = getComputedStyle(document.documentElement).getPropertyValue('--color-4');
    document.getElementById("colorpick5").value = getComputedStyle(document.documentElement).getPropertyValue('--color-5');

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
function change5(color){
    document.documentElement.style.setProperty('--color-5', color);
}

function main() {
    if (x > framecount){
        x = 0;
    }
    else{
        x += 1;
    }
    container.style.marginLeft = (x - 600).toString() + 'px';
    container.style.marginTop = (x / 2 - 600).toString() + 'px';
    display.innerHTML = "frame: " + x.toString() + "/" + framecount.toString();
}


