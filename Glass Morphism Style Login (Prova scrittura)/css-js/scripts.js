const email_box = document.getElementById('email-box');
const txt_h4 = document.getElementById('txt-em');
const sc_email = document.querySelector('.email-sc');

email_box.addEventListener('focus', ()=>{
    txt_h4.classList.add('focus');
})

email_box.addEventListener('blur', ()=>{
   if (email_box.value !== '') {
    txt_h4.classList.add('focus');
   } else {
    txt_h4.classList.remove('focus');
   }
})

const passwd_box = document.getElementById('passwd-box');
const txt_pswd = document.getElementById('txt-ps');
const sc_passwd = document.querySelector('.passwd-sc');

passwd_box.addEventListener('focus', ()=>{
    txt_pswd.classList.add('focus-ps');
})

passwd_box.addEventListener('blur', ()=>{
   if (passwd_box.value !== '') {
    txt_pswd.classList.add('focus-ps');
   } else {
    txt_pswd.classList.remove('focus-ps');
   }
})

const btn_passwd = document.getElementById('btn-passwd');
const icon_eyes = document.querySelector('.fa-eye');
const icon_eyes_slash = document.querySelector('.fa-eye-slash');

btn_passwd.addEventListener('click', ()=>{
    if (icon_eyes_slash.style.display !== 'block') {
        passwd_box.setAttribute('type', 'text');
        icon_eyes.style.display = 'none';
        icon_eyes_slash.style.display = 'block';
    } else {
        passwd_box.setAttribute('type', 'password');
        icon_eyes.style.display = 'block';
        icon_eyes_slash.style.display = 'none';
    }
})