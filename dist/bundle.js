/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/AddWedding.js":
/*!*****************************************!*\
  !*** ./src/js/components/AddWedding.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const html = String.raw;

// the Add Weddings Dashboard Return HTML
function AddWeddingDashboard() {
  return html`
    <div>
      <h1>I am the add weddings dashboard</h1>
    </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddWeddingDashboard);


/***/ }),

/***/ "./src/js/components/EditWedding.js":
/*!******************************************!*\
  !*** ./src/js/components/EditWedding.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const html = String.raw;

function EditWeddingDashboard(obj) {
  return html`
    <div>
      <h1>I am the edit weddings dashboard</h1>
    </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditWeddingDashboard);


/***/ }),

/***/ "./src/js/components/Overview.js":
/*!***************************************!*\
  !*** ./src/js/components/Overview.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Weddings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weddings */ "./src/js/components/Weddings.js");
const html = String.raw;



// the Overview Dashboard Return HTML
function OverviewDashboard(obj) {
  return html`
    <section class="text-gray-700 space-y-4">
      <!-- Header Component -->
      <header class="flex justify-between items-center">
        <!-- Current page Component -->
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <h2 class="text-xl font-bold">Overview</h2>
        </div>

        <!-- Affiliated Users Component -->
        <div class="flex justify-between items-center -space-x-3">
          <div
            class="h-10 w-10 bg-gray-500 rounded-full border-2 flex items-center justify-center"
          ></div>
          <div
            class="h-10 w-10 bg-gray-500 rounded-full border-2 flex items-center justify-center"
          ></div>
          <div
            class="h-10 w-10 bg-gray-500 rounded-full border-2 flex items-center justify-center"
          ></div>
          <div
            class="h-10 w-10 bg-gray-500 rounded-full border-2 flex items-center justify-center"
          ></div>
          <div
            class="h-10 w-10 bg-gray-500 rounded-full border-2 flex items-center justify-center text-sm text-gray-200"
          >
            +12
          </div>
        </div>
      </header>

      <!-- Task Overview Component -->
      <section class="flex gap-4 h-[280px]">
        <div class="h-full flex-1 grid grid-rows-2 grid-cols-2 gap-4">
          <!-- Micro Task Component (Total) -->
          <div
            class="text-slate-200 rounded-lg flex justify-between items-center p-6 bg-gradient-to-br from-green-900 to-green-800 border border-gray-200  shadow-lg"
          >
            <div class="space-y-2">
              <h1 class="text-3xl font-bold">50</h1>
              <p class="text-sm font-semibold">Total Tasks</p>
              <p class="text-sm font-semibold">+7 this week</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 self-start"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- Micro Tasks Component (completed) -->
          <div
            class="text-gray-700 rounded-lg flex justify-between items-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg"
          >
            <div class="space-y-2">
              <h1 class="text-3xl font-bold">12</h1>
              <p class="text-sm font-semibold">Completed</p>
              <p class="text-sm font-semibold">+1 this week</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 self-start"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- Micro Tasks Component (Overdue) -->
          <div
            class="text-gray-700 rounded-lg flex justify-between items-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg"
          >
            <div class="space-y-2">
              <h1 class="text-3xl font-bold">3</h1>
              <p class="text-sm font-semibold">Overdue</p>
              <p class="text-sm font-semibold">+1 this week</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 self-start"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- Micro Tasks Component (Todos) -->
          <div
            class="text-gray-700 rounded-lg flex justify-between items-center p-6 bg-gradient-to-br from-slate-200 to-slate-300 border border-gray-300  shadow-lg"
          >
            <div class="space-y-2">
              <h1 class="text-3xl font-bold">23</h1>
              <p class="text-sm font-semibold">Todo Tasks</p>
              <p class="text-sm font-semibold">+7 this week</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 self-start"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- Get Premium Plus Section -->
        <div
          class="h-full w-[300px] 2xl:w-[400px] text-4xl font-bold flex justify-between flex-col p-6 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg"
        >
          <p>
            Get <span class="text-green-800">Premium+</span> to manage more than
            100 projects
          </p>
          <aside class="text-base">Learn More &rarr;</aside>
        </div>

        <!-- Overall Progress Tracking Component -->
        <div
          class="bg-slate-200 h-full w-[250px] flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg"
        >
          <div
            class=" h-48 w-48 rounded-full border-[12px] border-green-700 flex items-center justify-center"
          >
            <div class="text-center space-y-2">
              <p class="text-4xl font-bold">52%</p>
              <p class="text-xs font-semibold">Overall Progress</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Really need to break this down and componentize it once the base layout is set -->
      <!-- Upcoming Weddings Section -->
      <h2 class="text-xl font-bold">Upcoming Weddings</h2>
      <section class="grid grid-cols-3 gap-4 h-[250px]">
        ${obj
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
          .slice(0, 3)
          .map(wedding => {
            // wedding overview container
            // Returned html template
            return html`
              <div
                class=" rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg p-6 flex items-start"
              >
                <div class=" space-y-2 flex-1">
                  <h2>
                    <span class="font-bold">Wedding:</span> ${wedding.name}
                  </h2>
                  <p>
                    <span class="font-bold">Date:</span> ${(0,_Weddings__WEBPACK_IMPORTED_MODULE_0__.formatDate)(
                      wedding.date
                    )}
                  </p>
                  <p><span class="font-bold">Venue:</span> ${wedding.venue}</p>
                  <h2 class="font-bold pt-4">Upcoming Tasks:</h2>
                  <div class=" space-y-2">
                    ${wedding.todos
                      .sort((a, b) => a.deadline - b.deadline)
                      .slice(0, 2)
                      .map(todo => {
                        return html`
                          <div class="space-y-2">
                            <p>
                              <span class="font-bold">Task:</span> ${todo.task}
                            </p>
                            <p>
                              <span class="font-bold">Deadline:</span>
                              ${(0,_Weddings__WEBPACK_IMPORTED_MODULE_0__.formatDate)(todo.deadline)}
                            </p>
                          </div>
                        `;
                      })
                      .join(' ')}
                  </div>
                </div>
              </div>
            `;
          })
          .join(' ')}
      </section>
    </section>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewDashboard);


/***/ }),

/***/ "./src/js/components/PaymentTimeline.js":
/*!**********************************************!*\
  !*** ./src/js/components/PaymentTimeline.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/StateManagement */ "./src/js/utilities/StateManagement.js");
/* harmony import */ var _Weddings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weddings */ "./src/js/components/Weddings.js");
const html = String.raw;




function PaymentTimelineDashboard(obj) {
  return html`
    <div
      class="space-y-4 text-gray-900 bg-slate-200 p-6 rounded-lg mb-4 shadow-lg border border-gray-300"
    >
      <section class="space-y-2">
        <h1>${obj.name}</h1>
        <p>Wedding Date: ${(0,_Weddings__WEBPACK_IMPORTED_MODULE_1__.formatDate)(obj.date)}</p>
        <h3>Payments:</h3>
        <ul>
          ${obj.payments
            .map(payment => {
              return html`
                <div>
                  <li>${(0,_Weddings__WEBPACK_IMPORTED_MODULE_1__.formatDate)(payment.date)}</li>
                  <li>$${payment.amount}</li>
                </div>
              `;
            })
            .join(' ')}
        </ul>
      </section>
    </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentTimelineDashboard);


