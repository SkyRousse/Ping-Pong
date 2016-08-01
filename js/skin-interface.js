$(document).ready(function() {
  $('#skin').submit(function(event) {
    event.preventDefault();
    var skin = $('#skin option:selected').text();
    $('#skin').hide();
    $('#skin-output').prepend('<p>Your skin is: ' + skin + '</p>');
  });
});
