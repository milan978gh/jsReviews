// local data
const reviews = [
  {
    id: 1,
    name: 'milan antonic',
    job: 'web developer',
    img: '../img/img1.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, alias velit. Quae est voluptatibus iste sed nulla similique, consequatur quo.'
  },
  {
    id: 2,
    name: 'susan smith',
    job: 'UX developer',
    img: '../img/img2.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, alias velit. Quae est voluptatibus iste sed nulla similique, consequatur quo.'
  },
  {
    id: 3,
    name: 'anna jones',
    job: 'UI developer',
    img: '../img/img3.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, alias velit. Quae est voluptatibus iste sed nulla similique, consequatur quo.'
  },
  {
    id: 4,
    name: 'mary white',
    job: 'server-side developer',
    img: '../img/img4.jpg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, alias velit. Quae est voluptatibus iste sed nulla similique, consequatur quo.'
  }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
// set starting item
let currentItem = 0;


window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});
nextBtn.addEventListener('click', function () {
  showNextPerson();
});
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener('click', function () {
  showRandomPerson();
});



function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
function showNextPerson() {
  if (currentItem < reviews.length - 1) {
    currentItem++;
  } else {
    currentItem = 0;
  }
  /* currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  } */
  showPerson(currentItem);
}

function showRandomPerson() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
}