/***/ }),

/***/ "./src/js/components/Tasks.js":
/*!************************************!*\
  !*** ./src/js/components/Tasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const html = String.raw;

// the Tasks Dashboard Return HTML
function TasksDashboard() {
  return html`
    <div>
      <h1>I am the tasks dashboard</h1>
    </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TasksDashboard);


/***/ }),

/***/ "./src/js/components/Weddings.js":
/*!***************************************!*\
  !*** ./src/js/components/Weddings.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });

const html = String.raw;

// helper function to format the date
function formatDate(date) {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

// this function returns the template html for the Overview page
function WeddingsDashboard(obj) {
  // html template
  return html`
    <div
      class="space-y-4 text-gray-900 bg-slate-200 p-6 rounded-lg mb-4 shadow-lg border border-gray-300"
    >
      <section class="space-y-2">
        <h1>Planner: ${obj.agent}</h1>
        <p>Wedding of: ${obj.name}</p>
        <p>Email: ${obj.email}</p>
        <p>Date: ${formatDate(obj.date)}</p>
        <p>Decoration: ${obj.decoration}</p>
        <p>photographer: ${obj.photographer}</p>
        <p>Videographer: ${obj.videographer}</p>
        <p>Vendor Progress: ${obj.vendorProgress}</p>
      </section>
    </div>
  `;
}

// export Overview for use in other elements
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeddingsDashboard);


/***/ }),

