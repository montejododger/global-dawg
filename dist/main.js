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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_dog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/dog */ \"./src/scripts/dog.js\");\n/* harmony import */ var _scripts_allBreeds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/allBreeds */ \"./src/scripts/allBreeds.js\");\n// imports\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_scripts_dog__WEBPACK_IMPORTED_MODULE_0__.fetchSelectedDogs)();\n  (0,_scripts_allBreeds__WEBPACK_IMPORTED_MODULE_1__.fetchAllDogs)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDa0Q7QUFDRTtBQUVwREUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hESCwrREFBaUIsQ0FBQyxDQUFDO0VBQ25CQyxnRUFBWSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZG9nLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0c1xuaW1wb3J0IHsgZmV0Y2hTZWxlY3RlZERvZ3MgfSBmcm9tIFwiLi9zY3JpcHRzL2RvZ1wiO1xuaW1wb3J0IHsgIGZldGNoQWxsRG9ncyB9IGZyb20gXCIuL3NjcmlwdHMvYWxsQnJlZWRzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBmZXRjaFNlbGVjdGVkRG9ncygpO1xuICAgIGZldGNoQWxsRG9ncygpO1xufSk7XG4iXSwibmFtZXMiOlsiZmV0Y2hTZWxlY3RlZERvZ3MiLCJmZXRjaEFsbERvZ3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/allBreeds.js":
/*!**********************************!*\
  !*** ./src/scripts/allBreeds.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDogContainer: function() { return /* binding */ createDogContainer; },\n/* harmony export */   fetchAllDogs: function() { return /* binding */ fetchAllDogs; }\n/* harmony export */ });\n/* harmony import */ var _dogAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dogAPI */ \"./src/scripts/dogAPI.js\");\n\nconst fetchAllDogs = async () => {\n  // an array to push the names into for the scrool down\n  const dogNamesContainer = [];\n  // an array of all the bio\n  const dogBioContainer = [];\n  //all img info \n  const dogImgContainer = [];\n  try {\n    const allDogs = await (0,_dogAPI__WEBPACK_IMPORTED_MODULE_0__.getAllBreeds)();\n    // console.log(allDogs);\n\n    allDogs.forEach(dog => {\n      dogNamesContainer.push(dog.name);\n      dogBioContainer.push(createDogContainer(dog));\n      dogImgContainer.push(createImgContainer(dog.image));\n    });\n    console.log(dogImgContainer);\n    // console.log(dogBioContainer);\n  } catch (error) {\n    console.log(error);\n  }\n};\nfunction createDogContainer(dogData) {\n  const formattedName = dogData.name.toLowerCase().replace(/\\s+/g, \"-\");\n  const li = document.createElement(\"li\");\n  li.classList.add(\"all-dog-container\", formattedName);\n  li.style.display = \"none\";\n  const propsToDisplay = {\n    name: \"Name\",\n    bred_for: \"Bred For\",\n    temperament: \"Temperament\",\n    life_span: \"Life Span\",\n    breed_group: \"Breed Group\",\n    height: \"Height\",\n    weight: \"Weight\"\n  };\n  for (let prop in propsToDisplay) {\n    const item = document.createElement(\"p\");\n    if (typeof dogData[prop] === \"object\") {\n      // This handles height and weight which are objects\n      item.textContent = `${propsToDisplay[prop]}: ${dogData[prop].imperial} (imperial) / ${dogData[prop].metric} (metric)`;\n    } else {\n      item.textContent = `${propsToDisplay[prop]}: ${dogData[prop]}`;\n    }\n    // console.log(\"item: \", item);\n    li.append(item);\n  }\n  return li;\n}\nfunction createImgContainer(dogImgData) {\n  // console.log(dogImgData);\n  const dogImgId = dogImgData.id;\n  const imgItem = document.createElement(\"li\");\n  imgItem.className = `all-img-container ${dogImgId}`;\n  imgItem.dataset.dog = dogImgId;\n  imgItem.innerHTML = `<img src=\"${dogImgData.url}\" alt=\"${dogImgData.id}\">`;\n  // imgItem.onclick = displayDogInfo.bind(null, formattedName);\n\n  document.querySelector(\".all-dog-img\").appendChild(imgItem);\n  return imgItem;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0MsUUFBUTtFQUU5QkUsT0FBTyxDQUFDRyxTQUFTLEdBQUksYUFBWU4sVUFBVSxDQUFDTyxHQUFJLFVBQVNQLFVBQVUsQ0FBQ0UsRUFBRyxJQUFHO0VBQzFFOztFQUVBckIsUUFBUSxDQUFDMkIsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxXQUFXLENBQUNOLE9BQU8sQ0FBQztFQUUzRCxPQUFPQSxPQUFPO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZG9nLy4vc3JjL3NjcmlwdHMvYWxsQnJlZWRzLmpzPzE4NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsQnJlZWRzIH0gZnJvbSBcIi4vZG9nQVBJXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFsbERvZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gYW4gYXJyYXkgdG8gcHVzaCB0aGUgbmFtZXMgaW50byBmb3IgdGhlIHNjcm9vbCBkb3duXG4gICAgY29uc3QgZG9nTmFtZXNDb250YWluZXIgPSBbXTtcbiAgICAvLyBhbiBhcnJheSBvZiBhbGwgdGhlIGJpb1xuICAgIGNvbnN0IGRvZ0Jpb0NvbnRhaW5lciA9IFtdO1xuICAgIC8vYWxsIGltZyBpbmZvIFxuICAgIGNvbnN0IGRvZ0ltZ0NvbnRhaW5lciA9IFtdXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxEb2dzID0gYXdhaXQgZ2V0QWxsQnJlZWRzKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbERvZ3MpO1xuXG4gICAgICAgIGFsbERvZ3MuZm9yRWFjaCgoZG9nKSA9PiB7XG4gICAgICAgICAgICBkb2dOYW1lc0NvbnRhaW5lci5wdXNoKGRvZy5uYW1lKVxuICAgICAgICAgICAgZG9nQmlvQ29udGFpbmVyLnB1c2goY3JlYXRlRG9nQ29udGFpbmVyKGRvZykpXG4gICAgICAgICAgICBkb2dJbWdDb250YWluZXIucHVzaChjcmVhdGVJbWdDb250YWluZXIoZG9nLmltYWdlKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZG9nSW1nQ29udGFpbmVyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9nQmlvQ29udGFpbmVyKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEb2dDb250YWluZXIoZG9nRGF0YSkge1xuICAgIGNvbnN0IGZvcm1hdHRlZE5hbWUgPSBkb2dEYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwiYWxsLWRvZy1jb250YWluZXJcIiwgZm9ybWF0dGVkTmFtZSk7XG4gICAgbGkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgcHJvcHNUb0Rpc3BsYXkgPSB7XG4gICAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgICBicmVkX2ZvcjogXCJCcmVkIEZvclwiLFxuICAgICAgICB0ZW1wZXJhbWVudDogXCJUZW1wZXJhbWVudFwiLFxuICAgICAgICBsaWZlX3NwYW46IFwiTGlmZSBTcGFuXCIsXG4gICAgICAgIGJyZWVkX2dyb3VwOiBcIkJyZWVkIEdyb3VwXCIsXG4gICAgICAgIGhlaWdodDogXCJIZWlnaHRcIixcbiAgICAgICAgd2VpZ2h0OiBcIldlaWdodFwiLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzVG9EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2dEYXRhW3Byb3BdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgaGVpZ2h0IGFuZCB3ZWlnaHQgd2hpY2ggYXJlIG9iamVjdHNcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtwcm9wc1RvRGlzcGxheVtwcm9wXX06ICR7ZG9nRGF0YVtwcm9wXS5pbXBlcmlhbH0gKGltcGVyaWFsKSAvICR7ZG9nRGF0YVtwcm9wXS5tZXRyaWN9IChtZXRyaWMpYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtwcm9wc1RvRGlzcGxheVtwcm9wXX06ICR7ZG9nRGF0YVtwcm9wXX1gO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICBsaS5hcHBlbmQoaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUltZ0NvbnRhaW5lcihkb2dJbWdEYXRhKSB7XG4gICAgLy8gY29uc29sZS5sb2coZG9nSW1nRGF0YSk7XG4gICAgY29uc3QgZG9nSW1nSWQgPSBkb2dJbWdEYXRhLmlkXG5cbiAgICBjb25zdCBpbWdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gYGFsbC1pbWctY29udGFpbmVyICR7ZG9nSW1nSWR9YDtcbiAgICBpbWdJdGVtLmRhdGFzZXQuZG9nID0gZG9nSW1nSWQ7XG5cbiAgICBpbWdJdGVtLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7ZG9nSW1nRGF0YS51cmx9XCIgYWx0PVwiJHtkb2dJbWdEYXRhLmlkfVwiPmA7XG4gICAgLy8gaW1nSXRlbS5vbmNsaWNrID0gZGlzcGxheURvZ0luZm8uYmluZChudWxsLCBmb3JtYXR0ZWROYW1lKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLWRvZy1pbWdcIikuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XG5cbiAgICByZXR1cm4gaW1nSXRlbTtcbn0iXSwibmFtZXMiOlsiZ2V0QWxsQnJlZWRzIiwiZmV0Y2hBbGxEb2dzIiwiZG9nTmFtZXNDb250YWluZXIiLCJkb2dCaW9Db250YWluZXIiLCJkb2dJbWdDb250YWluZXIiLCJhbGxEb2dzIiwiZm9yRWFjaCIsImRvZyIsInB1c2giLCJuYW1lIiwiY3JlYXRlRG9nQ29udGFpbmVyIiwiY3JlYXRlSW1nQ29udGFpbmVyIiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkb2dEYXRhIiwiZm9ybWF0dGVkTmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImxpIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwicHJvcHNUb0Rpc3BsYXkiLCJicmVkX2ZvciIsInRlbXBlcmFtZW50IiwibGlmZV9zcGFuIiwiYnJlZWRfZ3JvdXAiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJwcm9wIiwiaXRlbSIsInRleHRDb250ZW50IiwiaW1wZXJpYWwiLCJtZXRyaWMiLCJhcHBlbmQiLCJkb2dJbWdEYXRhIiwiZG9nSW1nSWQiLCJpZCIsImltZ0l0ZW0iLCJjbGFzc05hbWUiLCJkYXRhc2V0IiwiaW5uZXJIVE1MIiwidXJsIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/allBreeds.js\n");

