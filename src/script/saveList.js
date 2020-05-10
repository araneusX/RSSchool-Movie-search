import showInfo from './info';

const menu = document.getElementById('js-featured');
let items = {};

const createItem = (id, title) => {
  const item = document.createElement('li');
  item.innerHTML = `
    <div class="menu_item">
      <span data-open="${id}" class="menu_title">${title}</span>
      <span data-remove="${id}" class="menu_remove"></span>
    </div>
  `;
  menu.append(item);
};

const addItem = (id, title) => {
  if (!(id in items)) {
    createItem(id, title);
    items[id] = title;
    localStorage.movieSearchList = JSON.stringify(items);
  }
};

const removeItem = (id, element) => {
  delete items[id];
  element.remove();
  localStorage.movieSearchList = JSON.stringify(items);
};


if (localStorage.movieSearchList) {
  items = JSON.parse(localStorage.movieSearchList);
  Object.keys(items).forEach((key) => {
    createItem(key, items[key]);
  });
}

menu.addEventListener('click', (event) => {
  if (event.target.dataset.open) {
    showInfo(event.target.dataset.open);
  } else if (event.target.dataset.remove) {
    removeItem(event.target.dataset.remove, event.target.parentNode.parentNode);
  }
});

export default {
  items,
  addItem,
  removeItem,
};
