'use strict';
// enables html syntax highlighting in template literals
const html = String.raw;

// base imports for required modules
import allWeddings from './utilities/StateManagement';
import Overview from './components/Overview';

// selectors for each of the side nav components
const overviewNav = document.querySelector('#overview');
const notificationsNav = document.querySelector('#notifications');
const addWeddingNav = document.querySelector('#addWedding');
const editWeddingNav = document.querySelector('#editWedding');

// selector for the app container
const appContainer = document.querySelector('#appContainer');

// event listener for the overview section
overviewNav.addEventListener('click', async e => {
  // trigger the fetch method in the all weddings object
  const response = await allWeddings.fetchData('../data/mockData.json');
  // set the innerHTML to the result of calling the Overview object with the state
  // from all weddings[0]
  appContainer.innerHTML = Overview(allWeddings.state[0]);
});

// event listener for the notificationsNav
notificationsNav.addEventListener('click', e => {
  // clear innerHTML for the app container
  appContainer.innerHTML = '';
});
