$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var pointsC = 0;
    var pointsJ = 0;
    var pointsP = 0;

    var large = $("#large").val();
    var business = $("#business").val();
    var android = $("#android").val();
    var versatility = $("#versatility").val();
    var language = $("#language").val();

    var name = $("#name").val();
    $(".name").text(name);

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
    }
    else if (language === "Java") {
      pointsJ += 3;
    }
    else {
      pointsP += 3;
    }

    $(".points").empty();
    $(".points").append("<p>C# points: " + pointsC + "</p>");
    $(".points").append("<p>Java points: " + pointsJ + "</p>");
    $(".points").append("<p>PHP points: " + pointsP + "</p>");

    $(".points").addClass("well");

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

    $(".btn").click(function(){
      $(".result").hide();
      $(".formOne").show();
    });

  });
});
