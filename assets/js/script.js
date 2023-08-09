var forecast_image = document.getElementById("#forecast-image")


const OPENWEATHER_API_KEY = "6ddb7b9eda44e747c0962325870a6579";

getInfo("http://api.openweathermap.org/data/2.5/weather?q=Cleveland,us&APPID=6ddb7b9eda44e747c0962325870a6579")

async function getInfo(file) {
    var myObject = await fetch(file);
    console.log(myObject);
    var myText = await myObject.text();
    var weather_data = JSON.parse(myText);
    console.log(weather_data);

    var icon_link = "http://openweathermap.org/img/w/" + weather_data.weather[0].icon + ".png";
    let img = new Image();
    img.src = icon_link;
    console.log(img);
    forecast_image.appendChild(img);
}