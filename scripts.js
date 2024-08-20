// for better project display UI

$(document).ready(function() {
  // Handle hover to expand
  $('.tblock').hover(function() {
    // Add the 'active' class to expand
    $(this).addClass('active');
  }, function() {
    // Do nothing on hover out; we handle closing with clicks
  });


  // Handle clicks outside of .tblock to collapse it
  $(document).click(function(event) {
    if (!$(event.target).closest('.tblock').length) {
      // Collapse all .tblock elements if the click is outside
      $('.tblock').removeClass('active');
    }
  });
});
