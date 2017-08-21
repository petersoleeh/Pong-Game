//business logic back end
function pingpong(number) {
  var result = [];
  for (var i = 1; i <= number; i++) {
  console.log (result);

    if ((i % 3 === 0 )&& (i % 5 === 0)) {
      result.push('pingpong');
    }
    else if (i % 3 === 0) {
      result.push('ping');
    }
    else if (i % 5 === 0) {
      result.push('pong')
    }
    else {
      result.push(i);
    }
    console.log (result);
  };
  return result;
};


// user interface logic front end
$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());
      var result = pingpong(number);
      console.log (pingpong(number));
      $("#result").text(result);

    });
  });
