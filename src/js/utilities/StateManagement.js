'use strict';

class StateManagement {
  constructor() {
    this.state = {};
    this.cache = {};
  }

  async fetchData(apiUrl) {
    if (this.cache[apiUrl]) {
      this.state = { ...this.state, ...this.cache[apiUrl] };
    }
    const response = await fetch(apiUrl);
    const data = await response.json();
    this.state = { ...this.state, ...data };
  }
}

const allWeddings = new StateManagement();

export default allWeddings;
