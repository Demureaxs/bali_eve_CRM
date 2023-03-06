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

export default TaskOverview;
