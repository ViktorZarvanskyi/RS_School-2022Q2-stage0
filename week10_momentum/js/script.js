// console.log('Ваша оценка - 70 баллов\n\nОтзыв по пунктам ТЗ:\n\nНе выполненные/не засчитанные пункты:\n1) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause\n2) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play\n3) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev)\n4) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем\n5) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый.\n 6) добавлен прогресс-бар в котором отображается прогресс проигрывания\n7) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека\n8) над прогресс-баром отображается название трека\n9) отображается текущее и общее время воспроизведения трека\n10) есть кнопка звука при клике по которой можно включить/отключить звук\n11) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука\n12) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте\n13) переводится язык и меняется формат отображения даты\n14) переводится приветствие и placeholder\n15) переводится прогноз погоды в т.ч описание погоды и город по умолчанию\n16) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая\n17) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется\n18) в качестве источника изображений может использоваться Unsplash API\n19) в качестве источника изображений может использоваться Flickr API\n20) в настройках приложения можно указать язык приложения (en/ru или en/be)\n21) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API\n22) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото\n23) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал\n24) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их\n25) настройки приложения сохраняются при перезагрузке страницы\n26) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным\n\nВыполненные пункты:\n1) время выводится в 24-часовом формате, например: 21:01:00\n2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается)\n3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня"\n4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток\n5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется\n6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз\n7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке)\n8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке)\n9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения\n10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage\n11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел\n12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов)\n13) при загрузке страницы приложения отображается рандомная цитата и её автор\n14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую)\n')







// 01. Clock
function actualTime() {
    const time = document.querySelector(".time");
    time.innerHTML = new Date().toLocaleTimeString();
    setTimeout(actualTime, 1000);
    actualDate();
    showGreeting(getTimeOfDay());
};
actualTime();


// 01. Date
function actualDate() {
    const date = document.querySelector(".date");
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    date.innerHTML = new Date().toLocaleDateString('en-US', options);
};


// 02. Greeting
function getTimeOfDay() {
    const hours = new Date().getHours();
    let timesOfDay = "";
    if (hours >= 0 && hours < 6) {
        timesOfDay = "night";
    } else if (hours >= 6 && hours < 12) {
        timesOfDay = "morning";
    } else if (hours >= 12 && hours < 18) {
        timesOfDay = "afternoon";
    } else if (hours >= 18 && hours < 24) {
        timesOfDay = "evening";
    };
    return timesOfDay;
};
getTimeOfDay();

function showGreeting(funk) {
    const greeting = document.querySelector(".greeting");
    greeting.innerHTML = "Good " + funk;
};


// 02. Greeting input
const name = document.querySelector(".name");
function setLocalStorage() {
    
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);


// // 03. Slider
function getRandomInt() {
    let numBg = Math.floor(Math.random() * (20 - 1 + 1) + 1).toString().padStart(2, "0");
    return numBg;
}

let randomNum = getRandomInt();
let count = 0;

function setBg(funcFirst, funcSecond) {  
    const body = document.querySelector("body");
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/ViktorZarvanskyi/RS_School-2022Q2-stage0_momentum/main/assets/img/${funcFirst}/${funcSecond}.jpg`;
    // img.src = `https://raw.githubusercontent.com/ViktorZarvanskyiRS_School-2022Q2-stage0/main/week10_RS_School-2022Q2-stage0_momentum/assets/img/${funcFirst}/${funcSecond}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    };
}
setBg(getTimeOfDay(), randomNum);

const slideNext = document.querySelector(".slide-next");
slideNext.addEventListener('click', () => {
    count++;
    if (count > 20) {
        count = 1;
    }
    changeBg(count);
});

const getSlidePrev = document.querySelector(".slide-prev");
getSlidePrev.addEventListener('click', () => {
    count--;
    if (count < 1) {
        count = 20;
    }
    changeBg(count);
});

function changeBg(count) {
    let result;
    if (Number(randomNum) + count <= 20) {
        result = (Number(randomNum) + count).toString().padStart(2, "0");
    } else {
        result = (Number(randomNum) + count - 20).toString().padStart(2, "0");
    }
    setBg(getTimeOfDay(), result);
};


// 04. Weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');

function setLocalStorageCity() {
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorageCity);

function getLocalStorageCity() {
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        setTimeout(getWeather, 10);
    }
}
window.addEventListener('load', getLocalStorageCity);

async function getWeather() {
    if (city.value !== '') {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=7a3326f3502b948636e7941d08a7dbd8&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === '404' || data.cod === '400') {
            weatherIcon.className = '';
            temperature.textContent = '';
            weatherDescription.textContent = '';
            wind.textContent = '';
            humidity.textContent = '';
            error.textContent = "Please write the correct name of the city";
        } else {
            weatherIcon.className = 'weather-icon owf';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            error.textContent = '';
        }
    } else {
        weatherIcon.className = '';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
        error.textContent = "Please write the correct name of the city";
    }
}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);


// 05. Quotes
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

// async function getQuotes() {
//     const url = 'https://type.fit/api/quotes';
//     const res = await fetch(url);
//     const data = await res.json();
//     const randomNumber = Math.floor(Math.random() * data.length);

//     author.innerHTML = data[randomNumber].author;
//     quote.innerHTML = `"${data[randomNumber].text}"`;
// }
async function getQuotes() {
    const url = 'json/notes.json';
    const res = await fetch(url);
    const data = await res.json();
    const randomNumber = Math.floor(Math.random() * data.length);
    author.innerHTML = data[randomNumber].author;
    quote.innerHTML = `"${data[randomNumber].quote}"`;
}
getQuotes();
changeQuote.addEventListener('click', getQuotes);


// 06. Audio Player












