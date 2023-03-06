'use strict';
const html = String.raw;

//---------------------------------- Module Imports -----------------------------------------

import Header from './OverviewComponents/Header';
import WeddingModal from './WeddingModal';
import allWeddings from '../utilities/StateManagement';

//---------------------------------- Element Selectors -----------------------------------------

const modalContainer = document.querySelector('#modalContainer');

//---------------------------------- Helper Functions -----------------------------------------

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

// function to close the modal and remove event listener
function closeModal(e) {
  // make sure the click is not happening inside the modal
  if (e.target.closest('.modal-content')) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }

  modalContainer.innerHTML = '';
  modalContainer.classList.replace('flex', 'hidden');

  modalContainer.removeEventListener('click', closeModal);
}

//---------------------------------- Event Listeners -----------------------------------------

// helperfunction to add the wedding event listeners post render
export function addWeddingListeners() {
  document.querySelectorAll('.weddingContainer').forEach(wedding =>
    wedding.addEventListener('click', e => {
      const weddingContainer = e.target.closest('.weddingContainer');
      if (weddingContainer) {
        // log the id
        console.log(weddingContainer.id);

        // make the modal Visible
        modalContainer.classList.replace('hidden', 'flex');

        // hide modal and remove event listener
        modalContainer.addEventListener('click', closeModal);

        // render modal with details filtered by id
        modalContainer.innerHTML = WeddingModal(
          allWeddings.state.filter(
            wedding => wedding._id === weddingContainer.id
          )[0]
        );
      }
    })
  );
}

//---------------------------------- Rendered Html Output -----------------------------------------

// this function returns the template html for the Overview page
function WeddingsDashboard(obj, e) {
  // return mapping the object
  return html` <section class="space-y-4">
    <!-- Renders In the header -->
    ${Header(e.target.innerText)}

    <!-- Renders in the Body -->
    ${obj
      .map(wedding => {
        return html`
          <div
            id=${wedding._id}
            class="weddingContainer bg-slate-200 p-6 last:mb-0 mb-4 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 border border-gray-200  shadow-lg cursor-pointer"
          >
            <section class="space-y-2">
              <h1>Planner: ${wedding.agent}</h1>
              <p>Wedding of: ${wedding.name}</p>
              <p>Email: ${wedding.email}</p>
              <p>Date: ${formatDate(wedding.date)}</p>
              <p>Decoration: ${wedding.decoration}</p>
              <p>photographer: ${wedding.photographer}</p>
              <p>Videographer: ${wedding.videographer}</p>
              <p>Vendor Progress: ${wedding.vendorProgress}</p>
            </section>
          </div>
        `;
      })
      .join(' ')}
  </section>`;
}

// export Overview for use in other elements
export default WeddingsDashboard;
