"use strict";

//elements

const btnEl = document.querySelectorAll(".btn");
const submitEl = document.querySelector(".submit");
const containerEL = document.getElementById("container");
const secondContainerEl = document.getElementById("second");
const spanEl = document.getElementById("span");

//global variables

function init() {
  spanEl.innerText = 0;
}

init();

submitEl.addEventListener("click", function () {
  containerEL.style.display = "none";
  secondContainerEl.classList.remove("hidden");
});

btnEl.forEach(function(button){
    button.addEventListener('click', function(){
  spanEl.innerHTML = button.innerHTML;

    })
})
