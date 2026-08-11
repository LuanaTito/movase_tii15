// Menu hamburger
function clickMenu(){
    let itens = document.getElementById("itens");
    if (itens.style.display ==="block" || itens.style.display===""){
        itens.style.display = "none";
    }else{
        itens.style.display = "block";
    }
    }

//código do Jean
// let itens = document.getElementById("itens");
// let iconMenu = document.getElementById("iconMenu");
 
// itens.style.display = "none";
// iconMenu.addEventListener("click", function(event) {
//     event.stopPropagation();
//     if (itens.style.display === "none") {
//         itens.style.display = "block";
//     } else {
//         itens.style.display = "none";
//     }
// });
 
// document.addEventListener("click", function() {
//     if (itens.style.display === "block") {
//         itens.style.display = "none";
//     }
// });
 
// itens.addEventListener("click", function(event) {
//     event.stopPropagation();
// });


// Carrossel
$(document).ready(function(){
    $('#destaque').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
    });
});
 
//modal

var modalBtn = document.getElementById("modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
