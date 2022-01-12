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

// Styles, Attributes, Classes

// Styles

// Use below code to set or get the style of a particualr element

// Setting Styles
message.style.backgroundColor = "#37383d";
message.style.color = "#fff";

// Getting Styles
console.log(message.style.backgroundColor); // Result - rgb(55, 56, 61)
console.log(message.style.color); // Result - rgb(255, 255, 255)

// To get the style which is hidden or which is set by css file
console.log(getComputedStyle(message));

// To get the style which is hidden or which is set by css file for a particular style property.
console.log(getComputedStyle(message).color); // Result - rgb(255, 255, 255)
console.log(getComputedStyle(message).display); // Result - Block

// Altering the height of the message
console.log(getComputedStyle(message).height); // Result - 38px

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

console.log(getComputedStyle(message).height); // Result - 68px

// To change the style of the custom properties use the below code
document.documentElement.style.setProperty("--color-primary", "lightblue");

// Attributes

const experimentImage = document.querySelector(".experiment-image");
console.log(experimentImage); // Result - Displays the selected element

console.log(experimentImage.alt); // Result - Blank (as it is not set in the element)
console.log(experimentImage.src); // Result - This results in Absolute link of the src
console.log(experimentImage.getAttribute("src")); // Result - img/share-section1-lazy.jpg (Relative link of the src)

const infoButtonOne = document.querySelector(".info5");
console.log(infoButtonOne); // Result - Displays the selected element

console.log(infoButtonOne.href); // Result - This results in Absolute link of the href
console.log(infoButtonOne.getAttribute("href")); // Result - # (Relative link of the href)

// Manipulating or Setting the Attribute Values
experimentImage.alt = "Experiment Image";
console.log(experimentImage); // Result - alt will be manipulated/set as 'Experiment Image'

experimentImage.setAttribute("name", "experiment-image");
console.log(experimentImage); // Result - This will add a new attribute name="experiment-image" to the selected element

// Classes

const paraOne = document.querySelector(".paraone");
const paraTwo = document.querySelector(".paratwo");
const paraThree = document.querySelector(".parathree");
const paraFour = document.querySelector(".parafour");

// Adding Classes
paraOne.classList.add("a", "z");
console.log(paraOne); // Result - <p class="paraone a z">Paragraph One</p>

// Removing classes
paraTwo.classList.remove("b");
console.log(paraTwo); // Result - <p class="paratwo">Paragraph Two</p>

// Toggle Class
paraThree.classList.toggle("c");
console.log(paraThree); // Result - <p class="parathree c">Paragraph Three</p> This will add class 'c' as it is not available in the html

// Contains
paraFour.classList.contains("d");
console.log(paraFour);
