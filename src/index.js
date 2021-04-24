import './style.css';

// Zprovoznění navigace
/*
const nav = () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
};

const btnElm = document.querySelector('#nav-btn');
btnElm.addEventListener('click', nav);

document.querySelectorAll('nav a').forEach((element) => {
  element.addEventListener('click', nav);
});
*/

// Standa

const nav = document.querySelector('nav');

document.querySelector('#nav-btn').addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

const navItems = nav.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  });
});

// Objednávání

/*
let ordered = false;

const btn = document.querySelector('.order-btn');
btn.addEventListener('click', (e) => {
  const order = document.querySelector('.drink__cup');

  if (ordered === false) {
    order.classList.add('drink__cup--selected');
    btn.textContent = 'Zrušit';
    ordered = true;
  } else {
    order.classList.remove;
    btn = '';
  }
});
*/

// Standa

const btn = document.querySelector('.order-btn');
let ordered = false;

btn.addEventListener('click', (e) => {
  const order = document.querySelector('.drink__cup');
  if (ordered === false) {
    order.classList.add('drink__cup--selected');
    btn.textContent = 'Zrušit';
    ordered = true;
  } else {
    order.classList.remove('drink__cup--selected');
    btn.textContent = 'Objednat';
    ordered = false;
  }
});
