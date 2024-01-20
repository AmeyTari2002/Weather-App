const inputBox = document.querySelector('.input-box')
const searchBtn = document.querySelector('#searchBtn')
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body')
const weather_img = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const wind_speed = document.querySelector('#wind-speed')
const humidity = document.querySelector('#humidity')



async function Search(city) {
    const api_key = "186731e6f4451115a8d34d32d27fd52c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const response = await fetch(`${url}`).then((res) =>
        res.json())
    console.log(response)

    if (response.cod === '404') {
        location_not_found.style.display = "block"
        weather_body.style.display = "none"
    }
    else {
        location_not_found.style.display = "none"
        weather_body.style.display = "block"
        temperature.innerHTML = `${Math.round(response.main.temp - 273.15)}°C`
        description.innerHTML = `${response.weather[0].description}`
        humidity.innerHTML = `${response.main.humidity}%`
        wind_speed.innerHTML = `${response.wind.speed}%`

    }


    switch (response.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;

    }

}




searchBtn.addEventListener('click', () => {
    Search(inputBox.value)
})


inputBox.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        Search(inputBox.value)
    }

})







































// const inputBox = document.querySelector('.input-box');
// const searchBtn = document.getElementById('searchBtn');
// const weather_img = document.querySelector('.weather-img');
// const temperature = document.querySelector('.temperature');
// const description = document.querySelector('.description');
// const humidity = document.getElementById('humidity');
// const wind_speed = document.getElementById('wind-speed');


// const location_not_found = document.querySelector('.location-not-found');

// const weather_body = document.querySelector('.weather-body');


// async function checkWeather(city) {
//     const api_key = "186731e6f4451115a8d34d32d27fd52c";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data = await fetch(`${url}`).then(response =>
//         response.json());


//     console.log(weather_data)

//     if (weather_data.cod === `404`) {
//         location_not_found.style.display = "flex";
//         weather_body.style.display = "none";
//         console.log("error");
//         return;
//     }

//     console.log("run");
//     location_not_found.style.display = "none";
//     weather_body.style.display = "flex";
//     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
//     description.innerHTML = `${weather_data.weather[0].description}`;

//     humidity.innerHTML = `${weather_data.main.humidity}%`;
//     wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


//     switch (weather_data.weather[0].main) {
//         case 'Clouds':
//             weather_img.src = "/assets/cloud.png";
//             break;
//         case 'Clear':
//             weather_img.src = "/assets/clear.png";
//             break;
//         case 'Rain':
//             weather_img.src = "/assets/rain.png";
//             break;
//         case 'Mist':
//             weather_img.src = "/assets/mist.png";
//             break;
//         case 'Snow':
//             weather_img.src = "/assets/snow.png";
//             break;

//     }

//     console.log(weather_data);
// }


// searchBtn.addEventListener('click', () => {
//     checkWeather(inputBox.value);
// });

// inputBox.addEventListener('keypress', (e) => {
//     if (e.key == 'Enter')
//         checkWeather(inputBox.value)
// })