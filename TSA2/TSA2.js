let red = document.getElementById('redbox');
let ora = document.getElementById('orangebox');
let yel = document.getElementById('yellowbox');
let grn = document.getElementById('greenbox');
let blu = document.getElementById('bluebox');
let indi = document.getElementById('indigobox');
let vio = document.getElementById('violetbox');

let day = 'blankbox';

function changeRed(){
    console.log(day);
    let prev = document.getElementById(day);
    prev.style.transform = '';
    prev.style.backgroundColor = '';
    red.style.transform = 'translateY(0px)';
    red.style.backgroundColor = 'white';
    // red.style.transition = '200 ease in';
    day = 'redbox';
}

function changeOrange(){
    let prev = document.getElementById(day);
    prev.style.transform = '';
    prev.style.backgroundColor = '';
    ora.style.transform = 'translateY(0px)';
    ora.style.backgroundColor = 'white';
    // ora.style.transition = '200 ease in';
    day = 'orangebox';
}

function changeYellow(){
    let prev = document.getElementById(day);
    prev.style.transform = '';
    prev.style.backgroundColor = '';
    yel.style.transform = 'translateY(0px)';
    yel.style.backgroundColor = 'white';
    // yel.style.transition = '200 ease in';
    day = 'yellowbox';
}

function changeGreen(){
    let prev = document.getElementById(day);
    prev.style.transform = '';
    prev.style.backgroundColor = '';
    grn.style.transform = 'translateY(0px)';
    grn.style.backgroundColor = 'white';
    // grn.style.transition = '200 ease in';
    day = 'greenbox';
}

function changeBlue(){
    let prev = document.getElementById(day);
    prev.style.transform = '';
    prev.style.backgroundColor = '';
    blu.style.transform = 'translateY(0px)';
    blu.style.backgroundColor = 'white';
    // blu.style.transition = '200 ease in';
    day = 'bluebox';
}

function changeIndigo(){
    let prev = document.getElementById(day);
    prev.style.transform = '';
    prev.style.backgroundColor = '';
    indi.style.transform = 'translateY(0px)';
    indi.style.backgroundColor = 'white';
    // indi.style.transition = '200 ease in';
    day = 'indigobox';
}

function changeViolet(){
    let prev = document.getElementById(day);
    prev.style.transform = '';
    prev.style.backgroundColor = '';
    vio.style.transform = 'translateY(0px)';
    vio.style.backgroundColor = 'white';
    // vio.style.transition = '200 ease in';
    day = 'violetbox';
}