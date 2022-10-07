# Calendar Scheduler

## Deployable Link

https://elduderino23.github.io/apparao-vasu-calender/

## Goal
The task was to make a calendar planner that dynamically showed when a time slot was in the past, present or future with the colors grey red and green in their respective parts. Another part of the task was to display the current time on the front of the page.

## Technology Use
  - Javascript
  - HTML
  - CSS
  - Bootstrap
  - JQuery
  - Moment.js
  - VS Code
  - Git Bash 
  - GitHub

## Execution
The plan of attack was started with restructuring the html in order to have a basic set up. Luckily with the help of Bootstrap, it was generally easy to set up the bare bones structure necessary to accommodate elements crucial to sculpt with JQuery. After the necessary classes and ids were put in the right spot, the next phase, and more difficult part, of the planner was to style the html using JQuery.

The first task in making the calendar planner work was to show the time in real time. With the help of Moment.js, it was possible to create a function that dynamically shifted the time and date in real time. 

The function in order to make this happen is shown below:

```Javascript
var realTime = function () {
    var currentTime = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
    $("#currentDay").text(currentTime)
}
```
currentDay was the id in the HTML that controlled the date so adding a function that calculated the current time, in the form of a variable aptly named currentTime, display the time in real time. The interval down below set the time for every 1000 millisecond, one second,:

```Javascript
setInterval(realTime, 1000)
```

The second part, and the hardest part, of styling the javascript with JQuery was syncing the color code, red being present; green being future; grey being past, with the actual time. In order to accomplish this herculean task, the first step was to make a variable within the realTime function that corresponded the time with the colors. Rather than do a standard 12 hour cycle, the choice to do "military time", 24 hour cycle, as the basis for color control made it easier for the function to recognize what color for what time. 

The set up is shown below:

```Javascript
var currentHour = moment().format("HH")
```

The tricky part was to coordinate the time with the colors. In order to achieve this, an if, else if, and else statement had to be made within each if statement was the "currentHour > past" condition. This was so that function could recognize that it was before the time slot and assign the color grey for past. the else if had the condition of "currentHour == 9" the double equal signs signifies that the function want the value only. else was left behind because the other two laid the conditions already so the third was known. In between each statement was the correct syntax of JQuery of adding a class and removing a class. Since the past, present, and future class was hard codded into the HTML, it was necessary to remove certain classes for different parts of the time, example being remove past and future class in order to let red show for present.

the following if, else if, and else statement combo perfectly encapsulates the point:

```Javascript
if(currentHour > 9){
  $('#description-9').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 9){
  $('#description-9').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-9').addClass('future').removeClass('past').removeClass('present')
```

## Result

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-challenge-demo.gif)
