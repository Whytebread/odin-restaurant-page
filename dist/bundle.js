/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\nconst aboutPage = () => {\n    const contentContainer = document.createElement(\"div\");\n    const contentDiv = document.querySelector(\"#content\");\n    contentContainer.innerHTML =\n        `<p>Teddy's Tapas was born from a simple dream: to create a place where food feels like a warm embrace. Founded in 2022 by childhood friends Mia and Leo (self-proclaimed “bear enthusiasts”), the restaurant draws inspiration from traditional Spanish tapas bars and the comforting nostalgia of childhood teddy bears.</p>\n\n        <p>Every detail at Teddy’s tells a story. The walls feature hand-painted murals of friendly bears picnicking in olive groves. Plush teddy bears perch on shelves, ready to keep solo diners company. Soft lighting and comfortable seating make the space perfect for long, laughter-filled evenings. Our menu celebrates small plates — perfect for sharing — while incorporating playful bear puns and a touch of honeyed sweetness in almost every dish.</p>\n\n        <p>We source ingredients locally whenever possible and believe that great food should be joyful, approachable, and a little bit magical. Whether you’re a first-time visitor or a regular “bear” (our nickname for loyal guests), you’ll leave Teddy’s Tapas with a full belly and an even fuller heart.</p>\n\n        <p>Come as strangers, leave as bear-y best friends.</p>`\n    contentDiv.appendChild(contentContainer);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\nconst homePage = () => {\n    const contentContainer = document.createElement(\"div\");\n    const contentDiv = document.querySelector(\"#content\");\n    contentContainer.innerHTML =\n        `       \n        <img src=\"teddystapas.jpg\" alt=\"Teddy's Tapas\">\n        <p class=\"tagline\">Where Every Bite is Bear-y Delicious!</p>\n        <p>Discover the coziest corner of flavor town at Teddy's Tapas, the charming little restaurant that serves up Spanish-inspired small plates with a big bear hug of warmth and whimsy. Whether you're gathering with friends for a lively evening or treating yourself to a quiet moment of delight, Teddy's turns every meal into a paws-itively unforgettable experience. Our intimate dining room feels like a teddy bear picnic come to life — think soft lighting, playful bear-themed décor, and the irresistible aroma of sizzling garlic, fresh herbs, and golden honey.</p>\n        <p>From the first \"bear-y\" good bite to the last sweet sip, Teddy's Tapas is pure comfort with a side of adventure. Come for the tapas, stay for the smiles (and maybe a teddy bear to take home).</p>`;\n\n    contentDiv.appendChild(contentContainer);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n// GOBAL VARIABLES\nconst contentDiv = document.querySelector(\"#content\");\nconst homeButton = document.querySelector(\"#homeButton\");\nconst menuButton = document.querySelector(\"#menuButton\");\nconst aboutButton = document.querySelector(\"#aboutButton\");\n\n// EVENT LISTENERS\ndocument.addEventListener('DOMContentLoaded', _home_js__WEBPACK_IMPORTED_MODULE_0__.homePage);\n\nhomeButton.addEventListener('click', function() {\n    contentDiv.innerHTML = \"\"\n    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage)()\n})\n\nmenuButton.addEventListener('click', function() {\n    contentDiv.innerHTML = \"\"\n    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPage)()\n})\n\naboutButton.addEventListener('click', function() {\n    contentDiv.innerHTML = \"\"\n    ;(0,_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutPage)()\n})\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nconst menuPage = () => {\n    const contentContainer = document.createElement(\"div\");\n    const contentDiv = document.querySelector(\"#content\");\n    contentContainer.innerHTML =\n        `<h1>Menu</h1>\n            \n        <p>All tapas are designed for sharing — because everything’s better with friends (and a little bear-y sweetness)!</p>\n\n        <h3>Paw-some Starters</h3>\n\n        <ul>\n            <li>Honey-Bear Bruschetta – Toasted bread topped with ricotta, wildflower honey, fresh figs, and a sprinkle of toasted almonds. The sweetest way to start your adventure. $9</li>\n            <li>Paw-Print Patatas Bravas – Crispy potatoes in a spicy tomato sauce with garlic aioli “bear claws.” So good you’ll want to paw-sitively lick the plate. $8</li>\n            <li>Teddy’s Classic Croquetas – Creamy jamón and béchamel bites, fried to golden perfection. Little bundles of joy, just like a teddy bear hug. $10</li>\n        </ul>\n\n        <h3>Bear-y Tasty Mains</h3>\n\n        <ul>\n            <li>Grilled Octo-Paws – Tender grilled octopus with paprika, olive oil, and lemon. Eight arms of flavor, zero scary bits. $14</li>\n            <li>Cuddle-Up Chorizo & Honey – Spanish chorizo sautéed with local honey and rosemary. Sweet, spicy, and irresistibly huggable. $12</li>\n            <li>Bear’s Favorite Gambas al Ajillo – Succulent shrimp in garlic, chili, and white wine. Piping hot and ready to make you roar with delight. $13</li>\n            <li>Veggie Bear Bowl – Roasted seasonal vegetables, chickpea “honey” puree, and toasted pine nuts. Plant-based paws-itivity for our herbivore friends. $11</li>\n        </ul>\n\n        <h3>Sweet Ending Bites</h3>\n\n        <ul>\n            <li>Churro Bear Tails – Warm churros dusted with cinnamon sugar, served with chocolate dipping sauce and a honey bear drizzle. $8</li>\n            <li>Flan-tastic Teddy – Classic Spanish flan with a caramel bear paw on top. So smooth it’ll melt your heart. $7</li>\n        </ul>\n\n        <h3>Paw-some Drinks</h3>\n\n        <ul>\n            <li>Teddy’s Honey Sangria – Red or white wine with fresh fruit, orange juice, and a generous splash of local honey. The bear necessities in a glass. $11</li>\n            <li>Bear-y Berry Mojito – Fresh mint, lime, berries, and a touch of honey. Refreshing enough to make you do a happy bear dance. $12</li>\n            <li>Espresso Bear-ccino – Rich espresso with steamed milk and a dusting of cocoa “fur.” Perfect for after-dinner cuddles. $6</li>\n            <li>Non-Alcoholic Paw Punch – Sparkling grape juice, berries, and honey. For our tiniest teddy bears. $5</li>\n            <li>Add a side of “Bear Hugs” (warm bread with garlic butter and honey) for $6.</li>\n        </ul>`\n\n    contentDiv.appendChild(contentContainer);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;