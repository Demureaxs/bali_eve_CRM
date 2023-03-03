'use strict';
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
function Overview(obj) {
  console.log(obj);
  // assign the value returned from formatDate with the obj.date as arg to formatted date
  const formattedDate = formatDate(obj.date);
  // html template
  return html`
    <div class="space-y-4 bg-gray-400 w-1/2">
      <section>
        <h1>Agent: ${obj.agent}</h1>
        <p>Wedding of: ${obj.name}</p>
        <p>Email: ${obj.email}</p>
        <p>Date: ${formattedDate}</p>
        <p>Decoration: ${obj.decoration}</p>
        <p>photographer: ${obj.photographer}</p>
        <p>Videographer: ${obj.videographer}</p>
        <p>Vendor Progress: ${obj.vendorProgress}</p>
      </section>
      <section>
        <h2>Payment History:</h2>
        <ul class="">
          ${obj.payments
            .map(payment => {
              return html`
                <div>
                  <li>${formatDate(payment.date)}</li>
                  <li>$${payment.amount}</li>
                </div>
              `;
            })
            .join(' ')}
        </ul>
      </section>
      <section>
        <h2>Tasks:</h2>
        <ul>
          ${obj.todos
            .map(todo => {
              return html`
                <div>
                  <li>Task: ${todo.task}</li>
                  <li>Date Added: ${formatDate(todo.dateAdded)}</li>
                  <li>Deadline: ${formatDate(todo.deadline)}</li>
                </div>
              `;
            })
            .join(' ')}
        </ul>
      </section>
    </div>
  `;
}

// export Overview for use in other elements
export default Overview;
