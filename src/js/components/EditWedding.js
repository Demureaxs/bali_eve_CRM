const html = String.raw;

//---------------------------------- Helper Function -----------------------------------------

function createAutoUpdateProxy(initialValue, elementSelector) {
  const element = document.querySelector(elementSelector);
  const handler = {
    set(target, key, value) {
      target[key] = value;
      element.innerText = value;
      return true;
    },
  };
  const proxy = new Proxy({ value: initialValue }, handler);
  return proxy;
}

const person = {
  name: 'marcus',
};
//---------------------------------- Rendered HTML Output -----------------------------------------

function EditWeddingDashboard(obj) {
  let inner = person.name;
  let button;

  setTimeout(() => {
    document.querySelector('#input').addEventListener('input', handleChange);
    inner = createAutoUpdateProxy(person, '#header');
    button = document.querySelector('#button');
    button.addEventListener('click', handleClick);
    let buttonTwo = document.querySelector('#buttonTwo');
    buttonTwo.addEventListener('click', removeHeaderInnerText);
  }, 0);

  function handleClick() {
    inner.name = document.querySelector('#input').value;
    console.log(inner.name);
  }

  function handleChange() {
    inner.name = document.querySelector('#input').value;
    console.log(inner.name);
  }

  function removeHeaderInnerText() {
    document.querySelector('#header').innerText = 'I was successfully updated';
  }

  return html`
    <div>
      <h1 id="header">${inner}</h1>
      <!-- using optional chaining operator -->
      <input id="input" type="text" value="${inner}" />
      <button id="button">Click me</button>

      <button id="buttonTwo">I will insert something</button>
    </div>
  `;
}

export default EditWeddingDashboard;
