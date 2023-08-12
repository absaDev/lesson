const cities = [];
let activeCityData = null;

async function sendReq(cityName) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

function onSearchClick() {
    const cityName = document.querySelector('.input').value;
    document.querySelector('.input').value = '';
    updateCityData(cityName);
    addCity(cityName);
}

const updateCityData = async (cityName) => {
    activeCityData = await sendReq(cityName);
    renderActiveCityWeather();
};

const renderActiveCityWeather = () => {
    if (activeCityData) {
        document.querySelector('.left-weather-degrees').innerText =
            activeCityData.main.humidity;
        document.querySelector('.left-weather-cloud').innerText =
            activeCityData.weather[0].main;
        document.querySelector('.left-weather-city').innerText =
            activeCityata.name;
    }
};

const addCity = (cityName) => {
    if (cities.includes(cityName) == false) {
        cities.push(cityName);
        renderFavorites();
    }
};

const renderFavorites = () => {
    document.querySelectorAll('.city-list li').forEach((el) => {
        el.remove();
    });

    const ul = document.querySelector('.city-list ul');

    cities.forEach((city) => {
        const li = document.createElement('li');
        li.innerHTML = city;
        li.onclick = () => updateCityData(city);

        ul.appendChild(li);
    });
};

renderFavorites();
