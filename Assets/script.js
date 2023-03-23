$(function () {
    // Add a click event listener to the save button to save user input to local storage.
    $(".saveBtn").on("click", function() {
    // Get the id of the parent time-block element
    var timeBlockId = $(this).parent().attr("id");
    // Get the value of the description textarea element
    var description = $(this).siblings(".description").val();
    // Save the description to local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, description);
    });
    
    // Apply the past, present, or future class to each time block based on the current time.
    var currentHour = parseInt(dayjs().format("H"));
    $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    if (hour < currentHour) {
    $(this).addClass("past");
    } else if (hour === currentHour) {
    $(this).addClass("present");
    } else {
    $(this).addClass("future");
    }
    });
    
    // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
    $(".description").each(function() {
    var timeBlockId = $(this).parent().attr("id");
    var description = localStorage.getItem(timeBlockId);
    if (description !== null) {
    $(this).val(description);
    }
    });
    
    // Display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
    });