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

//---------------------------------- Rendered HTML Output -----------------------------------------

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

//---------------------------------- Rendered HTML Output -----------------------------------------

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
/* harmony import */ var _OverviewComponents_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverviewComponents/Header */ "./src/js/components/OverviewComponents/Header.js");
/* harmony import */ var _OverviewComponents_TaskOverview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverviewComponents/TaskOverview */ "./src/js/components/OverviewComponents/TaskOverview.js");
/* harmony import */ var _OverviewComponents_UpcomingWeddings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverviewComponents/UpcomingWeddings */ "./src/js/components/OverviewComponents/UpcomingWeddings.js");
const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------

// Imports for Overview Components




//---------------------------------- Rendered HTML Output -----------------------------------------

// the Overview Dashboard Return HTML
function OverviewDashboard(obj, e) {
  return html`
    <section class="text-gray-700 space-y-4">
      <!-- Header Component -->
      ${(0,_OverviewComponents_Header__WEBPACK_IMPORTED_MODULE_0__["default"])('Overview')}

      <!-- Task Overview Component -->
      ${(0,_OverviewComponents_TaskOverview__WEBPACK_IMPORTED_MODULE_1__["default"])()}

      <!-- Upcoming Weddings Section -->
      ${(0,_OverviewComponents_UpcomingWeddings__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)}
    </section>
  `;
}

// default export of Overview Dashboard
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewDashboard);


/***/ }),

/***/ "./src/js/components/OverviewComponents/Header.js":
/*!********************************************************!*\
  !*** ./src/js/components/OverviewComponents/Header.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const html = String.raw;

//---------------------------------- Rendered HTML Output -----------------------------------------

function Header(viewName) {
  return html`
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
        <!-- Page Title -->
        <h2 class="text-xl font-bold">${viewName}</h2>
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
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/js/components/OverviewComponents/TaskOverview.js":
/*!**************************************************************!*\
  !*** ./src/js/components/OverviewComponents/TaskOverview.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const html = String.raw;

//---------------------------------- Rendered HTML Output -----------------------------------------

function TaskOverview() {
  return html`
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
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskOverview);


/***/ }),

/***/ "./src/js/components/OverviewComponents/UpcomingWeddings.js":
/*!******************************************************************!*\
  !*** ./src/js/components/OverviewComponents/UpcomingWeddings.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Weddings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Weddings */ "./src/js/components/Weddings.js");

const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------



//---------------------------------- Rendered HTML Output -----------------------------------------

function UpcomingWeddings(obj) {
  return html`
    <div>
      <h2 class="text-xl font-bold py-6">Upcoming Weddings</h2>
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
    </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpcomingWeddings);


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
/* harmony import */ var _OverviewComponents_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverviewComponents/Header */ "./src/js/components/OverviewComponents/Header.js");
/* harmony import */ var _Weddings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Weddings */ "./src/js/components/Weddings.js");
const html = String.raw;





//---------------------------------- Rendered HTML Output -----------------------------------------

function PaymentTimelineDashboard(obj, e) {
  return html`
    <div class="space-y-4">
      ${(0,_OverviewComponents_Header__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.innerText)}
      ${obj
        .sort((a, b) => new Date(a.Date) - new Date(b.date))
        .map(
          wedding =>
            html` <!-- Rendering In The Payment Components -->
              <div
                class="space-y-4 bg-slate-200 p-6 rounded-lg mb-4  bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg"
              >
                <section class="space-y-2">
                  <h1>Wedding of: ${wedding.name}</h1>
                  <p>Wedding Date: ${(0,_Weddings__WEBPACK_IMPORTED_MODULE_2__.formatDate)(wedding.date)}</p>
                  <h3>Payments:</h3>
                  <ul>
                    ${wedding.payments
                      .map(payment => {
                        return html`
                          <div>
                            <li>${(0,_Weddings__WEBPACK_IMPORTED_MODULE_2__.formatDate)(payment.date)}</li>
                            <li>$${payment.amount}</li>
                          </div>
                        `;
                      })
                      .join(' ')}
                  </ul>
                </section>
              </div>`
        )
        .join(' ')}
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

//---------------------------------- Rendered HTML Output -----------------------------------------

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

/***/ "./src/js/components/WeddingModal.js":
/*!*******************************************!*\
  !*** ./src/js/components/WeddingModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Weddings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weddings */ "./src/js/components/Weddings.js");
