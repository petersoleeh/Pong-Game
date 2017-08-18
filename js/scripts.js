$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = pingpong(number);
      $("#result").text(result);

    });
  });

    for (var i = 1; i < number.length; i++) {
      number[i]
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('pingpong');
      }
      else if (i % 3 === 0) {
        console.log('ping');
      }
      else if (i % 5 === 0) {
        console.log('pong')
      }
      else {
        console.log(i);
      }

};
