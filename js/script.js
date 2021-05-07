const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
const res = await fetch ()
const images = await res.json();
console.log(images);
};

getImage();
