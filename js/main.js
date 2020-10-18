// local reviews data
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

// set start-person
let currentItem = 0;
// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};
// load initial person
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});
// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});
// show previous person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
// show random person
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});