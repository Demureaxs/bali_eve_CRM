'use strict';

// state management class and constructor
class StateManagement {
  // constructor with two properties
  constructor() {
    // sets this. state to an empty string
    this.state = '';
    // cache property to prevent unnecessary fetches
    this.cache = '';
  }

  // fetchData function, takes the url as its arg
  async fetchData(apiUrl) {
    // check cache, if it exists...
    if (this.cache) {
      // set this.state to spread state and spread cache
      this.state = this.cache;
    }

    // otherwise response is await fetch
    const response = await fetch(apiUrl);
    // set data to the result of response to json format
    const data = await response.json();
    // spread this.state and data to this.state
    this.state = await data;
  }
}

// create a new instance called all weddings
const allWeddings = new StateManagement();

// export allWeddings for use elsewhere
export default allWeddings;
