"use strict";

let burgerBar = document.getElementById("burgerBar");
let navigation = document.getElementById("navigation");
burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("navDrop");
  burgerBar.classList.toggle("barMove");
});

let bannerNone = document.getElementById("bannerNone");
burgerBar.addEventListener("click", function () {
  bannerNone.classList.toggle("banner-wrapper-none");
});
