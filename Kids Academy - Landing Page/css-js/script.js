const header_win = document.getElementById('header-sc');
const hero_txt_win = document.getElementById('hero-front-text');
const bottom_hero_bt = document.getElementById('landing-bottom');
const sh_box_lt = document.getElementById('hash-box-left');
const sh_box_rg = document.getElementById('hash-box-right');
const box_lg = document.getElementById('lg-box');
const box_ham = document.getElementById('ham-menu');
const btn_ham = document.getElementById('ham-btn');
const btn_cross = document.getElementById('cross-btn');
const icon_lg = document.getElementById('icon-lg');

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        box_lg.classList.add('unshow');
        icon_lg.style.opacity = '0';
    }, 500);
    setTimeout(()=>{
        header_win.classList.add('show');
        hero_txt_win.classList.add('show');
        bottom_hero_bt.classList.add('show');
        sh_box_lt.classList.add('show');
        sh_box_rg.classList.add('show');
    }, 720);
})

btn_ham.addEventListener('click', ()=>{
    let hero_sc = document.getElementById('hero-sc');
    if (!box_ham.classList.contains('show')) {
        box_ham.classList.add('show');
        hero_sc.classList.add('blur');
    }
})

btn_cross.addEventListener('click', ()=>{
    let hero_sc = document.getElementById('hero-sc');
    if (box_ham.classList.contains('show')) {
        box_ham.classList.remove('show');
        hero_sc.classList.remove('blur');
        hero_sc.style.transition = 'all ease-in-out .3s';
    }
})

window.addEventListener('resize', ()=>{
    let hero_sc = document.getElementById('hero-sc');
    if(!window.matchMedia('min-width:992px').matches){
        hero_sc.classList.remove('blur');
        box_ham.classList.remove('show');
        hero_sc.style.transition = 'all ease-in-out .3s';
    }
    else{
        hero_sc.classList.add('blur');
        box_ham.classList.add('show');
        hero_sc.style.transition = 'all ease-in-out .3s';
    }
})