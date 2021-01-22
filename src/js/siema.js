import Siema from 'siema';

const siema = new Siema({ loop: true });
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => siema.prev(2));
next.addEventListener('click', () => siema.goTo(3));
