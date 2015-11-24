$(function() {

  $('button').on('click',getData);

  function getData() {
  $.ajax({
    url: '/balance'
  }).done(function(data) {
    $('button').fadeOut(1000, function() {
      $(this).html(data + '<br><br> Click again for another chance at success!');
    }).fadeIn(1000);
  });
	}
});
