
$( document ).ready(function() {

    
    // Determines button clicked via id
    var myFunction= function (id) {
      let v = $("#result").val();
      v = v + id;
      console.log(v);
      $("#result").val(v);
    }

    // Clears calculator input screen
    var clearScreen = function () {
      $("#result").val("");
    }

    // Calculates input values
    var calculate = function () {
      try {
        console.log("evaluating: " + $("#result").val());
        let exp = $("#result").val();
        var res = eval(exp);
        console.log("result: " + res);
        $("#result").val(res);
      } catch(err){
          $("#result").val("Error");
        }
    }

    $(".btn-numerals").click(function() {
        //console.log($(this).text());
        myFunction($(this).text());
    });

    $("#equals").click(function() {
       //console.log("equals...");
       calculate();
    });

    $(".btn-secondary").click(function() {
      clearScreen();
    });

    
});