/***/ }),

/***/ "./src/scripts/dog.js":
/*!****************************!*\
  !*** ./src/scripts/dog.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDogContainer: function() { return /* binding */ createDogContainer; },\n/* harmony export */   createImgContainer: function() { return /* binding */ createImgContainer; },\n/* harmony export */   fetchSelectedDogs: function() { return /* binding */ fetchSelectedDogs; }\n/* harmony export */ });\n/* harmony import */ var _dogAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dogAPI.js */ \"./src/scripts/dogAPI.js\");\n\nconst fetchSelectedDogs = async () => {\n  const dogs = [\"Chinese Shar-Pei\", \"Bull Terrier\", \"Golden Retriever\", \"Shih Tzu\", \"Australian Shepherd\", \"Shiba Inu\", \"Rottweiler\", \"Doberman Pinscher\"];\n  const dogInfoContainers = [];\n  const dogImgContainers = [];\n  try {\n    const dogPromises = dogs.map(async dog => {\n      const dogData = await (0,_dogAPI_js__WEBPACK_IMPORTED_MODULE_0__.getDogInfo)(dog);\n      const dogImg = await (0,_dogAPI_js__WEBPACK_IMPORTED_MODULE_0__.getDogImg)(dogData.id);\n      return {\n        dogData,\n        dogImg\n      };\n    });\n    const results = await Promise.all(dogPromises);\n    results.forEach(result => {\n      dogImgContainers.push(createImgContainer(result.dogImg));\n      dogInfoContainers.push(createDogContainer(result.dogData));\n    });\n    const dogInfoGallery = document.getElementById(\"dog-eight-info-container\");\n    dogInfoContainers.forEach(container => {\n      dogInfoGallery.appendChild(container);\n    });\n  } catch (error) {\n    console.log(error);\n  }\n};\nfunction createDogContainer(dogData) {\n  const formattedName = dogData.name.toLowerCase().replace(/\\s+/g, \"-\");\n  const li = document.createElement(\"li\");\n  li.classList.add(\"dog-item-info\", formattedName);\n  li.style.display = \"none\";\n  const propsToDisplay = {\n    name: \"Name\",\n    bred_for: \"Bred For\",\n    temperament: \"Temperament\",\n    life_span: \"Life Span\",\n    breed_group: \"Breed Group\",\n    height: \"Height\",\n    weight: \"Weight\"\n  };\n  for (let prop in propsToDisplay) {\n    const item = document.createElement(\"p\");\n    if (typeof dogData[prop] === \"object\") {\n      // This handles height and weight which are objects\n      item.textContent = `${propsToDisplay[prop]}: ${dogData[prop].imperial} (imperial) / ${dogData[prop].metric} (metric)`;\n    } else {\n      item.textContent = `${propsToDisplay[prop]}: ${dogData[prop]}`;\n    }\n    // console.log(\"item: \", item);\n    li.append(item);\n  }\n  return li;\n}\nfunction createImgContainer(dogImgData) {\n  const dog = dogImgData[0].breeds[0];\n  const formattedName = dog.name.toLowerCase().replace(/\\s+/g, \"-\");\n  // console.log(formattedName);\n\n  const imgItem = document.createElement(\"li\");\n  imgItem.className = `dog-left-img-item ${formattedName}`;\n  imgItem.dataset.dog = formattedName;\n  // console.log(\"item list: \", imgItem);\n\n  imgItem.innerHTML = `<img src=\"${dogImgData[0].url}\" alt=\"${dog.name}\">`;\n  imgItem.onclick = displayDogInfo.bind(null, formattedName);\n  document.querySelector(\".dog-eight-img-list\").appendChild(imgItem);\n  return imgItem;\n}\nfunction displayDogInfo(clickedDog) {\n  const allInfoContainers = document.querySelectorAll(\".dog-item-info\");\n  allInfoContainers.forEach(container => container.style.display = \"none\");\n  const infoContainer = document.querySelector(`.dog-item-info.${clickedDog}`);\n  if (infoContainer) {\n    infoContainer.style.display = \"block\";\n  } else {\n    console.error(`No info container found for ${clickedDog}`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDaEQsT0FBTyxDQUNwQlEsU0FBUyxJQUFNQSxTQUFTLENBQUNhLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQzlDLENBQUM7RUFFRCxNQUFNNEIsYUFBYSxHQUFHNUMsUUFBUSxDQUFDd0MsYUFBYSxDQUN2QyxrQkFBaUJDLFVBQVcsRUFDakMsQ0FBQztFQUNELElBQUlHLGFBQWEsRUFBRTtJQUNmQSxhQUFhLENBQUM3QixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0VBQ3pDLENBQUMsTUFBTTtJQUNIWCxPQUFPLENBQUNELEtBQUssQ0FBRSwrQkFBOEJxQyxVQUFXLEVBQUMsQ0FBQztFQUM5RDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZG9nLy4vc3JjL3NjcmlwdHMvZG9nLmpzPzEwNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RG9nSW5mbywgZ2V0RG9nSW1nIH0gZnJvbSBcIi4vZG9nQVBJLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlbGVjdGVkRG9ncyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkb2dzID0gW1xuICAgICAgICBcIkNoaW5lc2UgU2hhci1QZWlcIixcbiAgICAgICAgXCJCdWxsIFRlcnJpZXJcIixcbiAgICAgICAgXCJHb2xkZW4gUmV0cmlldmVyXCIsXG4gICAgICAgIFwiU2hpaCBUenVcIixcbiAgICAgICAgXCJBdXN0cmFsaWFuIFNoZXBoZXJkXCIsXG4gICAgICAgIFwiU2hpYmEgSW51XCIsXG4gICAgICAgIFwiUm90dHdlaWxlclwiLFxuICAgICAgICBcIkRvYmVybWFuIFBpbnNjaGVyXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGRvZ0luZm9Db250YWluZXJzID0gW107XG4gICAgY29uc3QgZG9nSW1nQ29udGFpbmVycyA9IFtdO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZG9nUHJvbWlzZXMgPSBkb2dzLm1hcChhc3luYyAoZG9nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkb2dEYXRhID0gYXdhaXQgZ2V0RG9nSW5mbyhkb2cpO1xuICAgICAgICAgICAgY29uc3QgZG9nSW1nID0gYXdhaXQgZ2V0RG9nSW1nKGRvZ0RhdGEuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgZG9nRGF0YSwgZG9nSW1nIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChkb2dQcm9taXNlcyk7XG5cbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGRvZ0ltZ0NvbnRhaW5lcnMucHVzaChjcmVhdGVJbWdDb250YWluZXIocmVzdWx0LmRvZ0ltZykpO1xuICAgICAgICAgICAgZG9nSW5mb0NvbnRhaW5lcnMucHVzaChjcmVhdGVEb2dDb250YWluZXIocmVzdWx0LmRvZ0RhdGEpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZG9nSW5mb0dhbGxlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIFwiZG9nLWVpZ2h0LWluZm8tY29udGFpbmVyXCJcbiAgICAgICAgKTtcblxuICAgICAgICBkb2dJbmZvQ29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgICAgICAgIGRvZ0luZm9HYWxsZXJ5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9nQ29udGFpbmVyKGRvZ0RhdGEpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWROYW1lID0gZG9nRGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCBcIi1cIik7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuY2xhc3NMaXN0LmFkZChcImRvZy1pdGVtLWluZm9cIiwgZm9ybWF0dGVkTmFtZSk7XG4gICAgbGkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgcHJvcHNUb0Rpc3BsYXkgPSB7XG4gICAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgICBicmVkX2ZvcjogXCJCcmVkIEZvclwiLFxuICAgICAgICB0ZW1wZXJhbWVudDogXCJUZW1wZXJhbWVudFwiLFxuICAgICAgICBsaWZlX3NwYW46IFwiTGlmZSBTcGFuXCIsXG4gICAgICAgIGJyZWVkX2dyb3VwOiBcIkJyZWVkIEdyb3VwXCIsXG4gICAgICAgIGhlaWdodDogXCJIZWlnaHRcIixcbiAgICAgICAgd2VpZ2h0OiBcIldlaWdodFwiLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzVG9EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2dEYXRhW3Byb3BdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGhhbmRsZXMgaGVpZ2h0IGFuZCB3ZWlnaHQgd2hpY2ggYXJlIG9iamVjdHNcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtwcm9wc1RvRGlzcGxheVtwcm9wXX06ICR7ZG9nRGF0YVtwcm9wXS5pbXBlcmlhbH0gKGltcGVyaWFsKSAvICR7ZG9nRGF0YVtwcm9wXS5tZXRyaWN9IChtZXRyaWMpYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgJHtwcm9wc1RvRGlzcGxheVtwcm9wXX06ICR7ZG9nRGF0YVtwcm9wXX1gO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbTogXCIsIGl0ZW0pO1xuICAgICAgICBsaS5hcHBlbmQoaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1nQ29udGFpbmVyKGRvZ0ltZ0RhdGEpIHtcbiAgICBjb25zdCBkb2cgPSBkb2dJbWdEYXRhWzBdLmJyZWVkc1swXTtcbiAgICBjb25zdCBmb3JtYXR0ZWROYW1lID0gZG9nLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JtYXR0ZWROYW1lKTtcblxuICAgIGNvbnN0IGltZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaW1nSXRlbS5jbGFzc05hbWUgPSBgZG9nLWxlZnQtaW1nLWl0ZW0gJHtmb3JtYXR0ZWROYW1lfWA7XG4gICAgaW1nSXRlbS5kYXRhc2V0LmRvZyA9IGZvcm1hdHRlZE5hbWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJpdGVtIGxpc3Q6IFwiLCBpbWdJdGVtKTtcblxuICAgIGltZ0l0ZW0uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkb2dJbWdEYXRhWzBdLnVybH1cIiBhbHQ9XCIke2RvZy5uYW1lfVwiPmA7XG4gICAgaW1nSXRlbS5vbmNsaWNrID0gZGlzcGxheURvZ0luZm8uYmluZChudWxsLCBmb3JtYXR0ZWROYW1lKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZG9nLWVpZ2h0LWltZy1saXN0XCIpLmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xuXG4gICAgcmV0dXJuIGltZ0l0ZW07XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEb2dJbmZvKGNsaWNrZWREb2cpIHtcbiAgICBjb25zdCBhbGxJbmZvQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG9nLWl0ZW0taW5mb1wiKTtcbiAgICBhbGxJbmZvQ29udGFpbmVycy5mb3JFYWNoKFxuICAgICAgICAoY29udGFpbmVyKSA9PiAoY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcbiAgICApO1xuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuZG9nLWl0ZW0taW5mby4ke2NsaWNrZWREb2d9YFxuICAgICk7XG4gICAgaWYgKGluZm9Db250YWluZXIpIHtcbiAgICAgICAgaW5mb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYE5vIGluZm8gY29udGFpbmVyIGZvdW5kIGZvciAke2NsaWNrZWREb2d9YCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImdldERvZ0luZm8iLCJnZXREb2dJbWciLCJmZXRjaFNlbGVjdGVkRG9ncyIsImRvZ3MiLCJkb2dJbmZvQ29udGFpbmVycyIsImRvZ0ltZ0NvbnRhaW5lcnMiLCJkb2dQcm9taXNlcyIsIm1hcCIsImRvZyIsImRvZ0RhdGEiLCJkb2dJbWciLCJpZCIsInJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwiZm9yRWFjaCIsInJlc3VsdCIsInB1c2giLCJjcmVhdGVJbWdDb250YWluZXIiLCJjcmVhdGVEb2dDb250YWluZXIiLCJkb2dJbmZvR2FsbGVyeSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZvcm1hdHRlZE5hbWUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwicHJvcHNUb0Rpc3BsYXkiLCJicmVkX2ZvciIsInRlbXBlcmFtZW50IiwibGlmZV9zcGFuIiwiYnJlZWRfZ3JvdXAiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJwcm9wIiwiaXRlbSIsInRleHRDb250ZW50IiwiaW1wZXJpYWwiLCJtZXRyaWMiLCJhcHBlbmQiLCJkb2dJbWdEYXRhIiwiYnJlZWRzIiwiaW1nSXRlbSIsImNsYXNzTmFtZSIsImRhdGFzZXQiLCJpbm5lckhUTUwiLCJ1cmwiLCJvbmNsaWNrIiwiZGlzcGxheURvZ0luZm8iLCJiaW5kIiwicXVlcnlTZWxlY3RvciIsImNsaWNrZWREb2ciLCJhbGxJbmZvQ29udGFpbmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmZvQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/dog.js\n");

