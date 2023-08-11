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
    //h3.textContent = ""
    //p.textContent = ""
    //p2.textContent = ""

    console.log(cityName)
    console.log(dateToday)
    console.log(dateEnd)

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
                p.textContent = "Date and Time: " + dayjs(data._embedded.events[i].dates.start.localDate).format('ddd, MMM D') + " at " + dayjs(data._embedded.events[0].dates.start.localDate + "T" + data._embedded.events[0].dates.start.localTime).format('h:mm A')
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