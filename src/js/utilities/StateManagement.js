'use strict';

// state management class and constructor
class StateManagement {
  // constructor with two properties
  constructor() {
    // state property for storing data from fetches
    this.state = {};
    // cache property to prevent unnecessary fetches
    this.cache = {};
  }

  // fetchData function, takes the url as its arg
  async fetchData(apiUrl) {
    // check cache, if it exists...
    if (this.cache[apiUrl]) {
      // set this.state to spread state and spread cache
      this.state = { ...this.state, ...this.cache[apiUrl] };
    }

    // otherwise response is await fetch
    const response = await fetch(apiUrl);
    // set data to the result of response to json format
    const data = await response.json();
    // spread this.state and data to this.state
    this.state = { ...this.state, ...data };
  }
}

// create a new instance called all weddings
const allWeddings = new StateManagement();

// export allWeddings for use elsewhere
export default allWeddings;
