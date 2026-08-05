import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

// GOBAL VARIABLES
const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const aboutButton = document.querySelector("#aboutButton");

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', homePage);

homeButton.addEventListener('click', function() {
    contentDiv.innerHTML = ""
    homePage()
})

menuButton.addEventListener('click', function() {
    contentDiv.innerHTML = ""
    menuPage()
})

aboutButton.addEventListener('click', function() {
    contentDiv.innerHTML = ""
    aboutPage()
})