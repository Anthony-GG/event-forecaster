const OPENWEATHER_API_KEY = "6ddb7b9eda44e747c0962325870a6579";

getInfo("http://api.openweathermap.org/data/2.5/weather?q=Cleveland,us&APPID=6ddb7b9eda44e747c0962325870a6579")

async function getInfo(file) {
    var myObject = await fetch(file);
    console.log(myObject);
    var myText = await myObject.text();
    console.log(JSON.parse(myText));
}