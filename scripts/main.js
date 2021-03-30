let menuBurger = document.querySelector('.burger-menu-ico');
let form = document.querySelector('.first-screen__form-wrapper');
let formToggle = document.querySelectorAll('.form__toggle');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('burger-menu-ico_open');
    if (menuBurger.classList.contains('burger-menu-ico_open')){
        document.querySelector('.burger-menu').classList.add('burger-menu_open')
    } else {
        document.querySelector('.burger-menu').classList.remove('burger-menu_open')
    }
})


formToggle[0].addEventListener('click', () => {
    formToggleSwitch(formToggle[0]);
})

formToggle[1].addEventListener('click', () => {
    formToggleSwitch(formToggle[1]);
})

document.querySelector('.close__form').addEventListener('click', ()=>{
    form.classList.remove('form_active');
})

function formToggleSwitch (i) {
    form.classList.toggle('form_active');
}


document.querySelector('#table__form').addEventListener('submit', event => {
   event.preventDefault();
   alert('ЕЕЕЕЕЕЕ, ой-бой')
})

document.querySelector('#first-screen__form').addEventListener('submit', event => {
    event.preventDefault();
    alert('О мой Бог!')
 })