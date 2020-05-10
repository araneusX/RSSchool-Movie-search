const menu = document.getElementById('js-featured');
const items = {};

if (localStorage.movieSearchList) {
  items = JSON.parse(localStorage.movieSearchList);
}

const createItem = (id, title) => {
  const item = document.createElement('li');
  createItem.innerHTML = `
    span
  `;
}

const saveList = {

}

//item.dataset.open = id;