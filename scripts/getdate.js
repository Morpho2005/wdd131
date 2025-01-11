// select the DOM elements for output
const year = document.querySelector("#year");

// use the date object
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;
