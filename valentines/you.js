function biggerYes(){
let box = document.getElementById("yes");
let currentWidth = box.clientWidth;
let currentHeight = box.clientHeight;
box.style.width = (currentWidth + 50);
box.style.height = (currentHeight + 30);

document.getElementById("yes").style.fontSizeAdjust ++;
}