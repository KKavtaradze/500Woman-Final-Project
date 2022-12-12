"use strict";

let burgerBar = document.getElementById("burgerBarID");
let navigation = document.getElementById("navigationID");
burgerBar.addEventListener("click", function () {
  navigation.classList.toggle("navDrop");
  burgerBar.classList.toggle("barMove");
});

// slider

let data = [
  {
    id: 1,
    imageUrl: "../images/living-room1.png",
    title: "MODERN LIVING ROOM",
    description: "INTERIOR DESIGN",
  },
  {
    id: 2,
    imageUrl: "../images/living-room2.png",
    title: "MODERN LIVING ROOM",
    description: "INTERIOR DESIGN",
  },
  {
    id: 3,
    imageUrl: "../images/living-room3.png",
    title: "MODERN LIVING ROOM",
    description: "INTERIOR DESIGN",
  },
  {
    id: 4,
    imageUrl: "../images/living-room4.png",
    title: "MODERN LIVING ROOM",
    description: "INTERIOR DESIGN",
  },
];

// #1

let buttonRight = document.getElementById("button-right");
let buttonLeft = document.getElementById("button-left");
let sliderInput = document.getElementById("slider-input");
let sliderInput2 = document.getElementById("slider-input2");
let sliderInput3 = document.getElementById("slider-input3");
let sliderInput4 = document.getElementById("slider-input4");
let sliderIndex = 0;

function createDiv() {
  let divTag = document.createElement("div");
  divTag.classList.add("slide");
  return divTag;
}

function createImg(item) {
  let imgTag = document.createElement("img");
  imgTag.setAttribute("src", item.imageUrl);
  imgTag.setAttribute("alt", item.title);
  imgTag.classList.add("slideimg");
  return imgTag;
}

function createh3(item) {
  let h3 = document.createElement("h3");
  h3.innerText = item.title;
  h3.classList.add("item-title");
  return h3;
}

function createDesc(item) {
  let h6 = document.createElement("h6");
  h6.innerText = item.description;
  h6.classList.add("description");
  return h6;
}

function slide() {
  sliderInput.innerHTML = " ";
  let slideItem = createDiv(data[sliderIndex]);
  slideItem.classList.add("side-item");
  let sliderImages = createImg(data[sliderIndex]);
  let h3Tag = createh3(data[sliderIndex]);
  let h6Tag = createDesc(data[sliderIndex]);

  slideItem.appendChild(sliderImages);
  slideItem.appendChild(h3Tag);
  slideItem.appendChild(h6Tag);
  sliderInput.appendChild(slideItem);

  console.log(sliderInput);
}

slide();

// clicks slide #1

function clickRight() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex++;
  slide();
}

function clickLeft() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex--;

  slide();
}

buttonRight.addEventListener("click", clickRight);
buttonLeft.addEventListener("click", clickLeft);

// #2

function createDivtag() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("slide");
  return newDiv;
}

function createImgtag(item) {
  let newimgTag = document.createElement("img");
  newimgTag.setAttribute("src", item.imageUrl);
  newimgTag.setAttribute("alt", item.title);
  newimgTag.classList.add("slideimg");
  return newimgTag;
}

function createnewh3(item) {
  let newh3 = document.createElement("h3");
  newh3.innerText = item.title;
  newh3.classList.add("item-title");
  return newh3;
}
function createDesc2(item) {
  let h62 = document.createElement("h6");
  h62.innerText = item.description;
  h62.classList.add("description");
  return h62;
}

function slide2() {
  sliderInput2.innerHTML = "";
  let newslideItem = createDivtag(data[sliderIndex]);
  newslideItem.classList.add("side-item");
  let newsliderImages = createImgtag(data[sliderIndex]);
  let newh3Tag = createnewh3(data[sliderIndex]);
  let h6Tag2 = createDesc2(data[sliderIndex]);

  newslideItem.appendChild(newsliderImages);
  newslideItem.appendChild(newh3Tag);
  newslideItem.appendChild(h6Tag2);
  sliderInput2.appendChild(newslideItem);
  console.log(sliderInput2);
}

slide2();

// clicks slide #2

function clickRight2() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide2();
    return;
  }
  sliderIndex++;
  slide2();
}

function clickLeft2() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex--;

  slide2();
}

buttonRight.addEventListener("click", clickRight2);
buttonLeft.addEventListener("click", clickLeft2);

//  #3

function createDivtag3() {
  let newDiv3 = document.createElement("div");
  newDiv3.classList.add("slide");
  return newDiv3;
}

function createImgtag3(item) {
  let newimgTag3 = document.createElement("img");
  newimgTag3.setAttribute("src", item.imageUrl);
  newimgTag3.setAttribute("alt", item.title);
  newimgTag3.classList.add("slideimg");
  return newimgTag3;
}

function createnewh33(item) {
  let newh33 = document.createElement("h3");
  newh33.innerText = item.title;
  newh33.classList.add("item-title");
  return newh33;
}

function createDesc3(item) {
  let h63 = document.createElement("h6");
  h63.innerText = item.description;
  h63.classList.add("description");
  return h63;
}

function slide3() {
  sliderInput3.innerHTML = " ";
  let newslideItem3 = createDivtag3(data[sliderIndex]);
  newslideItem3.classList.add("side-item");
  let newsliderImages3 = createImgtag3(data[sliderIndex]);
  let newh3Tag3 = createnewh33(data[sliderIndex]);
  let h6Tag3 = createDesc3(data[sliderIndex]);

  newslideItem3.appendChild(newsliderImages3);
  newslideItem3.appendChild(newh3Tag3);
  newslideItem3.appendChild(h6Tag3);
  sliderInput3.appendChild(newslideItem3);

  console.log(sliderInput3);
}

slide3();

// clicks slide #3

function clickRight3() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide3();
    return;
  }
  sliderIndex++;
  slide3();
}

function clickLeft3() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex--;

  slide3();
}

slide3();

buttonRight.addEventListener("click", clickRight3);
buttonLeft.addEventListener("click", clickLeft3);

let bannerTouch = document.getElementById("body");
bannerTouch.addEventListener("mouseout", clickLeft);
bannerTouch.addEventListener("mouseout", clickRight2);
bannerTouch.addEventListener("mouseout", clickRight3);
