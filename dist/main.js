/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/dog */ \"./src/scripts/dog.js\");\n// imported the fetch dog function over\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_scripts_dog__WEBPACK_IMPORTED_MODULE_0__.fetchSelectedDogs)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNrRDtBQUVsREMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hERiwrREFBaUIsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGRvZy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGVkIHRoZSBmZXRjaCBkb2cgZnVuY3Rpb24gb3ZlclxuaW1wb3J0IHsgZmV0Y2hTZWxlY3RlZERvZ3MgfSBmcm9tIFwiLi9zY3JpcHRzL2RvZ1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgZmV0Y2hTZWxlY3RlZERvZ3MoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImZldGNoU2VsZWN0ZWREb2dzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/dog.js":
/*!****************************!*\
  !*** ./src/scripts/dog.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchSelectedDogs: function() { return /* binding */ fetchSelectedDogs; },\n/* harmony export */   getDogImg: function() { return /* binding */ getDogImg; },\n/* harmony export */   getDogInfo: function() { return /* binding */ getDogInfo; }\n/* harmony export */ });\nconst api_key = \"live_IMV5RlpU4XaI26YknUNIxE1fFnIbdBbStDAFX71eTd7LRttKRLdca6c8f2UDhLng\";\n\n// this is the fetch mechanics to get the information about a specific dog\nconst getDogInfo = async dog => {\n  const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`);\n  if (!response.ok) {\n    throw new Error(\"Something went wrong\");\n  }\n  const data = await response.json();\n\n  // console.log(data[0]);\n  return data[0];\n};\nconst getDogImg = async id => {\n  const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}\n        `, {\n    headers: {\n      \"x-api-key\": api_key\n    }\n  });\n  if (!response.ok) {\n    throw new Error(\"Something went wrong\");\n  }\n  const data = await response.json();\n  return data;\n};\nconst fetchSelectedDogs = async () => {\n  const dogs = [\"Labrador Retriever\", \"German Shepherd\", \"Golden Retriever\", \"French Bulldog\", \"Beagle\", \"Poodle (Miniature)\", \"Rottweiler\", \"Yorkshire Terrier\"];\n  const dogContainers = [];\n  for (const dog of dogs) {\n    try {\n      const dogData = await getDogInfo(dog);\n      // console.log(dogData);\n      const dogImg = await getDogImg(dogData.id);\n      dogContainers.push(createImgContainer(dogImg));\n      dogContainers.push(createDogContainer(dogData));\n    } catch (error) {\n      console.log(error);\n    }\n  }\n  const dogGallery = document.getElementById(\"dog-gallery\");\n  dogContainers.forEach(container => {\n    dogGallery.append(container);\n  });\n};\n\n// Create dog container element\n// For every dog it will grab all the info and append it to the container\n// return the container with all the info appended\n\nfunction createDogContainer(dogData) {\n  const container = document.createElement(\"div\");\n  container.classList.add(\"dog-container\");\n  const name = document.createElement(\"h3\");\n  name.textContent = dogData.name;\n  container.append(name);\n  const bredFor = document.createElement(\"p\");\n  bredFor.textContent = `Bred For: ${dogData.bred_for}`;\n  container.append(bredFor);\n  const temperament = document.createElement(\"p\");\n  temperament.textContent = `Temperament: ${dogData.temperament}`;\n  container.append(temperament);\n  const lifeSpan = document.createElement(\"p\");\n  lifeSpan.textContent = `Life Span: ${dogData.life_span}`;\n  container.append(lifeSpan);\n  const breedGroup = document.createElement(\"p\");\n  breedGroup.textContent = `Breed Group: ${dogData.breed_group}`;\n  container.append(breedGroup);\n  const height = document.createElement(\"p\");\n  height.textContent = `Height: ${dogData.height.imperial} inches (${dogData.height.metric} cm)`;\n  container.append(height);\n  const weight = document.createElement(\"p\");\n  weight.textContent = `Weight: ${dogData.weight.imperial} lbs (${dogData.weight.metric} kg)`;\n  container.append(weight);\n  return container;\n}\nfunction createImgContainer(dogImgData) {\n  const container = document.createElement(\"div\");\n  container.classList.add(\"dog-container\", \"dog-img\");\n  const imgEle = document.createElement(\"img\");\n  imgEle.src = dogImgData[0].url;\n  container.append(imgEle);\n  return container;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV4QixPQUFPakIsU0FBUztBQUNwQjtBQUVBLFNBQVNULGtCQUFrQkEsQ0FBQzJCLFVBQVUsRUFBRTtFQUNwQyxNQUFNbEIsU0FBUyxHQUFHSCxRQUFRLENBQUNLLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0NGLFNBQVMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQztFQUVuRCxNQUFNZSxNQUFNLEdBQUd0QixRQUFRLENBQUNLLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDNUNpQixNQUFNLENBQUNDLEdBQUcsR0FBR0YsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxHQUFHO0VBQzlCckIsU0FBUyxDQUFDQyxNQUFNLENBQUNrQixNQUFNLENBQUM7RUFFeEIsT0FBT25CLFNBQVM7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxkb2cvLi9zcmMvc2NyaXB0cy9kb2cuanM/MTA3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlfa2V5ID1cbiAgICBcImxpdmVfSU1WNVJscFU0WGFJMjZZa25VTkl4RTFmRm5JYmRCYlN0REFGWDcxZVRkN0xSdHRLUkxkY2E2YzhmMlVEaExuZ1wiO1xuXG4vLyB0aGlzIGlzIHRoZSBmZXRjaCBtZWNoYW5pY3MgdG8gZ2V0IHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIGRvZ1xuZXhwb3J0IGNvbnN0IGdldERvZ0luZm8gPSBhc3luYyAoZG9nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZWRvZ2FwaS5jb20vdjEvYnJlZWRzL3NlYXJjaD9xPSR7ZG9nfWBcbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhWzBdKTtcbiAgICByZXR1cm4gZGF0YVswXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREb2dJbWcgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkudGhlZG9nYXBpLmNvbS92MS9pbWFnZXMvc2VhcmNoP2JyZWVkX2lkcz0ke2lkfVxuICAgICAgICBgLFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJ4LWFwaS1rZXlcIjogYXBpX2tleSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWxlY3RlZERvZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZG9ncyA9IFtcbiAgICAgICAgXCJMYWJyYWRvciBSZXRyaWV2ZXJcIixcbiAgICAgICAgXCJHZXJtYW4gU2hlcGhlcmRcIixcbiAgICAgICAgXCJHb2xkZW4gUmV0cmlldmVyXCIsXG4gICAgICAgIFwiRnJlbmNoIEJ1bGxkb2dcIixcbiAgICAgICAgXCJCZWFnbGVcIixcbiAgICAgICAgXCJQb29kbGUgKE1pbmlhdHVyZSlcIixcbiAgICAgICAgXCJSb3R0d2VpbGVyXCIsXG4gICAgICAgIFwiWW9ya3NoaXJlIFRlcnJpZXJcIixcbiAgICBdO1xuXG4gICAgY29uc3QgZG9nQ29udGFpbmVycyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBkb2cgb2YgZG9ncykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZG9nRGF0YSA9IGF3YWl0IGdldERvZ0luZm8oZG9nKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvZ0RhdGEpO1xuICAgICAgICAgICAgY29uc3QgZG9nSW1nID0gYXdhaXQgZ2V0RG9nSW1nKGRvZ0RhdGEuaWQpXG4gICAgICAgICAgICBkb2dDb250YWluZXJzLnB1c2goY3JlYXRlSW1nQ29udGFpbmVyKGRvZ0ltZykpXG4gICAgICAgICAgICBkb2dDb250YWluZXJzLnB1c2goY3JlYXRlRG9nQ29udGFpbmVyKGRvZ0RhdGEpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRvZ0dhbGxlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvZy1nYWxsZXJ5XCIpO1xuICAgIGRvZ0NvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGRvZ0dhbGxlcnkuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgfSk7XG59O1xuXG4vLyBDcmVhdGUgZG9nIGNvbnRhaW5lciBlbGVtZW50XG4vLyBGb3IgZXZlcnkgZG9nIGl0IHdpbGwgZ3JhYiBhbGwgdGhlIGluZm8gYW5kIGFwcGVuZCBpdCB0byB0aGUgY29udGFpbmVyXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5lciB3aXRoIGFsbCB0aGUgaW5mbyBhcHBlbmRlZFxuXG5mdW5jdGlvbiBjcmVhdGVEb2dDb250YWluZXIoZG9nRGF0YSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkb2ctY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gZG9nRGF0YS5uYW1lO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobmFtZSk7XG5cbiAgICBjb25zdCBicmVkRm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYnJlZEZvci50ZXh0Q29udGVudCA9IGBCcmVkIEZvcjogJHtkb2dEYXRhLmJyZWRfZm9yfWA7XG4gICAgY29udGFpbmVyLmFwcGVuZChicmVkRm9yKTtcblxuICAgIGNvbnN0IHRlbXBlcmFtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGVtcGVyYW1lbnQudGV4dENvbnRlbnQgPSBgVGVtcGVyYW1lbnQ6ICR7ZG9nRGF0YS50ZW1wZXJhbWVudH1gO1xuICAgIGNvbnRhaW5lci5hcHBlbmQodGVtcGVyYW1lbnQpO1xuXG4gICAgY29uc3QgbGlmZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsaWZlU3Bhbi50ZXh0Q29udGVudCA9IGBMaWZlIFNwYW46ICR7ZG9nRGF0YS5saWZlX3NwYW59YDtcbiAgICBjb250YWluZXIuYXBwZW5kKGxpZmVTcGFuKTtcblxuICAgIGNvbnN0IGJyZWVkR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBicmVlZEdyb3VwLnRleHRDb250ZW50ID0gYEJyZWVkIEdyb3VwOiAke2RvZ0RhdGEuYnJlZWRfZ3JvdXB9YDtcbiAgICBjb250YWluZXIuYXBwZW5kKGJyZWVkR3JvdXApO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVpZ2h0LnRleHRDb250ZW50ID0gYEhlaWdodDogJHtkb2dEYXRhLmhlaWdodC5pbXBlcmlhbH0gaW5jaGVzICgke2RvZ0RhdGEuaGVpZ2h0Lm1ldHJpY30gY20pYDtcbiAgICBjb250YWluZXIuYXBwZW5kKGhlaWdodCk7XG5cbiAgICBjb25zdCB3ZWlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWlnaHQudGV4dENvbnRlbnQgPSBgV2VpZ2h0OiAke2RvZ0RhdGEud2VpZ2h0LmltcGVyaWFsfSBsYnMgKCR7ZG9nRGF0YS53ZWlnaHQubWV0cmljfSBrZylgO1xuICAgIGNvbnRhaW5lci5hcHBlbmQod2VpZ2h0KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZ0NvbnRhaW5lcihkb2dJbWdEYXRhKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRvZy1jb250YWluZXJcIiwgXCJkb2ctaW1nXCIpO1xuXG4gICAgY29uc3QgaW1nRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGltZ0VsZS5zcmMgPSBkb2dJbWdEYXRhWzBdLnVybDtcbiAgICBjb250YWluZXIuYXBwZW5kKGltZ0VsZSlcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG4iXSwibmFtZXMiOlsiYXBpX2tleSIsImdldERvZ0luZm8iLCJkb2ciLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZ2V0RG9nSW1nIiwiaWQiLCJoZWFkZXJzIiwiZmV0Y2hTZWxlY3RlZERvZ3MiLCJkb2dzIiwiZG9nQ29udGFpbmVycyIsImRvZ0RhdGEiLCJkb2dJbWciLCJwdXNoIiwiY3JlYXRlSW1nQ29udGFpbmVyIiwiY3JlYXRlRG9nQ29udGFpbmVyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZG9nR2FsbGVyeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JFYWNoIiwiY29udGFpbmVyIiwiYXBwZW5kIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5hbWUiLCJ0ZXh0Q29udGVudCIsImJyZWRGb3IiLCJicmVkX2ZvciIsInRlbXBlcmFtZW50IiwibGlmZVNwYW4iLCJsaWZlX3NwYW4iLCJicmVlZEdyb3VwIiwiYnJlZWRfZ3JvdXAiLCJoZWlnaHQiLCJpbXBlcmlhbCIsIm1ldHJpYyIsIndlaWdodCIsImRvZ0ltZ0RhdGEiLCJpbWdFbGUiLCJzcmMiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/dog.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxkb2cvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;