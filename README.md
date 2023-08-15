# CWRU Bootcamp Project 1 - Event Forecaster

## Description

1. In this project, our main goal was to create an event forecaster, a program that would pull data from both the Ticketmaster API and OpenWeather API to display a list of events, that once clicked on, will give general weather information for a given day!

2. A big focus of this project was combining two server-side APIS, which I believe we accomplished relatively seamlessly!
                                                                       
3. We decided to use Bulma for our CSS Framework and it allowed for us to impliment easy to use formatting, dropdowns, boxes and pagination!

4. For the OpenWeather API, we ended up having to use two seperate API call links and then using internal logic to determine which path the weather would go! (Current day on one path, any day in the future on the other.)

5. For the Tickermater API, we used global variables for the different dates so setup the timeframe for the call, and then would append the items to the list on the page.

## Installation and Usage

Simply use the download all of the files provided and open the index.html in your file viewer of choice!
To look at the source code, open it, the CSS file and the Javascript file in a text file editor of choice!

If your plan is to just take a look at functionality, feel free to use the link to the deployed page given below!


## Mockup:
The following images shows the web application's appearance and functionality:

<img src="./assets/images/work-day-planner-filled-out.png" width="750px" alt="home menu of webpage with various sections filled out with activities, consisting of setting up a Minecraft Server and going out to breakfast! ">
<img src="./assets/images/work-day-planner-saved-indicator.png" width="750px" alt="a screenshot showing the SAVED prompt appearing before it shortly disappears, the prompt lets the user know that the input has been saved">
<img src="./assets/images/work-day-planner-empty.png" width="750px" height="1000px" alt="an example of the webpage with all of the sections left empty">

## Changelog:

```
* Updated and adjusted CSS to better represent the project and for accessability concerns.

* Adjusted heading to include a current datetime below the description of the page.

* Added sections for 12 o'clock to 5 o' clock. (Prev. 9 o' clock to 11 o' clock)

* Added color changing functionality based on given time of day: gray for past, red for present, and green for future.

* Added ability to save event inputs to local storage so they persist upon refresh.

* Added notification to show when information is saved!
```

## Credits
<br>
 Editing of code done by myself, <b>Anthony Iacano</b>
 <br>
 <br>
 Javascript Libraries used within the project: <b><i>JQuery, MomentJS</i></b>
 <br>
 <br>
 CSS Framework used within the project: <b><i>Bootstrap</i></b> 
 <br>
 <br>
 Lesson provided by <b>edX Boot Camps LLC.</b>

## Link to Deployed Page

 https://anthony-gg.github.io/work-day-planner/

 ## License

Please reference the **LICENSE.MD** file inside of the repository.

---