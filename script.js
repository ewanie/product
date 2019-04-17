const spn = document.querySelector('span');
const menu = document.querySelector('menu')

spn.addEventListener('click', () => {
    menu.classList.toggle('active');

})

const basic = document.querySelector('.basic');
const premium = document.querySelector('.premium');
const gold = document.querySelector('.gold');
console.log(basic, premium, gold);

let active = true;


basic.addEventListener('click', () => {
    active = true;
    if (active === true) {
        basic.classList.add('box-active');
        premium.classList.add('box-inactive');
        gold.classList.add('box-inactive');
    }
})