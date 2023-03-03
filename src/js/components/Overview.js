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
    <div>
      <h1>Agent: ${obj.agent}</h1>
      <p>Wedding of: ${obj.name}</p>
      <p>Email: ${obj.email}</p>
      <p>Date: ${formattedDate}</p>
      <p>Decoration: ${obj.decoration}</p>
      <p>photographer: ${obj.photographer}</p>
      <p>Videographer: ${obj.videographer}</p>
      <p>Vendor Progress: ${obj.vendorProgress}</p>
    </div>
  `;
}

// export Overview for use in other elements
export default Overview;
