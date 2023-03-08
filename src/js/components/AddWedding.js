const html = String.raw;

import { number } from './Tasks';

//---------------------------------- Rendered HTML Output -----------------------------------------

// the Add Weddings Dashboard Return HTML
function AddWeddingDashboard(obj) {
  return html`
    <div>
      <p>${number}</p>
      <h1>I am the add weddings dashboard</h1>
    </div>
  `;
}

export default AddWeddingDashboard;
