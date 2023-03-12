'use strict';
const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------

import { formatDate } from '../Weddings';

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
                class="rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg p-6 flex items-start"
              >
                <div class="space-y-2 flex-1">
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
    </div>
  `;
}

export default UpcomingWeddings;
