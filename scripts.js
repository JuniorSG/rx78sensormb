//Variables
var docbody = document.getElementById("body");
var divclass = document.getElementsByClassName("divclass");

var translateNum = 0;

var Footerer = document.getElementById("footer");
var FooterMaxRange = false;

var VisorImg = false;
var lightBox = document.getElementsByClassName("light-box");

var StylerSheet = document.getElementById("Styler");
// --------------------------------------------------
////////////////////TESTING ZONE/////////////////////

// ---------------------------------------------------
// Light-Box Scroll
window.addEventListener("hashchange", (e) => {
  for (let i = 0; i < lightBox.length; i++) {
    lightBox[i].scrollTop = 0;
  }
});

// //Blockeo del scroll
// function VisorTrue(){
//     VisorImg = true;
// }
// function VisorFalse(){
//     VisorImg = false;
// }

// // Salir del visor
// window.addEventListener("keyup",(e)=>{
//     if (e.key =="Escape") {
//         location.hash = "#proyectos";
//         VisorImg = false;
//     }
// })

//RESIZEas
window.addEventListener("resize", redimensionar);
function redimensionar() {
  camera.aspect = (window.innerWidth * 0.97) / (window.innerHeight * 0.97);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth * 0.97, window.innerHeight * 0.97);
  renderer.render(scene, camera);
}

window.addEventListener("click", (e) => {
  if (e.target.className == "light-box" || e.target.className == "Show") {
    if (window.innerWidth <= 900) {
      location.hash = "#cProyectos";
      VisorImg = false;
    } else {
      location.hash = "#proyectos";
      VisorImg = false;
    }
  }
});

var StylerSheet = document.getElementById("Styler");
var Scripter = document.getElementById("Scripter");
