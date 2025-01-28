let sidebar = document.getElementById('sidebar');
let resume = document.getElementById('resbody');
let ctgr = document.getElementById('category');
let pfp = document.getElementById('pfp');


function redColor(){
    sidebar.style.transition = "all 1s";
    resume.style.transition = "all 1s";
    pfp.style.transition = "all 1s";
    sidebar.style.backgroundColor = "maroon";
    resume.style.backgroundColor = "rgb(249, 154, 154)";
    pfp.style.borderColor = "red";
    document.querySelectorAll('h4').forEach(red=>red.style.color = "rgb(249, 154, 154)");
    document.querySelectorAll('h4#fullname').forEach(red=>red.style.color = "rgb(80,14,14)");
    document.querySelectorAll('h2#reach').forEach(red=>red.style.color = "rgb(255, 73, 73)");
    document.querySelectorAll('div#subtitle').forEach(red=>red.style.color = "rgb(177, 33, 33)");
    document.querySelectorAll('h4#desc').forEach(red=>red.style.color = "rgb(80,14,14)");
    document.querySelectorAll('h2#subs').forEach(red=>red.style.color = "rgb(80,14,14)");
    document.querySelectorAll('h3').forEach(red=>red.style.color = "rgb(164, 29, 29)"); 
    document.querySelectorAll('h5#deets').forEach(red=>red.style.color = "rgb(164, 29, 29)");
}

function bnw(){
    sidebar.style.backgroundColor = "black";
    resbody.style.backgroundColor = "rgb(116, 116, 116)";
    pfp.style.borderColor = "gray";
    document.querySelectorAll('h4').forEach(black=>black.style.color = "rgb(116, 116, 116)");
    document.querySelectorAll('h4#fullname').forEach(red=>red.style.color = "black");
    document.querySelectorAll('h2#reach').forEach(red=>red.style.color = "rgb(194, 194, 194)");
    document.querySelectorAll('div#subtitle').forEach(red=>red.style.color = "rgb(56, 56, 56)");
    document.querySelectorAll('h4#desc').forEach(black=>black.style.color = "black");
    document.querySelectorAll('h2#subs').forEach(black=>black.style.color = "black"); 
    document.querySelectorAll('h3').forEach(red=>red.style.color = "black"); 
    document.querySelectorAll('h5#deets').forEach(red=>red.style.color = "black");
}

function reset(){
    sidebar.style.backgroundColor = "rgb(22, 22, 84)";
    resbody.style.backgroundColor = "rgb(214, 237, 255)"
    pfp.style.borderColor = "cyan";
    document.querySelectorAll('h4').forEach(blue=>blue.style.color = "rgb(214, 237, 255)");
    document.querySelectorAll('h4#fullname').forEach(red=>red.style.color = "navy");
    document.querySelectorAll('h2#reach').forEach(red=>red.style.color = "rgb(111, 111, 248)");
    document.querySelectorAll('div#subtitle').forEach(red=>red.style.color = "rgb(68, 124, 219)");
    document.querySelectorAll('h4#desc').forEach(blue=>blue.style.color = "rgb(40, 40, 108)");
    document.querySelectorAll('h2#subs').forEach(red=>red.style.color = "rgb(48, 48, 151)");
    document.querySelectorAll('h3').forEach(red=>red.style.color = "rgb(74, 74, 207)"); 
    document.querySelectorAll('h5#deets').forEach(red=>red.style.color = "rgb(74, 74, 207)");
}
