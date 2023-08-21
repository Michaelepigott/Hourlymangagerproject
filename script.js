$(document).ready(function (){
// detect save button click
  $('.saveBtn').on('click', function () {
      //get nearby values
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    //save in local storage
    localStorage.setItem(time, value);
    

    //Confirmation message that the save happened
    $('.notification').addClass('show');
      //removes confirmation message after 5s
    setTimeout(function() {
      $('.notification').removeClass('show');
    }, 5000)

});


function hourUpdater() {
  // get current number of hours
  var currentHour = dayjs().subtract(0,'hours').hour();

//loop over time blocks
  $('.time-block').each(function () {

   var blockHour = parseInt($(this).attr('id').split('-')[1]);
  if (blockHour < currentHour) {
     $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
     $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }

  });
}
//call function
hourUpdater();

//check hour periodicly
setInterval(hourUpdater, 100);

//load any saved data from localstorage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


//display current day

$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});