// Root URL: https://app.ticketmaster.com/discovery/v2/
// API Key: ?apikey=7JuSLn48lLbD7EjJgIc6tqFSh9xt4B9y
// Event Info: /discovery/v2/events/{id}
// yyyy-MM-dd'T'HH:mm:ssZ
// data._embedded.events
var test = dayjs()

var testBox = document.querySelector('#list-item')
var eventsList = document.querySelector('#events-list')
var listArray = $('.list-item')
var cityInput = $('.input')
var headerContent = $('.header-content')

var currentDay = dayjs().format('YYYY-MM-DD')
var currentTime = dayjs().format('HH:mm:ss') + 'Z'
var dateToday = currentDay + "T" + currentTime
var dateEnd = test.add(5, 'day').format('YYYY-MM-DD') + 'T' + currentTime

//var ticketmasterUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=7JuSLn48lLbD7EjJgIc6tqFSh9xt4B9y"

headerContent.on('click', '.button', function() {
    var cityName = cityInput.val()
    var ticketmasterUrl =  "https://app.ticketmaster.com//discovery/v2/events.json?city=" + cityName + "&startDateTime=" + dateToday + "&endDateTime=" + dateEnd + "&apikey=7JuSLn48lLbD7EjJgIc6tqFSh9xt4B9y"
    
    cityInput.val('')

    var weatherBoxes = $('.forecast-img')
    //Empties top of forecast
    $("#forecast-top").empty()

    console.log(cityName)
    console.log(dateToday)
    console.log(dateEnd)

    //Weather API request - START OF WEATHER API CALL
    console.log(currentDate);
    console.log(otherDate)
    getWeatherInfo(cityName, otherDate);

    fetch(ticketmasterUrl)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)

            //Grabs the list from the webpage and fills it with content from the API
            for (i = 0; i < listArray.length; i++) {
                var h3 = eventsList.children[i].children[0]
                var p = eventsList.children[i].children[1]
                var p2 = eventsList.children[i].children[2]
                
                h3.textContent = "Event - " + data._embedded.events[i].name
                p.textContent = "Date and Time: " + dayjs(data._embedded.events[i].dates.start.localDate).format('ddd, MMM D') + " at " + dayjs(data._embedded.events[i].dates.start.localDate + "T" + data._embedded.events[i].dates.start.localTime).format('h:mm A')
                p2.textContent = data._embedded.events[i]._embedded.venues[0].name

                eventsList.children[i].appendChild(h3)
                eventsList.children[i].appendChild(p)
                eventsList.children[i].appendChild(p2)
            }
        })
})

// Event Name:
// Event Date:
// Event Image:






// //Function for date range 
// $('input[name="dates"]').daterangepicker();

// $(function() {

//     var start = moment().subtract(29, 'days');
//     var end = moment();

//     function cb(start, end) {
//         $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
//     }

//     $('#reportrange').daterangepicker({
//         startDate: start,
//         endDate: end,
//         ranges: {
//            'Today': [moment(), moment()],
//            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//            'This Month': [moment().startOf('month'), moment().endOf('month')],
//            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//         }
//     }, cb);

//     cb(start, end);

// });

//START OF OPENWEATHER API

//This is the DOM selector for the first box
var forecast_image = document.getElementById("forecast-top")
//These are the DOM selectors for the second box
var weatherTemp = document.getElementById("forecast-temp-input")
var weatherHumid = document.getElementById("forecast-humidity-input")
var weatherWind = document.getElementById("forecast-wind-input")

var currentDate = dayjs().format("YYYY-MM-DD");
//Current set to 2023-08-11
var otherDate = dayjs(new Date(2023, 7, 11)).format("YYYY-MM-DD")


const OPENWEATHER_API_KEY = "6ddb7b9eda44e747c0962325870a6579";


//PURPOSE: to fetch the OpenWeather API and use the information obtained from it to display on the web page
//PARAMETERS: the OpenWeather API link with the specific city needed

// console.log(currentDate);
// console.log(otherDate)
// getWeatherInfo("Cleveland", currentDate);


