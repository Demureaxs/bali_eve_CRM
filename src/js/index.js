'use strict';
// enables html syntax highlighting in template literals
const html = String.raw;

// base imports for required modules
import allWeddings from './utilities/StateManagement';
import Overview from './components/Overview';
import PaymentTimeline from './components/PaymentTimeline';

// selectors for each of the side nav components
const overviewNav = document.querySelector('#overview');
const paymentTimelineNav = document.querySelector('#paymentTimeline');
const tasksNav = document.querySelector('#tasks');
const addWeddingNav = document.querySelector('#addWedding');
const editWeddingNav = document.querySelector('#editWedding');

// selector for the app container
const appContainer = document.querySelector('#appContainer');

// event listener for the overview section
overviewNav.addEventListener('click', async e => {
  // trigger the fetch method in the all weddings object
  await allWeddings.fetchData('../data/mockData.json');

  // iterate through the state property in all weddings
  appContainer.innerHTML = allWeddings.state
    // sort dates by date
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    // map weddings to the overview component
    .map(wedding => Overview(wedding))
    // fix the commas
    .join('');
});

// event listener for the paymentTimelineNav
paymentTimelineNav.addEventListener('click', async e => {
  // trigger the fetch method in the allWeddings object
  await allWeddings.fetchData('../data/mockData.json');
  // clear innerHTML for the app container
  appContainer.innerHTML = '';
  // set appContainer to the value of mapping weddings through
  appContainer.innerHTML = allWeddings.state
    // sort the weddings by date
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    // map the weddings to the notifications component
    .map(wedding => PaymentTimeline(wedding))
    // fix the joining with commas
    .join(' ');
});

tasksNav.addEventListener('click', async e => {
  console.log(e.target.id);
});
