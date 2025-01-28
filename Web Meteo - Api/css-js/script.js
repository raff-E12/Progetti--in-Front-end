const Btn_src = document.getElementById('btn-src');

function loading_animation() {
    const result_show = document.querySelector('.result-show');
    const h4_text = document.getElementById('text-country');
    const img_box = document.querySelector('.img-rf');
    const uni_grad = document.getElementById('unit-grad');
    const text_temp = document.getElementById('text-temp');
    const info_bottom = document.querySelector('.info-bottom-info');
    const img_box_bt = document.querySelectorAll('.cn-img-bt');
    const text_hum = document.getElementById('text-hum');
    const text_wid = document.getElementById('text-wind');

    setTimeout(()=>{
        result_show.classList.remove('placeholder-glow');
        h4_text.classList.remove('placeholder');
        img_box.classList.remove('placeholder');
        uni_grad.classList.remove('placeholder');
        text_temp.classList.remove('placeholder');
        info_bottom.classList.remove('placeholder-glow');
        img_box_bt[0].classList.remove('placeholder');
        img_box_bt[1].classList.remove('placeholder');
        text_hum.classList.remove('placeholder');
        text_wid.classList.remove('placeholder');
    },500)
}

async function fetchdata(){
let err_box = document.getElementById('error-box');
let text_err = document.getElementById('text-err');
const key_api = '8cf3c7a2bff521246fc93fa24c5d7983';
const search_box = document.getElementById('search-box');
const city_id = search_box.value;
const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_id}&appid=${key_api}`;
    try {
        let responde = await fetch(api_url);
        let data = await responde.json();
        console.log(data);
        let sta_weather = data.weather[0].main;
        let location_name = data.name;
        let wind_speed = data.wind.speed;
        let hum = data.main.humidity;
        let country_name = data.sys.country;
        let grad_unit = data.main.feels_like;
        console.log(sta_weather);
        icon_weather_work(sta_weather);
        working_text(location_name, country_name, grad_unit, wind_speed, hum);
    } catch (error) {
        console.log(error);
        err_box.style.opacity = '100';
        text_err.textContent = 'Stai Cercando qualcosa che non è presente.';
        setTimeout(()=>{
            err_box.style.opacity = '0';
        }, 1000);
    }
}

function icon_weather_work(icon_wh){
let img_scroller = document.getElementById('scroller');
let tp_text = document.getElementById('text-temp');
let index_list = 0;
const text_temp = ["Cielo sereno.", " è Nuvoloso.", "Sta Piovigginando.", "è Nebbia.", "è Pioggia.", "Sta Nevicando."];
    switch (icon_wh) {
        case 'Snow':
        img_scroller.style.transform = 'translateY(-85%)';
        tp_text.textContent = text_temp[index_list = 5];
        break;

        case 'Rain':
        img_scroller.style.transform = 'translateY(-68%)';
        tp_text.textContent = text_temp[index_list = 4];
        break;

        case 'Mist':
        img_scroller.style.transform = 'translateY(-52%)';
        tp_text.textContent = text_temp[index_list = 3];
        break;

        case 'Dizzle':
        img_scroller.style.transform = 'translateY(-34%)';
        tp_text.textContent = text_temp[index_list = 2];
        break;
            
        case 'Clouds':
        img_scroller.style.transform = 'translateY(-18%)';
        tp_text.textContent = text_temp[index_list = 1];
        break;

        case 'Clear':
        img_scroller.style.transform = 'translateY(0%)';
        tp_text.textContent = text_temp[index_list = 0];
        break;
    
        default:
        img_scroller.style.transform = 'translateY(0%)';
        temp_text.temp_text = 'Non trovato.';
        break;
}
return icon_wh;
}

function working_text(text_location, country_text, temp_text, wind_txt, hum_txt){
    let text_country = document.getElementById('text-country');
    let unit_temp_text = document.getElementById('unit-grad');
    let wind_text = document.getElementById('text-wind');
    let hum_text = document.getElementById('text-hum');
    text_country.textContent = text_location + ',  ' + country_text;
    unit_temp_text.textContent = Math.ceil(temp_text).toString().slice(0, 2) + ' °C';
    wind_text.textContent = wind_txt + ' Km/h';
    hum_text.textContent = hum_txt + ' %';
}

Btn_src.addEventListener('click', fetchdata);
window.addEventListener('load', loading_animation);
