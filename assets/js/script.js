var saveButtonEl = $(".saveBtn");
// Display today's time
var todaysTime = moment().format("dddd, MMMM, Do");
var todaysDisplay = document.getElementById("currentDay");

todaysDisplay.textContent = todaysTime;



function timeSlots() {
    var currentHour = moment().hours();
    $(".timeBlocks").each(function() {
        var todaysTime = parseInt($(this).attr('id'));

        if (todaysTime > currentHour) {
            $(this).addClass('future');
        }  else if (todaysTime < currentHour) {
            $(this).addClass('past');
        }  else {
            $(this).addClass('present');
        }
    })
};

// save text area when triggerd on click event using localStorage
saveButtonEl.on('click', function() {
    var hoursEl = $(this).siblings(".hour").text();
    var taskEl = $(this).siblings(".task").val();

    localStorage.setItem(hoursEl, taskEl);
});

// save items via local storage 
function savedTasks() {
    // target each of the hours on the time-blocks
    $(".hour").each(function() {
        var hoursEl = $(this).text();
        var getEl = localStorage.getItem(hoursEl);

        if (getEl !== null) {
            $(this).siblings(".task").val(getEl);
        }
    });
}

// call functions
timeSlots();
savedTasks();