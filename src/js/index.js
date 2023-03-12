'use strict';
// enables html syntax highlighting in template literals
const html = String.raw;

//---------------------------------- State Management -----------------------------------------

// State Management for the weddings api fetch
import allWeddings from './utilities/StateManagement';

//---------------------------------- Module Imports -----------------------------------------

// importing dashboard components
import OverviewDashboard from './components/Overview';
import WeddingsDashboard from './components/Weddings';
import PaymentTimelineDashboard from './components/PaymentTimeline';
import TasksDashboard from './components/Tasks';
import AddWeddingDashboard from './components/AddWedding';
import EditWeddingDashboard from './components/EditWedding';

//---------------------------------- Selectors -----------------------------------------

// selectors for each of the side nav components
const overviewNav = document.querySelector('#overview');
const weddingsNav = document.querySelector('#weddings');
const paymentTimelineNav = document.querySelector('#paymentTimeline');
const tasksNav = document.querySelector('#tasks');
const addWeddingNav = document.querySelector('#addWedding');
const editWeddingNav = document.querySelector('#editWedding');

// Selector for the App Container
const appContainer = document.querySelector('#appContainer');
// selector for the Modal Container
const modalContainer = document.querySelector('#modalContainer');

//---------------------------------- Helper Functions -----------------------------------------

// function to set the initial state of the app
async function initialState() {
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');
  await allWeddings.fetchData('../data/mockData.json');

  appContainer.innerHTML = OverviewDashboard(allWeddings.state);
}
// calls the Initial State function.
initialState();

//---------------------------------- Event Listeners -----------------------------------------

// event listener for the overview section
overviewNav.addEventListener('click', async e => {
  // github fetch
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');

  // development fetch
  await allWeddings.fetchData('../data/mockData.json');

  // render the overview dashboard
  appContainer.innerHTML = OverviewDashboard(allWeddings.state, e);
});

// event listener for the allWeddings section
weddingsNav.addEventListener('click', async e => {
  // trigger the fetch method in the all weddings object for github
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');

  // trigger the fetch method in the all weddings object for development
  await allWeddings.fetchData('../data/mockData.json');

  // pass the state to the weddingsDashboard and render it
  appContainer.innerHTML = WeddingsDashboard(allWeddings.state, e);
});

paymentTimelineNav.addEventListener('click', async e => {
  // trigger the fetch method in the allWeddings object github
  // await allWeddings.fetchData('/bali_eve_CRM/data/mockData.json');

  // trigger the fetch method in the allWeddings object development
  await allWeddings.fetchData('../data/mockData.json');

  // clear innerHTML for the app container
  appContainer.innerHTML = '';

  // Remder Payment Timeline and pass state
  appContainer.innerHTML = PaymentTimelineDashboard(allWeddings.state, e);
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
