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

export default Header;
