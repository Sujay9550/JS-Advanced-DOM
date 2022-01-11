`use strict`;

// Selecting, Creating, Deleting Elements in Javascript

console.log(document.documentElement); // Result - html element (contains head, body)
console.log(document.head); // Result - head element (contains elements like meta tags, title, link to internal/external files & any CDN's)
console.log(document.body); // Result - body element

// Selecting a single element

console.log(document.querySelector("#home-section")); // Result - Displays the header element (#home-section)

// Selecting multiple element with the same class

console.log(document.querySelectorAll(".btn")); // Result - NodeList that contains all the elements with the same class

// Selecting element by id

console.log(document.getElementById("information-section-1")); // Does not need the selector (#)

// Selecting elements by Tag Name

console.log(document.getElementsByTagName("p")); // Result - HTML collection of all the <p> tag elements. Does not need selectors (# 0r .)

// Selecting elements by Class Name

console.log(document.getElementsByClassName("nav-link")); // Result - HTML collection of all elements with nav-link class.

// Creating and Inserting Elements

const message = document.createElement("div");
message.classList.add("container");
message.innerHTML = `We use cookies for improved functionality and analytics. <a href="#" class="btn btn-primary cookie">Got it!</a>`;

// Adding message element to the DOM
document.body.append(message); // Result - This will add the element as the last child of the body

// Deleting an Element (Deleting message element on click of a button)
const cookie = document.querySelector(".cookie");
console.log(cookie);

cookie.addEventListener("click", (e) => {
  e.preventDefault();
  message.remove();
});
