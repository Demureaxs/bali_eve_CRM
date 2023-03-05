(()=>{"use strict";const e=new class{constructor(){this.state="",this.cache=""}async fetchData(e){this.cache&&(this.state=this.cache);const t=await fetch(e),s=await t.json();this.state=await s}},t=String.raw;function s(e){return new Intl.DateTimeFormat("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(new Date(e))}const a=String.raw,r=String.raw,o=String.raw,d=String.raw,n=String.raw,l=(String.raw,document.querySelector("#overview")),i=document.querySelector("#weddings"),c=document.querySelector("#paymentTimeline"),p=document.querySelector("#tasks"),g=document.querySelector("#addWedding"),m=document.querySelector("#editWedding"),v=document.querySelector("#appContainer");l.addEventListener("click",(async t=>{var r;await e.fetchData("../../data/mockData.json"),v.innerHTML=(r=e.state,console.log(r),a`
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
        ${r.sort(((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())).slice(0,3).map((e=>a`
              <div
                class=" rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg p-6 flex items-start"
              >
                <div class=" space-y-2 flex-1">
                  <h2>
                    <span class="font-bold">Wedding:</span> ${e.name}
                  </h2>
                  <p>
                    <span class="font-bold">Date:</span> ${s(e.date)}
                  </p>
                  <p><span class="font-bold">Venue:</span> ${e.venue}</p>
                  <h2 class="font-bold pt-4">Upcoming Tasks:</h2>
                  <div class=" space-y-2">
                    ${e.todos.sort(((e,t)=>e.deadline-t.deadline)).slice(0,2).map((e=>a`
                          <div class="space-y-2">
                            <p>
                              <span class="font-bold">Task:</span> ${e.task}
                            </p>
                            <p>
                              <span class="font-bold">Deadline:</span>
                              ${s(e.deadline)}
                            </p>
                          </div>
                        `)).join(" ")}
                  </div>
                </div>
              </div>
            `)).join(" ")}
      </section>
    </section>
  `)})),i.addEventListener("click",(async a=>{await e.fetchData("../../data/mockData.json"),v.innerHTML=e.state.sort(((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())).map((e=>{return t`
    <div
      class="space-y-4 text-gray-900 bg-slate-200 p-6 rounded-lg mb-4 shadow-lg border border-gray-300"
    >
      <section class="space-y-2">
        <h1>Planner: ${(a=e).agent}</h1>
        <p>Wedding of: ${a.name}</p>
        <p>Email: ${a.email}</p>
        <p>Date: ${s(a.date)}</p>
        <p>Decoration: ${a.decoration}</p>
        <p>photographer: ${a.photographer}</p>
        <p>Videographer: ${a.videographer}</p>
        <p>Vendor Progress: ${a.vendorProgress}</p>
      </section>
    </div>
  `;var a})).join("")})),c.addEventListener("click",(async t=>{await e.fetchData("../../data/mockData.json"),v.innerHTML="",v.innerHTML=e.state.sort(((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime())).map((e=>{return r`
    <div
      class="space-y-4 text-gray-900 bg-slate-200 p-6 rounded-lg mb-4 shadow-lg border border-gray-300"
    >
      <section class="space-y-2">
        <h1>${(t=e).name}</h1>
        <p>Wedding Date: ${s(t.date)}</p>
        <h3>Payments:</h3>
        <ul>
          ${t.payments.map((e=>r`
                <div>
                  <li>${s(e.date)}</li>
                  <li>$${e.amount}</li>
                </div>
              `)).join(" ")}
        </ul>
      </section>
    </div>
  `;var t})).join(" ")})),p.addEventListener("click",(async e=>{v.innerHTML=o`
    <div>
      <h1>I am the tasks dashboard</h1>
    </div>
  `})),g.addEventListener("click",(async e=>{v.innerHTML=d`
    <div>
      <h1>I am the add weddings dashboard</h1>
    </div>
  `})),m.addEventListener("click",(async e=>{v.innerHTML=n`
    <div>
      <h1>I am the edit weddings dashboard</h1>
    </div>
  `}))})();
//# sourceMappingURL=bundle.js.map