/***/ }),

/***/ "./src/scripts/dogAPI.js":
/*!*******************************!*\
  !*** ./src/scripts/dogAPI.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllBreeds: function() { return /* binding */ getAllBreeds; },\n/* harmony export */   getDogImg: function() { return /* binding */ getDogImg; },\n/* harmony export */   getDogInfo: function() { return /* binding */ getDogInfo; }\n/* harmony export */ });\nconst api_key = \"live_IMV5RlpU4XaI26YknUNIxE1fFnIbdBbStDAFX71eTd7LRttKRLdca6c8f2UDhLng\";\nconst getDogInfo = dog => {\n  return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dog}`).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Error\");\n    }\n    return response.json();\n  }).then(data => {\n    return data[0];\n  });\n};\nconst getDogImg = id => {\n  return fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}`, {\n    headers: {\n      \"x-api-key\": api_key\n    }\n  }).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Error\");\n    }\n    return response.json();\n  }).then(data => {\n    return data;\n  });\n};\nconst getAllBreeds = () => {\n  return fetch(\"https://api.thedogapi.com/v1/breeds\", {\n    headers: {\n      \"x-api-key\": api_key\n    }\n  }).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Error\");\n    }\n    return response.json();\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kb2dBUEkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsT0FBTyxHQUNULHVFQUF1RTtBQUVwRSxNQUFNQyxVQUFVLEdBQUlDLEdBQUcsSUFBSztFQUMvQixPQUFPQyxLQUFLLENBQUUsZ0RBQStDRCxHQUFJLEVBQUMsQ0FBQyxDQUM5REUsSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDaEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1QjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBRUssSUFBSSxJQUFLO0lBQ1osT0FBT0EsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNsQixDQUFDLENBQUM7QUFDVixDQUFDO0FBRU0sTUFBTUMsU0FBUyxHQUFJQyxFQUFFLElBQUs7RUFDN0IsT0FBT1IsS0FBSyxDQUFFLHdEQUF1RFEsRUFBRyxFQUFDLEVBQUU7SUFDdkVDLE9BQU8sRUFBRTtNQUNMLFdBQVcsRUFBRVo7SUFDakI7RUFDSixDQUFDLENBQUMsQ0FDR0ksSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDaEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1QjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDLENBQ0RKLElBQUksQ0FBRUssSUFBSSxJQUFLO0lBQ1osT0FBT0EsSUFBSTtFQUNmLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFTSxNQUFNSSxZQUFZLEdBQUdBLENBQUEsS0FBTTtFQUM5QixPQUFPVixLQUFLLENBQUMscUNBQXFDLEVBQUU7SUFDaERTLE9BQU8sRUFBRTtNQUNMLFdBQVcsRUFBRVo7SUFDakI7RUFDSixDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNkLE1BQU0sSUFBSUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1QjtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGRvZy8uL3NyYy9zY3JpcHRzL2RvZ0FQSS5qcz9hZWRkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaV9rZXkgPVxuICAgIFwibGl2ZV9JTVY1UmxwVTRYYUkyNllrblVOSXhFMWZGbkliZEJiU3REQUZYNzFlVGQ3TFJ0dEtSTGRjYTZjOGYyVURoTG5nXCI7XG5cbmV4cG9ydCBjb25zdCBnZXREb2dJbmZvID0gKGRvZykgPT4ge1xuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkudGhlZG9nYXBpLmNvbS92MS9icmVlZHMvc2VhcmNoP3E9JHtkb2d9YClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFbMF07XG4gICAgICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERvZ0ltZyA9IChpZCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkudGhlZG9nYXBpLmNvbS92MS9pbWFnZXMvc2VhcmNoP2JyZWVkX2lkcz0ke2lkfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJ4LWFwaS1rZXlcIjogYXBpX2tleSxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQnJlZWRzID0gKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vYXBpLnRoZWRvZ2FwaS5jb20vdjEvYnJlZWRzXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJ4LWFwaS1rZXlcIjogYXBpX2tleSxcbiAgICAgICAgfSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJhcGlfa2V5IiwiZ2V0RG9nSW5mbyIsImRvZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiZ2V0RG9nSW1nIiwiaWQiLCJoZWFkZXJzIiwiZ2V0QWxsQnJlZWRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/dogAPI.js\n");

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