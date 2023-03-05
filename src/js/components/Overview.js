const html = String.raw;

import { formatDate } from './Weddings';

// the Overview Dashboard Return HTML
function OverviewDashboard(obj) {
  console.log(obj);
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
                    <span class="font-bold">Date:</span> ${formatDate(
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
                              ${formatDate(todo.deadline)}
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

export default OverviewDashboard;
