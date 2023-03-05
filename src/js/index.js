'use strict';
// enables html syntax highlighting in template literals
const html = String.raw;

// State Management for the weddings api fetch
import allWeddings from './utilities/StateManagement';

// importing dashboard components
import OverviewDashboard from './components/Overview';
import WeddingsDashboard from './components/Weddings';
import PaymentTimelineDashboard from './components/PaymentTimeline';
import TasksDashboard from './components/Tasks';
import AddWeddingDashboard from './components/AddWedding';
import EditWeddingDashboard from './components/EditWedding';

// selectors for each of the side nav components
const overviewNav = document.querySelector('#overview');
const weddingsNav = document.querySelector('#weddings');
const paymentTimelineNav = document.querySelector('#paymentTimeline');
const tasksNav = document.querySelector('#tasks');
const addWeddingNav = document.querySelector('#addWedding');
const editWeddingNav = document.querySelector('#editWedding');

// selector for the app container
const appContainer = document.querySelector('#appContainer');

// event listener for the overview section
overviewNav.addEventListener('click', async e => {
  await allWeddings.fetchData('/data/mockData.json');
  // render the overview dashboard
  appContainer.innerHTML = OverviewDashboard(allWeddings.state);
});

// event listener for the allWeddings section
weddingsNav.addEventListener('click', async e => {
  // trigger the fetch method in the all weddings object
  await allWeddings.fetchData('./../data/mockData.json');
  // iterate through the state property in all weddings
  appContainer.innerHTML = allWeddings.state
    // sort dates by date
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    // map weddings to the overview component
    .map(wedding => WeddingsDashboard(wedding))
    // fix the commas
    .join('');
});

// event listener for the paymentTimelineNav
paymentTimelineNav.addEventListener('click', async e => {
  // trigger the fetch method in the allWeddings object
  await allWeddings.fetchData('./../data/mockData.json');
  // clear innerHTML for the app container
  appContainer.innerHTML = '';
  // set appContainer to the value of mapping weddings through
  appContainer.innerHTML = allWeddings.state
    // sort the weddings by date
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    // map the weddings to the notifications component
    .map(wedding => PaymentTimelineDashboard(wedding))
    // fix the joining with commas
    .join(' ');
});

// event listener for handling the triggering of tasksNav
tasksNav.addEventListener('click', async e => {
  // render in the Tasks Dashboard
  appContainer.innerHTML = TasksDashboard();
});

// event listener for triggering the addWeddings page
addWeddingNav.addEventListener('click', async e => {
  // render in the Add Weddings Dashboard
  appContainer.innerHTML = AddWeddingDashboard();
});

// event listener for editing weddings
editWeddingNav.addEventListener('click', async e => {
  // render in the Edit Weddings Dashboard
  appContainer.innerHTML = EditWeddingDashboard();
});
