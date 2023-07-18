async function sendReq(cityName) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    
    return data;
}

async function onSearchClick() {
    const cityName = document.querySelector('.input').value;
    const data = await sendReq(cityName);

    // обновление dom
    document.querySelector('.left-weather-degrees').innerText = data.main.humidity;
    document.querySelector('.left-weather-cloud').innerText = data.weather[0].main;
    document.querySelector('.left-weather-city').innerText = data.name;
}
