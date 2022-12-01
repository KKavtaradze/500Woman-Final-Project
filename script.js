"use strict";

let burgerBar = document.getElementById("burgerBarID");
let navigation = document.getElementById("navigationID");
burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("navDrop");
  burgerBar.classList.toggle("barMove");
});

let bannerNone = document.getElementById("bannerNone");
burgerBar.addEventListener("click", function () {
  bannerNone.classList.toggle("banner-wrapper-none");
});
