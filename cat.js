window.addEventListener('load', () => {
  const name = localStorage.getItem('NAME');
  const bio = localStorage.getItem('BIO');

  document.querySelector('.displayName').innerHTML = name;
  document.querySelector('.dashboardWelcome').innerHTML = bio;

  const plus = document.querySelector('.fa-plug');
  const categoryForm = document.getElementById('select');

  plus.addEventListener('click', () => {
    categoryForm.classList.toggle('overlay');
  });
  return;
});

const arr = [];

const createCategory = () => {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#desc').value;
  const category = document.querySelector('#cat').value;

  localStorage.setItem('TITLE', title);
  localStorage.setItem('DESCRIPTION', description);
  localStorage.setItem('CATEGORY', category);

  const categoryTitle = localStorage.getItem('TITLE');
  const categoryDescription = localStorage.getItem('DESCRIPTION');
  const categoryName = localStorage.getItem('CATEGORY');

  const todoContainer = document.querySelector('.todo_card');
  const card = document.createElement('div');
  const categoryHeading = document.createElement('h1');
  const cardDescription = document.createElement('p');
  const catProfile = document.createElement('span');
  const delCard = document.createElement('a');
  const all = document.querySelector('.all');
  const allCards = document.querySelectorAll('.card');

  const gridItem1 = document.querySelector('.grid-item-1');

  const counts = {};
  const values = [];

  delCard.innerHTML = 'yayy';

  //appending
  card.append(categoryHeading);
  card.append(cardDescription);
  card.append(delCard);
  todoContainer.append(card);

  categoryHeading.innerHTML = categoryTitle;
  cardDescription.innerHTML = categoryDescription;

  //adding css
  card.classList.add('card');
  card.classList.add(categoryName);

  if (!arr.includes(categoryName)) {
    arr.push(categoryName);

    for (var i = 0; i < arr.length; i++) {
      counts[arr[i]] = 1 + (counts[arr[i]] || 0);
    }
    values.push(...Object.values(counts));

    console.log(values);
    gridItem1.append(catProfile);
    catProfile.classList.add('cat_img');
    catProfile.innerHTML = categoryName;
  } else {
    for (i = 0; i < values.length; i++) {
      values[i] = 1;
    }
    alert('already exists');
    console.log(values);
  }

  const allCats = document.querySelectorAll('.cat_img');

  allCats.forEach((x) => {
    x.addEventListener('click', (e) => {
      if (e.target.innerHTML === card.classList[1]) {
        catProfile.classList.toggle('selected');
        card.classList.toggle('selected-card');
      } else {
        console.log('hii');
      }
    });
  });

  delCard.addEventListener('click', (e) => {
    card.classList.add('hide-card');
    catProfile.remove();
    arr.pop(categoryName);
  });
};