//PURPOSE: to fetch the OpenWeather API and use the information obtained from it to display on the web page
//PARAMETERS: city: a string which is name of city, date: a string, date weather request
//RETURNS: NONE
async function getWeatherInfo(city, date) {

    //API LINK FORMATTING
    var weatherForecastCall = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579";
    var weatherAPICall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&APPID=6ddb7b9eda44e747c0962325870a6579";

    //IF statement to determine if it is current day, else will run other code
    if (currentDate === date){
        var data = await fetch(weatherAPICall);
        var dataToParse = await data.text();
        var weather_data = JSON.parse(dataToParse);

        //START OF THE FIRST BOX
        //This section will create an icon link, create the icon, and then append it on the page in place
        var icon_link = "http://openweathermap.org/img/w/" + weather_data.weather[0].icon + ".png";
        let weatherIcon = new Image();
        weatherIcon.src = icon_link;
        weatherIcon.style.width = "200px";

        //This section will add the weather information under the icon
        let weatherStatus = document.createElement("h2");
        weatherStatus.textContent = weather_data.weather[0].main;
        weatherStatus.style.textAlign = "center";
        weatherStatus.style.fontWeight = "bold";
        weatherStatus.style.fontSize = "28px";
        forecast_image.append(weatherStatus);
        weatherStatus.after(weatherIcon);

        //START OF THE SECOND BOX
        //This section will add the weather temperature 
        weatherTemp.textContent = Math.round(weather_data.main.temp) + "\u00B0" + "F";
        weatherTemp.style.textAlign = "center";
        weatherTemp.style.fontWeight = "bold";

        //This section will add the weather humidity
        weatherHumid.textContent = Math.round(weather_data.main.humidity) + "%";
        weatherHumid.style.textAlign = "center";
        weatherHumid.style.fontWeight = "bold";

        //This section will add the weather wind speed 
        weatherWind.textContent = Math.round(weather_data.wind.speed) + " MPH";
        weatherWind.style.textAlign = "center";
        weatherWind.style.fontWeight = "bold";
    } else {
        var data = await fetch(weatherForecastCall);
        var dataToParse = await data.text();
        var weather_data = JSON.parse(dataToParse);
        console.log(weather_data);
        console.log("This is a different day!");



        //Loops through all 5 days and adds the data to the screen for each, time for each day is approx. 5pm EST
        var daysWeather = [];
        var listNum = 5;
        var requestedDate = date;
        for(var i = 0; i<5; i++){
            //Date for Five Day Forecast
            var dailyWeatherData = weather_data.list[listNum];
            var date = dayjs().add(i+1,'days').format("YYYY-MM-DD");
            var day = [];
            day.push(dailyWeatherData)
            day.push(date);
            daysWeather.push(day)
            listNum+=8;
        }
        console.log(daysWeather);

        daysWeather.forEach((dayArr) => {
            if(dayArr[1] === requestedDate){
                //START OF THE FIRST BOX
                //This section will create an icon link, create the icon, and then append it on the page in place
                var icon_link = "http://openweathermap.org/img/w/" + dayArr[0].weather[0].icon + ".png";
                let weatherIcon = new Image();
                weatherIcon.src = icon_link;
                weatherIcon.style.width = "200px";

                //This section will add the weather information under the icon
                let weatherStatus = document.createElement("h2");
                weatherStatus.textContent = dayArr[0].weather[0].main;
                weatherStatus.style.textAlign = "center";
                weatherStatus.style.fontWeight = "bold";
                weatherStatus.style.fontSize = "28px";
                forecast_image.append(weatherStatus);
                weatherStatus.after(weatherIcon);

                //START OF THE SECOND BOX
                //This section will add the weather temperature 
                weatherTemp.textContent = Math.round(dayArr[0].main.temp) + "\u00B0" + "F";
                weatherTemp.style.textAlign = "center";
                weatherTemp.style.fontWeight = "bold";

                //This section will add the weather humidity 
                weatherHumid.textContent = Math.round(dayArr[0].main.humidity) + "%";
                weatherHumid.style.textAlign = "center";
                weatherHumid.style.fontWeight = "bold";

                //This section will add the weather wind speed 
                weatherWind.textContent = Math.round(dayArr[0].wind.speed) + " MPH";
                weatherWind.style.textAlign = "center";
                weatherWind.style.fontWeight = "bold";
            }
          });
    }


}