const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------



//---------------------------------- Rendered HTML Output -----------------------------------------

function WeddingModal(obj) {
  console.log(obj);
  return html`
    <div
      class="modal-content z-10 h-[90%] bg-slate-100 w-[50%] rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg flex "
    >
      <div
        class="h-full w-full p-6 overflow-y-scroll space-y-6 flex-1 scrollbar-none"
      >
        <!-- Modal Details (Wedding Name and Date) -->
        <div class="flex space-x-4 justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>

          <div>
            <h1 class="font-semibold text-lg">${obj.name}</h1>
            <h2 class="text-sm">${(0,_Weddings__WEBPACK_IMPORTED_MODULE_0__.formatDate)(obj.date)}</h2>
          </div>
        </div>

        <!-- Notifications section -->
        <div>
          <h2 class=" font-semibold text-sm">Notifications:</h2>
        </div>

        <!-- Description section -->
        <div class="flex space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div class="text-sm">
            <div class="flex space-x-4">
              <h2 class=" font-semibold text-base">Description</h2>
              <button class="bg-gray-200 px-2 rounded-lg">Edit</button>
            </div>
            <h3>Date: ${(0,_Weddings__WEBPACK_IMPORTED_MODULE_0__.formatDate)(obj.date)}</h3>
            <h3>Venue: ${obj.venue}</h3>
            <h3>Pax: ${obj.guests}</h3>
          </div>
        </div>

        <!-- Attachments section -->
        <div class=" flex space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>

          <h1 class="font-semibold">Attachments:</h1>
        </div>

        <!-- Venue Checklist Section -->
        <div class="space-y-2">
          <div class="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
            <div class="flex justify-between w-full">
              <h1><span class="font-semibold">Venue:</span> ${obj.venue}</h1>
              <div class="flex space-x-2">
                <button class="bg-slate-300 px-2 py-1 rounded-sm text-sm">
                  Hide Checked Items
                </button>
                <button class="bg-slate-300 px-2 py-1 rounded-sm text-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="flex space-x-3 items-center">
            <p class=" text-[10px]">100%</p>
            <div class="w-full h-2 bg-green-500 rounded-full"></div>
          </div>
          <div class="text-sm space-y-2">
            <div class="flex space-x-4">
              <input
                class="mx-1"
                type="checkbox"
                name="venueChecking"
                id="venueChecking"
              />
              <p>Venue Checking</p>
            </div>
            <div class="flex space-x-4">
              <input
                class="mx-1"
                type="checkbox"
                name="venueChecking"
                id="venueChecking"
              />
              <p>Downpayment</p>
            </div>
            <div class="flex space-x-4">
              <input
                class="mx-1"
                type="checkbox"
                name="venueChecking"
                id="venueChecking"
              />
              <p>Final Payment</p>
            </div>
          </div>
          <button class="text-sm px-2 py-1 ml-9 bg-slate-300 rounded-sm">
            Add an item
          </button>
        </div>

        <!-- Food And Beverage Checklist -->
      </div>
      <div class="w-[25%] p-6">This is the side Menu</div>
    </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeddingModal);


/***/ }),

/***/ "./src/js/components/Weddings.js":
/*!***************************************!*\
  !*** ./src/js/components/Weddings.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addWeddingListeners": () => (/* binding */ addWeddingListeners),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var _OverviewComponents_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverviewComponents/Header */ "./src/js/components/OverviewComponents/Header.js");
/* harmony import */ var _WeddingModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeddingModal */ "./src/js/components/WeddingModal.js");
/* harmony import */ var _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/StateManagement */ "./src/js/utilities/StateManagement.js");

const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------





//---------------------------------- Element Selectors -----------------------------------------

const modalContainer = document.querySelector('#modalContainer');

//---------------------------------- Helper Functions -----------------------------------------

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

// function to close the modal and remove event listener
function closeModal(e) {
  // make sure the click is not happening inside the modal
  if (e.target.closest('.modal-content')) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }

  modalContainer.innerHTML = '';
  modalContainer.classList.replace('flex', 'hidden');

  modalContainer.removeEventListener('click', closeModal);
}

//---------------------------------- Event Listeners -----------------------------------------

// helperfunction to add the wedding event listeners post render
function addWeddingListeners() {
  document.querySelectorAll('.weddingContainer').forEach(wedding =>
    wedding.addEventListener('click', e => {
      const weddingContainer = e.target.closest('.weddingContainer');
      if (weddingContainer) {
        // log the id
        console.log(weddingContainer.id);

        // make the modal Visible
        modalContainer.classList.replace('hidden', 'flex');

        // hide modal and remove event listener
        modalContainer.addEventListener('click', closeModal);

        // render modal with details filtered by id
        modalContainer.innerHTML = (0,_WeddingModal__WEBPACK_IMPORTED_MODULE_1__["default"])(
          _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_2__["default"].state.filter(
            wedding => wedding._id === weddingContainer.id
          )[0]
        );
      }
    })
  );
}

//---------------------------------- Rendered Html Output -----------------------------------------

// this function returns the template html for the Overview page
function WeddingsDashboard(obj, e) {
  // return mapping the object
  return html` <section class="space-y-4">
    <!-- Renders In the header -->
    ${(0,_OverviewComponents_Header__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.innerText)}

    <!-- Renders in the Body -->
    ${obj
      .map(wedding => {
        return html`
          <div
            id=${wedding._id}
            class="weddingContainer bg-slate-200 p-6 last:mb-0 mb-4 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg cursor-pointer"
          >
            <section class="space-y-2">
              <h1>Planner: ${wedding.agent}</h1>
              <p>Wedding of: ${wedding.name}</p>
              <p>Email: ${wedding.email}</p>
              <p>Date: ${formatDate(wedding.date)}</p>
              <p>Decoration: ${wedding.decoration}</p>
              <p>photographer: ${wedding.photographer}</p>
              <p>Videographer: ${wedding.videographer}</p>
              <p>Vendor Progress: ${wedding.vendorProgress}</p>
            </section>
          </div>
        `;
      })
      .join(' ')}
  </section>`;
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

//---------------------------------- State Management -----------------------------------------

// State Management for the weddings api fetch


//---------------------------------- Module Imports -----------------------------------------

// importing dashboard components







//---------------------------------- Selectors -----------------------------------------

// selectors for each of the side nav components
const overviewNav = document.querySelector('#overview');
const weddingsNav = document.querySelector('#weddings');
const paymentTimelineNav = document.querySelector('#paymentTimeline');
const tasksNav = document.querySelector('#tasks');
const addWeddingNav = document.querySelector('#addWedding');
const editWeddingNav = document.querySelector('#editWedding');

// Selector for the App Container
const appContainer = document.querySelector('#appContainer');
// selector for the Modal Container
const modalContainer = document.querySelector('#modalContainer');

//---------------------------------- Helper Functions -----------------------------------------

// function to set the initial state of the app
async function initialState() {
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');
  await _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData('../data/mockData.json');
  appContainer.innerHTML = (0,_components_Overview__WEBPACK_IMPORTED_MODULE_1__["default"])(_utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].state);
}
// calls the Initial State function.
initialState();

//---------------------------------- Event Listeners -----------------------------------------

// event listener for the overview section
overviewNav.addEventListener('click', async e => {
  // github fetch
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');

  // development fetch
  await _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData('../data/mockData.json');

  // render the overview dashboard
  appContainer.innerHTML = (0,_components_Overview__WEBPACK_IMPORTED_MODULE_1__["default"])(_utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].state, e);
});

// event listener for the allWeddings section
weddingsNav.addEventListener('click', async e => {
  // trigger the fetch method in the all weddings object for github
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');

  // trigger the fetch method in the all weddings object for development
  await _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData('../data/mockData.json');

  // pass the state to the weddingsDashboard and render it
  appContainer.innerHTML = (0,_components_Weddings__WEBPACK_IMPORTED_MODULE_2__["default"])(_utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].state, e);

  // adds the event listeners for each wedding
  (0,_components_Weddings__WEBPACK_IMPORTED_MODULE_2__.addWeddingListeners)();
});

paymentTimelineNav.addEventListener('click', async e => {
  // trigger the fetch method in the allWeddings object github
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');

  // trigger the fetch method in the allWeddings object development
  await _utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].fetchData('../data/mockData.json');

  // clear innerHTML for the app container
  appContainer.innerHTML = '';

  // Remder Payment Timeline and pass state
  appContainer.innerHTML = (0,_components_PaymentTimeline__WEBPACK_IMPORTED_MODULE_3__["default"])(_utilities_StateManagement__WEBPACK_IMPORTED_MODULE_0__["default"].state, e);
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