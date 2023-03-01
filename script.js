var currentDate = dayjs().format("dddd, MMMM D, YYYY");
var currentTime = dayjs().format("h:mm a");
// console.log(currentDate);
$("#currentDay").text(currentDate);

// function showCurrentDate() {
//   var currentDayEl = document.getElementById("currentDay");
//   currentDayEl.textContent = currentDate;
//   currentDayEl.appendChild(currentDate);
// }
// showCurrentDate();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// $(function () {});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

var workdayHours = [
  {
    hour: 9,
    display: "9AM",
  },
  {
    hour: 10,
    display: "10AM",
  },

  {
    hour: 11,
    display: "11AM",
  },
  {
    hour: 12,
    display: "12PM",
  },
  {
    hour: 13,
    display: "1PM",
  },
  {
    hour: 14,
    display: "2PM",
  },
];

function showCurrentDate() {
  // use Day.js to determine the date
  var currentHour = 9;
  // use jQuery to update the HTML with that date

  //call showTimeBlocks
  //showTimeBlocks(currentHour);
}

function showTimeBlocks(currentHour) {
  var timeBlockHTML = "";

  for (var i = 0; i < hours.length; i++) {
    var timeBlock = hours[i];
    var className = getClassName(currentHour, timeBlock.hour);

    timeBlockHTML += ` 
    <div id="hour-${timeBlock.hour}" class="row time-block ${className}">
      <div class="col-2 col-md-1 hour text-center py-3">${timeBlock.display}</div>
      <textarea id="text-${timeBlock.hour}" class="col-8 col-md-10 description" rows="3"></textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save" onclick="saveEvent(${timeBlock.hour})">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `;
  }

  $("#time-block-container").html(timeBlockHTML);

  showSavedEvents();
}

function getClassName(currentHour, timeBlockHour) {
  if (currentHour === timeBlockHour) {
    return "present";
  } else if (currentHour < timeBlockHour) {
    return "past";
  } else if (currentHour > timeBlockHour) {
    return "future";
  }
}

function saveEvent(timeBlockHour) {
  // get data from user entry from html
  var eventID = `text-${timeBlockHour}`;
  var event = $(`#${eventID}`).val();

  //save to localstorage

  //showSavedEvents()
}

function showSavedEvents() {
  for (var i = 0; i < hours.length; i++) {
    var timeBlock = hours[i];
    //for each hour retrieve event from local storage
    var eventID = `text-${timeBlock.hour}`;
    var savedEvent = localStorage.getItem(eventID) || "";
    //update html with saved event
    $(`#${eventID}`).val(savedEvent);
  }
}
