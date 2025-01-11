// select the DOM elements for output
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");
const short = document.querySelector("#short");
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");

// use the date object
const today = new Date();

full.innerHTML = ``;
worldfull.innerHTML = ``;
short.innerHTML = ``;
medium.innerHTML = ``;

year.innerHTML = `<span>${today.getFullYear()}</span>`;
