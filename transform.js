let target = document.getElementById("box");

let scaleXslider = document.getElementById("scaleSlideX");
let scaleYslider = document.getElementById("scaleSlideY");

let rotateZslider = document.getElementById("rotateSlideZ");

let translateXslider = document.getElementById("translateSlideX");
let translateYslider = document.getElementById("translateSlideY");

let skewXslider = document.getElementById("skewSlideX");
let skewYslider = document.getElementById("skewSlideY");

//scale 
scaleXslider.oninput = function () {
    drawNew();
}
scaleYslider.oninput = function () {
    drawNew();
}

//rotate
rotateZslider.oninput = function () {
    drawNew();
}

//skew
skewXslider.oninput = function () {
    drawNew();
}
skewYslider.oninput = function () {
    drawNew();
}

//translate
translateXslider.oninput = function () {
    drawNew();
}
translateYslider.oninput = function () {
    drawNew();
}

function drawNew() {
    let scaleX = parseFloat(scaleXslider.value / 100);
    let scaleY = parseFloat(scaleYslider.value / 100);
    let rotateZ = parseInt(rotateZslider.value);
    let translateX = parseInt(translateXslider.value);
    let translateY = parseInt(translateYslider.value);
    let skewY = parseInt(skewYslider.value);
    let skewX = parseInt(skewXslider.value);

    let val = `translate(${translateX}%,${translateY}%) rotate(${rotateZ}deg) 
    skew(${skewX}deg,${skewY}deg) scale(${scaleX},${scaleY})`;

    target.style.transform = val;

    let item = document.getElementById("codeContainer");
    item.innerHTML = "transform: "+ val;
   
  
}






