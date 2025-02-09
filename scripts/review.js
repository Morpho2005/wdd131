const reviewcount = document.querySelector('#reviews')

let numReviews = Number(window.localStorage.getItem("review")) || 0;

numReviews++;
localStorage.setItem("review", numReviews);

numReviews = Number(window.localStorage.getItem("review"))

reviewcount.textContent = numReviews;