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
const personImg = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
// starting item
let currentItem = 0;


window.addEventListener('DOMContentLoaded', () => {
  nextPerson();
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  nextPerson();
});
nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  nextPerson();
});
randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  nextPerson();
});


function nextPerson() {
  personImg.src = reviews[currentItem].img;
  author.textContent = reviews[currentItem].name;
  job.textContent = reviews[currentItem].job;
  info.textContent = reviews[currentItem].text;
}
