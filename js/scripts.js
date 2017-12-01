$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var pointsC = 0;
    var pointsJ = 0;
    var pointsP = 0;
    var preference = "";

    var large = $("#large").val();
    var business = $("#business").val();
    var android = $("#android").val();
    var versatility = $("#versatility").val();
    var language = $("#language").val();


    if (large === "yes") {
      pointsC += 2;
    }
    if (business === "yes") {
      pointsC += 3;
    }
    if (android === "yes") {
      pointsJ += 5;
    }
    if (versatility === "yes") {
      pointsP += 5;
    }

    if (language === "C#") {
      pointsC += 3;
      preference = "#result1";
    }
    else if (language === "Java") {
      pointsJ += 3;
      preference = "#result2";
    }
    else {
      pointsP += 3;
      preference = "#result3";
    }

    $(".result").append("<p>C# points: " + pointsC + "</p>");
    $(".result").append("<p>Java points: " + pointsJ + "</p>");
    $(".result").append("<p>PHP points: " + pointsP + "</p>");

    if ((pointsC > pointsJ) && (pointsC > pointsP)) {
      $("#result1").show();
      $(".formOne").hide();
    }
    else if ((pointsJ > pointsC) && (pointsJ > pointsP)) {
      $("#result2").show();
      $(".formOne").hide();
    }
    else if ((pointsP > pointsJ) && (pointsP > pointsC)) {
      $("#result3").show();
      $(".formOne").hide();
    }
    else {
      $("#result4").show();
      $(".formOne").hide();
    }

  });
});
