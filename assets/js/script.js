//This is the DOM selector for the first box
var forecast_image = document.getElementById("forecast-img")
//These are the DOM selectors for the second box
var forecast_temp = document.getElementById("forecast-temp")
var forecast_humid = document.getElementById("forecast-humidity")
var forecast_wind = document.getElementById("forecast-wind")
var forecast_buzz = document.getElementById("forecast-buzz")


const OPENWEATHER_API_KEY = "6ddb7b9eda44e747c0962325870a6579";

getInfo("http://api.openweathermap.org/data/2.5/weather?q=Cleveland,us&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579")

 //PURPOSE: to fetch the OpenWeather API and use the information obtained from it to display on the web page
//PARAMETERS: the OpenWeather API link with the specific city needed
//RETURNS: NONE
async function getInfo(file) {
    var myObject = await fetch(file);
    console.log(myObject);
    var myText = await myObject.text();
    var weather_data = JSON.parse(myText);
    console.log(weather_data);

    //START OF THE FIRST BOX
    //This section will create an icon link, create the icon, and then append it on the page in place
    var icon_link = "http://openweathermap.org/img/w/" + weather_data.weather[0].icon + ".png";
    let weatherIcon = new Image();
    weatherIcon.src = icon_link;
    forecast_image.appendChild(weatherIcon);

    //This section will add the weather information under the icon
    let weatherStatus = document.createElement("h2");
    weatherStatus.textContent = weather_data.weather[0].main;
    weatherStatus.style.textAlign = "center";
    weatherStatus.style.fontWeight = "bold";
    weatherStatus.style.fontSize = "28px";
    forecast_image.append(weatherStatus);

    //START OF THE SECOND BOX
    //This section will add the weather temperature 
    let weatherTemp = document.createElement("h2");
    weatherTemp.textContent = Math.round(weather_data.main.temp) + "\u00B0" + "F";
    weatherTemp.style.textAlign = "center";
    weatherTemp.style.fontWeight = "bold";
    forecast_temp.style.textAlign = "center";
    forecast_temp.append(weatherTemp);

    //This section will add the weather humidity 
    let weatherHumid = document.createElement("h2");
    weatherHumid.textContent = Math.round(weather_data.main.humidity) + "%";
    weatherHumid.style.textAlign = "center";
    weatherHumid.style.fontWeight = "bold";
    forecast_humid.style.textAlign = "center";
    forecast_humid.style.margin = "25px 0px 25px 0px";
    forecast_humid.append(weatherHumid);

    //This section will add the weather wind speed 
    let weatherWind = document.createElement("h2");
    weatherWind.textContent = Math.round(weather_data.wind.speed) + " MPH";
    weatherWind.style.textAlign = "center";
    weatherWind.style.fontWeight = "bold";
    forecast_wind.style.textAlign = "center";
    forecast_wind.append(weatherWind);
}