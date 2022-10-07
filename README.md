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
