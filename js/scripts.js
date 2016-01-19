$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var questions = ["q1", "q2", "q3", "q4", "q5"];


    var answers = [];
    questions.forEach(function(question) {
    var userInput = $("input#" + question).val();
      $("." + question).text(userInput);

      answers.push(userInput);

      event.preventDefault();

  });

    if (answers[3] === "True") {
      $(alert("Sunday River"));
     } else {
      var netflix = 0;
      var brazil = 0;
      if (answers[0] === "True") {
        brazil += 1;
      }
      if (answers[2] === "True") {
        brazil += 1;
      }
      if (answers[1] === "True") {
        netflix += 1;
      }
      if (answers[4] === "True") {
        netflix += 1;
      }
      if (brazil > netflix) {
        $(alert("Brazil"));
        }
      else {
        if (netflix >= brazil) {
          $(alert("Netflix and Chill"))
        }
      }
      }



  });

});
