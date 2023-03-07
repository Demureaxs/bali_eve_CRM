const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------

import { formatDate } from './Weddings';

//---------------------------------- Selectors -----------------------------------------

//---------------------------------- Helper Functions -----------------------------------------

function itemProgress(classname) {
  let checkboxes = document.querySelectorAll(
    `input[type="checkbox"]${classname}`
  );
  let count = 0;

  // loop through and check the count of completed tasks each time
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      count++;
    }
  }

  document
    .querySelectorAll(`input[type="checkbox"]${classname}`)
    .forEach(checkbox =>
      checkbox.addEventListener('click', e => {
        // if the checkbox is checked increase the count
        if (e.target.checked) {
          count++;
        } else {
          count--;
        }

        // get the total number of checkbox items
        let progress = document.querySelectorAll(
          `input[type="checkbox"]${classname}`
        ).length;

        // calculate the percentage
        let percentage = count / progress;

        // set the inner text of the progress to the percentage completed
        document.querySelector(
          `#${classname.slice(1)}PercentageCompleted`
        ).innerText = `${(percentage * 100).toFixed(0)}%`;

        // set width of progress bar equal to the percentage
        document.querySelector(`#${classname.slice(1)}Bar`).style.width = `${(
          percentage * 100
        ).toFixed(0)}%`;

        // set bg color to green if complete
        if (percentage > 99) {
          document
            .querySelector(`#${classname.slice(1)}Bar`)
            .classList.replace('bg-blue-500', 'bg-green-500');
        }
      })
    );
}

//---------------------------------- Rendered HTML Output -----------------------------------------

function WeddingModal(obj) {
  // call venue progress to attach event listeners after the html has loaded
  setTimeout(() => {
    obj.checklist.map(item =>
      itemProgress(`.${item.type.toLowerCase()}Progress`)
    );
  }, 0);

  console.log(obj);

  // The returned html
  return html`
    <div
      class="modal-content z-10 h-[90%] bg-slate-100 w-[60%] rounded-lg overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg flex "
    >
      <div
        class="h-full w-full p-6 overflow-y-scroll space-y-10 flex-1 scrollbar-none"
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
            <h2 class="text-sm">${formatDate(obj.date)}</h2>
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
            <h3>Date: ${formatDate(obj.date)}</h3>
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

        <!-- Renders In the Checklist -->
        ${obj.checklist
          .map(section => {
            return html`
              <div class=" space-y-2">
                <div id=${section.type} class="space-y-2">
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
                      <h1>
                        <span class="font-semibold">${section.type}:</span>
                        ${section.vendor}
                      </h1>
                      <div class="flex space-x-2">
                        <button
                          class="bg-slate-300 px-2 py-1 rounded-sm text-sm"
                        >
                          Hide Checked Items
                        </button>
                        <button
                          class="bg-slate-300 px-2 py-1 rounded-sm text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex space-x-3 items-center">
                    <p
                      id="${section.type.toLowerCase()}ProgressPercentageCompleted"
                      class="text-[10px]"
                    >
                      ${(section.tasks.filter(task => task.completed === 'true')
                        .length /
                        section.tasks.length) *
                      100}%
                    </p>
                    <div
                      class="w-full h-2 bg-gray-300  rounded-full overflow-hidden"
                    >
                      <div
                        id="${section.type.toLowerCase()}ProgressBar"
                        class="h-full w-[${(section.tasks.filter(
                          task => task.completed === 'true'
                        ).length /
                          section.tasks.length) *
                        100}%] z-10 bg-green-500  transition-all duration-700"
                      ></div>
                    </div>
                  </div>

                  <!-- Render Each Section of the tasks and lists -->
                  ${section.tasks
                    .map(task => {
                      return html`
                        <div class="flex space-x-4">
                          <input
                            class="${section.type.toLowerCase()}Progress mx-1"
                            type="checkbox"
                            name=${task.task.replace(' ', '').toLowerCase()}
                            id=${task.task.replace(' ', '').toLowerCase()}
                            ${task.completed && 'checked'}
                          />
                          <label for=${task.task.replace(' ', '').toLowerCase()}
                            >${task.task}</label
                          >
                        </div>
                      `;
                    })
                    .join(' ')}
                </div>
              </div>
            `;
          })
          .join(' ')}

          </div>
          <div class="w-[25%] p-6">This is the side Menu</div>
        </div>
      </div>
    </div>
  `;
}

//---------------------------------- QuerySelectors -----------------------------------------

//---------------------------------- Exports -----------------------------------------

export default WeddingModal;
