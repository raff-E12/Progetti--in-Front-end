let menu_header = document.querySelector('.header-top');

function menu_header_scroll(e){
    let scroll_Y = window.scrollY;
    //console.log(scroll_Y);
    if (scroll_Y >= 100) {
        menu_header.classList.add('scroll-had');
    } else {
        menu_header.classList.remove('scroll-had');
    }
}

window.addEventListener('scroll', ()=>{
    menu_header_scroll();
});

// interazione header
function hovering_header_links_0(){
    let links_nav = document.querySelectorAll('.link');
    links_nav[0].classList.add('hover-line');
}

function hovering_header_links_1(){
    let links_nav = document.querySelectorAll('.link');
    links_nav[1].classList.add('hover-line');
}

function over_header_links_0(){
    let links_nav = document.querySelectorAll('.link');
    links_nav[0].classList.remove('hover-line');
}

function over_header_links_1(){
    let links_nav = document.querySelectorAll('.link');
    links_nav[1].classList.remove('hover-line');
}

//interazione ham-menu

function hovering_header_links_2(){
    let links_nav = document.querySelectorAll('.link-ham');
    links_nav[0].classList.add('hover-line-ham');
}

function hovering_header_links_3(){
    let links_nav = document.querySelectorAll('.link-ham');
    links_nav[1].classList.add('hover-line-ham');
}

function over_header_links_2(){
    let links_nav = document.querySelectorAll('.link-ham');
    links_nav[0].classList.remove('hover-line-ham');
}

function over_header_links_3(){
    let links_nav = document.querySelectorAll('.link-ham');
    links_nav[1].classList.remove('hover-line-ham');
}

function check_click(){
    let checkbox = document.getElementById('pr-checkbox');
    let checkmark = document.querySelector('.checkmark');
    if (!checkmark.classList.contains('check')) {
        checkmark.classList.add('check');
        checkbox.setAttribute('checked', 'checked');
    } else {
        checkbox.removeAttribute('checked');
        checkmark.classList.remove('check');
    }
}

let display_1 = document.getElementById('selection-1');
let display_2 = document.getElementById('selection-2');
let display_3 = document.getElementById('selection-3');
const circle_1 = document.getElementById('circle-1');
const circle_2 = document.getElementById('circle-2');
const circle_3 = document.getElementById('circle-3');

circle_1.addEventListener('click', ()=>{
    display_1.style.display ='block';
    display_2.style.display ='none';
    display_3.style.display ='none';
})


circle_2.addEventListener('click', ()=>{
    display_1.style.display ='none';
    display_2.style.display ='block';
    display_3.style.display ='none';
})


circle_3.addEventListener('click', ()=>{
    display_1.style.display ='none';
    display_2.style.display ='none';
    display_3.style.display ='block';
})

const title_art = ['Box1', 'Box2', 'Box3', 'Box4'];
let hero_container = document.getElementById('container-tr');
const hero_cont = document.querySelector('.hero-sc');
let index = 0;
let hero_motion_timeout;

function hero_motion(){
    if (index <= title_art.length-1) {
        index = (index + 1) % 4;
        let title_art_01 = title_art[index];
        //console.log(title_art_01);
        hero_container.style.transform = 'translateX('+ (-index * 25) + '%)';
    }
    else if(index > 0){
        index = 0;
    }
    else {
        index = title_art.length-1;
    }
    start_motion();
}

function start_motion(){
hero_motion_timeout = setTimeout(hero_motion, 2940);
}

let cube_loading = document.querySelector('.cube');
let txt_loading = document.querySelector('.loading-txt');
let page_loading = document.querySelector('.loading-page');
let body_home = document.querySelector('.body-home');
const news_1 = document.getElementById('sec-nw-1');
const news_2 = document.getElementById('sec-nw-2');
const news_3 = document.getElementById('sec-nw-3');
const news_box = document.querySelector('.news-box');

window.addEventListener('load', ()=>{
    start_motion();
    cube_loading.classList.add('open-cube');
    txt_loading.classList.add('open');
    setTimeout(()=>{
        page_loading.classList.add('close');
    }, 3600)
    setTimeout(()=>{
        page_loading.style.display = 'none';
    }, 3990)
    setTimeout(()=>{
        body_home.classList.add('open');
    },3500)
    setTimeout(()=>{
        news_1.classList.add('loading');
        news_2.classList.add('loading');
        news_3.classList.add('loading');
    }, 6000)
    setTimeout(()=>{
        news_box.style.overflow = 'visible';
    }, 6500)
})

//interazione ham-icon e cross-icon

const ham_icon = document.querySelector('#ham-icon');
const cross_icon = document.querySelector('.cross-sc');
let ham_menu = document.querySelector('.box-ad-ham');

ham_icon.addEventListener('click', ()=>{
    ham_menu.style.right = '0';
    body_home.style.filter = 'blur(60px)';
})

cross_icon.addEventListener('click', ()=>{
    ham_menu.style.right = '-290px';
    body_home.style.filter = 'blur(0)';
})