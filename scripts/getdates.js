// select the DOM elements for output
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified")

// use the date object
const today = new Date();

year.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;