/***/ "./src/js/utilities/StateManagement.js":
/*!*********************************************!*\
  !*** ./src/js/utilities/StateManagement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


// state management class and constructor
class StateManagement {
  // constructor with two properties
  constructor() {
    // sets this. state to an empty string
    this.state = '';
    // cache property to prevent unnecessary fetches
    this.cache = '';
  }

  // fetchData function, takes the url as its arg
  async fetchData(apiUrl) {
    // check cache, if it exists...
    if (this.cache) {
      // set this.state to spread state and spread cache
      this.state = this.cache;
    }

    // otherwise response is await fetch
    const response = await fetch(apiUrl);
    // set data to the result of response to json format
    const data = await response.json();
    // spread this.state and data to this.state
    this.state = await data;
  }
}

// create a new instance called all weddings
const allWeddings = new StateManagement();

// export allWeddings for use elsewhere
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allWeddings);


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/StateManagement */ "./src/js/utilities/StateManagement.js");
/* harmony import */ var _components_Overview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Overview */ "./src/js/components/Overview.js");
/* harmony import */ var _components_Weddings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Weddings */ "./src/js/components/Weddings.js");
/* harmony import */ var _components_PaymentTimeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PaymentTimeline */ "./src/js/components/PaymentTimeline.js");
/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Tasks */ "./src/js/components/Tasks.js");
/* harmony import */ var _components_AddWedding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AddWedding */ "./src/js/components/AddWedding.js");
/* harmony import */ var _components_EditWedding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/EditWedding */ "./src/js/components/EditWedding.js");

// enables html syntax highlighting in template literals
const html = String.raw;

// State Management for the weddings api fetch


// importing dashboard components







// selectors for each of the side nav components
const overviewNav = document.querySelector('#overview');
const weddingsNav = document.querySelector('#weddings');
const paymentTimelineNav = document.querySelector('#paymentTimeline');
const tasksNav = document.querySelector('#tasks');
const addWeddingNav = document.querySelector('#addWedding');
const editWeddingNav = document.querySelector('#editWedding');

// selector for the app container
const appContainer = document.querySelector('#appContainer');

// event listener for the overview section
overviewNav.addEventListener('click', async e => {
  await _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData('../../data/mockData.js');
  // render the overview dashboard
  appContainer.innerHTML = (0,_components_Overview__WEBPACK_IMPORTED_MODULE_1__["default"])(_utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].state);
});

// event listener for the allWeddings section
weddingsNav.addEventListener('click', async e => {
  // trigger the fetch method in the all weddings object
  await _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData('../../data/mockData.js');
  // iterate through the state property in all weddings
  appContainer.innerHTML = _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].state.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    // map weddings to the overview component
    .map(wedding => (0,_components_Weddings__WEBPACK_IMPORTED_MODULE_2__["default"])(wedding))
    // fix the commas
    .join('');
});

// event listener for the paymentTimelineNav
paymentTimelineNav.addEventListener('click', async e => {
  // trigger the fetch method in the allWeddings object
  await _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData('../../data/mockData.js');
  // clear innerHTML for the app container
  appContainer.innerHTML = '';
  // set appContainer to the value of mapping weddings through
  appContainer.innerHTML = _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].state.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    // map the weddings to the notifications component
    .map(wedding => (0,_components_PaymentTimeline__WEBPACK_IMPORTED_MODULE_3__["default"])(wedding))
    // fix the joining with commas
    .join(' ');
});

// event listener for handling the triggering of tasksNav
tasksNav.addEventListener('click', async e => {
  // render in the Tasks Dashboard
  appContainer.innerHTML = (0,_components_Tasks__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

// event listener for triggering the addWeddings page
addWeddingNav.addEventListener('click', async e => {
  // render in the Add Weddings Dashboard
  appContainer.innerHTML = (0,_components_AddWedding__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

// event listener for editing weddings
editWeddingNav.addEventListener('click', async e => {
  // render in the Edit Weddings Dashboard
  appContainer.innerHTML = (0,_components_EditWedding__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map