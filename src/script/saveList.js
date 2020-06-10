import showInfo from './info';

const menu = document.getElementById('js-list');
let items = {};

const createItem = (id, title) => {
  const item = document.createElement('li');
  item.id = `f-${id}`;
  item.innerHTML = `
    <div class="featured_item">
      <span data-open="${id}" class="featured_title">${title}</span>
      <span data-remove="${id}" class="featured_remove"></span>
    </div>
  `;
  menu.append(item);
};

const removeItem = (id, element) => {
  delete items[id];
  element.remove();
  localStorage.movieSearchList = JSON.stringify(items);
};

const addItem = (id, title) => {
  if (!(id in items)) {
    createItem(id, title);
    items[id] = title;
    localStorage.movieSearchList = JSON.stringify(items);
  } else {
    removeItem(id, document.getElementById(`f-${id}`));
  }
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
    document.getElementById(`lb${event.target.dataset.remove}`).classList.remove('added');
  }
});

export default {
  items,
  addItem,
  removeItem,
};
