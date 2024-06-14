const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click',() =>{

    const APIKey = '3a68280b6d693f5e99795007374c9fb8';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}').then(response => response.json()).then(json => {
        
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.jpeg';
                break;
            
            case 'Rain':
                image.src = 'images/rain.jpeg';
                break;

            case 'Snow':
                    image.src = 'images/snow.jpeg';
                    break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                break;

            case 'Mist':
                    image.src = 'images/mist.jpeg';
                    break;

            case 'Haze':
                    image.src = 'images/mist.jpeg';
                    break;

            default:
                image.src = 'images/clouds.png';
        }

        temperature.innerHTML = '${parseInt(json.main.temp)}<span>°c</span>';
        description.innerHTML = '${json.weather[0].description}';
        humidity.innerHTML = '${json.main.humidity}%';
        wind.innerHTML = '${parseInt(json.wind.speed)}km/h';
    });     
});