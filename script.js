let redbtn = document.querySelector(".red");
let goldbtn = document.querySelector(".gold");
let blackbtn = document.querySelector(".black");
let bluebtn = document.querySelector(".blue");
let container = document.querySelector(".container");

redbtn.addEventListener("click", function () {
    container.style.backgroundImage = "url('BMW_bike_img/g310gsracingred.png')";
});
goldbtn.addEventListener("click", function () {
    container.style.backgroundImage = "url('BMW_bike_img/g310gskalamatadarkgoldmetallic.png')";
});
blackbtn.addEventListener("click", function () {    
    container.style.backgroundImage = "url('BMW_bike_img/g310gscosmicblack3.png')";
});
bluebtn.addEventListener("click", function () {    
    container.style.backgroundImage = "url('BMW_bike_img/g310gspolarwhiteracingbluemetallic.png')";
});