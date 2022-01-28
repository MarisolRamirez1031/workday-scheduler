// Display today's time
var todaysTime = moment().format("dddd, MMMM, Do");
var todaysDisplay = document.getElementById("currentDay");
var saveButtonEl = $(".saveButton");

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

// save text area when triggerd on click event
saveButtonEl.on('click', funciton() {
    var hoursEl = $(this).siblings(".hour").text();
    var taskEl = $(this).siblings(".task").val();

    localStorage.setItem(hoursEl, taskEl);
});


// save items
function savedItems() {
    $('')
}


timeSlots();