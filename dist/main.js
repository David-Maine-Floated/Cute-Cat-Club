/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById('main-container');\n  const searchButton = document.querySelector('.search-breed');\n  const searchBreedInput = document.querySelector('.input');\n  const dropDownList = document.querySelector('.breed-select');\n  const searchBreedButton = document.querySelector('.search-breed-button');\n  const kittyImage = document.querySelector('.main-img');\n  const baseUrl = \"https://api.api-ninjas.com//v1\";\n  const searchUrl = \"https://api.api-ninjas.com//v1/cats?name=\";\n  const apiKey = \"SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf\";\n  let currentKitty;\n  const fetchKitty = async e => {\n    e.preventDefault();\n    let breed = dropDownList.value;\n    try {\n      const apiKey = \"SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf\";\n      const baseUrl = \"https://api.api-ninjas.com/v1/cats?name=\";\n      let response = await fetch(baseUrl + breed, {\n        method: 'GET',\n        headers: {\n          'X-Api-Key': apiKey,\n          \"Content-Type\": \"application/json\"\n        }\n      });\n      if (response.ok) {\n        let resBody = await response.json();\n        currentKitty = resBody;\n        console.log(resBody);\n      } else {\n        throw new Error(`API request failed with status ${response.status}: ${response.message}`);\n      }\n    } catch (err) {\n      console.error(err);\n    }\n    populateData();\n  };\n  function populateData() {\n    console.log(currentKitty[0].image_link);\n    kittyImage.src = currentKitty[0].image_link;\n  }\n\n  //event listneres\n\n  searchBreedButton.addEventListener('click', fetchKitty);\n  const validBreeds = ['Siamese cat', 'Maine Coon', 'British Shorthair', 'Ragdoll', 'American Shorthair', 'Abyssinian', 'Scottish Fold', 'Birman', 'Bombay', 'Siberian', 'Norwegian Forest', 'Russian Blue', 'American Curl', 'American Bobtail', 'Devon Rex', 'Balinese'];\n  validBreeds.forEach(breed => {\n    let op = document.createElement('option');\n    op.value = breed;\n    op.innerHTML = breed;\n    dropDownList.appendChild(op);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWFyY2hCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoQnJlZWRJbnB1dCIsImRyb3BEb3duTGlzdCIsInNlYXJjaEJyZWVkQnV0dG9uIiwia2l0dHlJbWFnZSIsImJhc2VVcmwiLCJzZWFyY2hVcmwiLCJhcGlLZXkiLCJjdXJyZW50S2l0dHkiLCJmZXRjaEtpdHR5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYnJlZWQiLCJ2YWx1ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwib2siLCJyZXNCb2R5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnIiLCJlcnJvciIsInBvcHVsYXRlRGF0YSIsImltYWdlX2xpbmsiLCJzcmMiLCJ2YWxpZEJyZWVkcyIsImZvckVhY2giLCJvcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3V0ZS1jYXQtY2x1Yi1tYWluLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1icmVlZCcpO1xuICAgIGNvbnN0IHNlYXJjaEJyZWVkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQnKTtcbiAgICBjb25zdCBkcm9wRG93bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJlZWQtc2VsZWN0Jyk7XG4gICAgY29uc3Qgc2VhcmNoQnJlZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJyZWVkLWJ1dHRvbicpO1xuICAgIGNvbnN0IGtpdHR5SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbWcnKTtcblxuXG5cblxuICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLmFwaS1uaW5qYXMuY29tLy92MVwiO1xuICAgIGNvbnN0IHNlYXJjaFVybCA9IFwiaHR0cHM6Ly9hcGkuYXBpLW5pbmphcy5jb20vL3YxL2NhdHM/bmFtZT1cIjtcbiAgICBjb25zdCBhcGlLZXkgPSBcIlNEVmRSMjYzQ3o0bVh4MWxWR2xVb0E9PXV1MFVzaTJGRkxBRzl5V2ZcIjtcbiAgICBcblxuICAgIGxldCBjdXJyZW50S2l0dHk7XG5cblxuXG4gICAgY29uc3QgZmV0Y2hLaXR0eSA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgICAgIGxldCBicmVlZCA9IGRyb3BEb3duTGlzdC52YWx1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBhcGlLZXkgPSBcIlNEVmRSMjYzQ3o0bVh4MWxWR2xVb0E9PXV1MFVzaTJGRkxBRzl5V2ZcIjtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLmFwaS1uaW5qYXMuY29tL3YxL2NhdHM/bmFtZT1cIjsgIFxuICAgXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVXJsICsgYnJlZWQsIFxuICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1BcGktS2V5JzogYXBpS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGxldCByZXNCb2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRLaXR0eSA9IHJlc0JvZHk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzQm9keSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBUEkgcmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wdWxhdGVEYXRhKCk7XG4gICAgfTtcblxuICAgXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVEYXRhKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50S2l0dHlbMF0uaW1hZ2VfbGluayk7XG4gICAgICAgIGtpdHR5SW1hZ2Uuc3JjID0gY3VycmVudEtpdHR5WzBdLmltYWdlX2xpbms7XG4gICAgfVxuXG5cblxuICAgIC8vZXZlbnQgbGlzdG5lcmVzXG5cbiAgICBzZWFyY2hCcmVlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoS2l0dHkpO1xuXG4gICAgXG5cbiAgICBcbiAgICBjb25zdCB2YWxpZEJyZWVkcyA9IFsnU2lhbWVzZSBjYXQnLCAnTWFpbmUgQ29vbicsICdCcml0aXNoIFNob3J0aGFpcicsICdSYWdkb2xsJywgJ0FtZXJpY2FuIFNob3J0aGFpcicsICdBYnlzc2luaWFuJywgJ1Njb3R0aXNoIEZvbGQnLCAnQmlybWFuJywgJ0JvbWJheScsICdTaWJlcmlhbicsICdOb3J3ZWdpYW4gRm9yZXN0JywgJ1J1c3NpYW4gQmx1ZScsICdBbWVyaWNhbiBDdXJsJywgJ0FtZXJpY2FuIEJvYnRhaWwnLCAnRGV2b24gUmV4JywgJ0JhbGluZXNlJ107XG5cbiAgICBcbiAgICB2YWxpZEJyZWVkcy5mb3JFYWNoKGJyZWVkID0+IHtcbiAgICAgICAgbGV0IG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wLnZhbHVlID0gYnJlZWQ7XG4gICAgICAgIG9wLmlubmVySFRNTCA9IGJyZWVkO1xuICAgICAgICBkcm9wRG93bkxpc3QuYXBwZW5kQ2hpbGQob3ApO1xuXG4gICAgfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbn0pO1xuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFFQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDdEQsTUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDNUQsTUFBTUMsZ0JBQWdCLEdBQUdOLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUN6RCxNQUFNRSxZQUFZLEdBQUdQLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLGVBQWUsQ0FBQztFQUM1RCxNQUFNRyxpQkFBaUIsR0FBR1IsUUFBUSxDQUFDSyxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDeEUsTUFBTUksVUFBVSxHQUFHVCxRQUFRLENBQUNLLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFLdEQsTUFBTUssT0FBTyxHQUFHLGdDQUFnQztFQUNoRCxNQUFNQyxTQUFTLEdBQUcsMkNBQTJDO0VBQzdELE1BQU1DLE1BQU0sR0FBRywwQ0FBMEM7RUFHekQsSUFBSUMsWUFBWTtFQUloQixNQUFNQyxVQUFVLEdBQUcsTUFBT0MsQ0FBQyxJQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBR2xCLElBQUlDLEtBQUssR0FBR1YsWUFBWSxDQUFDVyxLQUFLO0lBRTlCLElBQUk7TUFFQSxNQUFNTixNQUFNLEdBQUcsMENBQTBDO01BQ3pELE1BQU1GLE9BQU8sR0FBRywwQ0FBMEM7TUFFMUQsSUFBSVMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ1YsT0FBTyxHQUFHTyxLQUFLLEVBQ3RDO1FBQ0lJLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtVQUNMLFdBQVcsRUFBRVYsTUFBTTtVQUNuQixjQUFjLEVBQUU7UUFDcEI7TUFDSixDQUFDLENBQUM7TUFFTixJQUFJTyxRQUFRLENBQUNJLEVBQUUsRUFBRTtRQUNiLElBQUlDLE9BQU8sR0FBRyxNQUFNTCxRQUFRLENBQUNNLElBQUksQ0FBQyxDQUFDO1FBQ25DWixZQUFZLEdBQUdXLE9BQU87UUFDdEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUM7TUFFeEIsQ0FBQyxNQUFNO1FBQ0gsTUFBTSxJQUFJSSxLQUFLLENBQUUsa0NBQWlDVCxRQUFRLENBQUNVLE1BQU8sS0FBSVYsUUFBUSxDQUFDVyxPQUFRLEVBQUMsQ0FBQztNQUM3RjtJQUNKLENBQUMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7TUFDVkwsT0FBTyxDQUFDTSxLQUFLLENBQUNELEdBQUcsQ0FBQztJQUN0QjtJQUVBRSxZQUFZLENBQUMsQ0FBQztFQUNsQixDQUFDO0VBR0QsU0FBU0EsWUFBWUEsQ0FBQSxFQUFHO0lBQ3BCUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDcUIsVUFBVSxDQUFDO0lBQ3ZDekIsVUFBVSxDQUFDMEIsR0FBRyxHQUFHdEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDcUIsVUFBVTtFQUMvQzs7RUFJQTs7RUFFQTFCLGlCQUFpQixDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVhLFVBQVUsQ0FBQztFQUt2RCxNQUFNc0IsV0FBVyxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7RUFHeFFBLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDcEIsS0FBSyxJQUFJO0lBQ3pCLElBQUlxQixFQUFFLEdBQUd0QyxRQUFRLENBQUN1QyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ3pDRCxFQUFFLENBQUNwQixLQUFLLEdBQUdELEtBQUs7SUFDaEJxQixFQUFFLENBQUNFLFNBQVMsR0FBR3ZCLEtBQUs7SUFDcEJWLFlBQVksQ0FBQ2tDLFdBQVcsQ0FBQ0gsRUFBRSxDQUFDO0VBRWhDLENBQUMsQ0FBQztBQWNOLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXRlLWNhdC1jbHViLW1haW4vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;