

let bgCreative = document.getElementById('bg-creative');
let showText = document.querySelector('.title');


// Keys for the urls;
let apiKeyForIP = '8f951e7018f84179bededdc88b7168a4';
let apiKeyForWeather = 'cfe1d175c7917a37b459352bce7a4241';

let lat; // latitude 
let lon; // longitude

let urlForIP = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKeyForIP}`;

// Rounding number to certain decimals 
function addDecimals(num, decimals) {
    return (Number(Math.round(num * 100) / 100).toFixed(decimals))
};


// DISPLAY INFORMATION AFTER FETCHING DATA

async function displayInfo() {
    // Fetch data for ip location:
    let data = await fetchData(urlForIP);

    const { city } = data;

    lat = addDecimals(data.latitude, 2);
    lon = addDecimals(data.longitude, 2);

    let urlForWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=${apiKeyForWeather}`;

    // Fetch data for weather details:
    let weatherInfo = await fetchData(urlForWeather);

    const { temp } = weatherInfo.current;

    // Show text information, the city and current temperature, depending on the the user's browser location:
    showText.innerText =`${city} ${addDecimals(temp, 0)} \u2103`;

    // display all background images in slide-show time interval, depending on the current temperature: 
    changeBGImage(temp);
};

// on page load:
displayInfo();


