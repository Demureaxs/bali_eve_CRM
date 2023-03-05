'use strict';
const html = String.raw;

// helper function to format the date
export function formatDate(date) {
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
        <h1>Agent: ${obj.agent}</h1>
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
export default WeddingsDashboard;
