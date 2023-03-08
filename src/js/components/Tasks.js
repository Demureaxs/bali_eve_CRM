const html = String.raw;

export let number = localStorage.getItem('number') || 0;
let rerender;

//---------------------------------- Rendered HTML Output -----------------------------------------

// the Tasks Dashboard Return HTML
function TasksDashboard(obj) {
  function handleClick() {
    const numberField = document.querySelector('#numberContainer');
    const childPs = numberField.querySelectorAll('.nums');

    number++;
    childPs.forEach(num => (num.innerText = number));
  }
  setTimeout(() => {
    document.querySelector('#btn').addEventListener('click', handleClick);
  }, 0);

  return html`
    <div>
      <div id="numberContainer">
        <p class="nums">${number}</p>
        <p class="nums">${number}</p>
        <p class="nums">${number}</p>
        <p class="nums">${number}</p>
        <button id="btn">Click me</button>

        <h1>I am the tasks dashboard</h1>
      </div>
      <p class=".nums">${number}</p>
    </div>
  `;
}

export default TasksDashboard;
