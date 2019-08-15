$(document).ready(function() {
  $('#animal').submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
    if (animal === 'parrot') {
      $("#parrot").show();
    }else if (animal ==="duck"){
      $("#duck").show();
    }else if (animal==="chicken")
    $("#chicken").show();
    event.preventDefault();
  });
});
