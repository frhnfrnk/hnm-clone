const head_modal = document.querySelector('.head_modal_pop');
const more_dot = document.querySelector('.more_dot');

more_dot.addEventListener('click', () => {
    head_modal.classList.toggle('active');
});


const hamburger = document.querySelector('.hamburger');
const nav_mob = document.querySelector('.nav-mob')
const nav_link_mob = document.querySelector('.nav-link-mob');

hamburger.addEventListener('click', () => {
    nav_link_mob.classList.add('active');
    nav_link_mob.classList.remove('anim');
    nav_mob.classList.add('active');
});

nav_mob.addEventListener('click', () => {
    nav_link_mob.classList.add('anim');
    setTimeout(() => {
        nav_link_mob.classList.remove('active');
        nav_mob.classList.remove('active');
    }, 250);
    
});


const search_mob = document.querySelector('.search_mob');
const close_mob = document.querySelector('.close_mob');
const search_box_mob = document.querySelector('.search-box-mob');

search_mob.addEventListener('click', () => {
    search_box_mob.classList.toggle('active');
});

close_mob.addEventListener('click', () => {
    search_box_mob.classList.toggle('active');
});