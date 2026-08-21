$(document).ready(function () {
  // window.alert("ready!");

  var barnacle = 0;
  var fungus = 0;
  var piggyback = 0;
  var hippoeye = 0;
  var trex = 0;
  var tongue = 0;
  var hyperparasite = 0;

  $(".quizResult").hide();
  $(".question").hide();
  $("#question1").show();

  // Question 1
  //scuba
  $("#q1a1").click(function () {
    barnacle += 2;
    hippoeye += 1;
    tongue += 2;

    $("#question1").hide(500);
    $("#question2").show(500);
  });

  //glamping
  $("#q1a2").click(function () {
    piggyback += 2;
    fungus += 1;
    hyperparasite += 1;
    $("#question1").hide(500);
    $("#question2").show(500);
  });

  //rainforest
  $("#q1a3").click(function () {
    piggyback += 1;
    fungus += 2;
    $("#question1").hide(500);
    $("#question2").show(500);
  });

  //rafting
  $("#q1a4").click(function () {
    piggyback += 1;
    hippoeye += 2;
    tongue += 1;
    $("#question1").hide(500);
    $("#question2").show(500);
  });

  //safari
  $("#q1a5").click(function () {
    hippoeye += 1;
    trex += 2;
    hyperparasite += 1;
    $("#question1").hide(500);
    $("#question2").show(500);
  });

  //cruise
  $("#q1a6").click(function () {
    hippoeye += 1;
    tongue += 2;
    barnacle += 1;
    piggyback += 1;
    $("#question1").hide(500);
    $("#question2").show(500);
  });

  //backpack
  $("#q1a7").click(function () {
    hyperparasite += 2;
    trex += 1;
    $("#question1").hide(500);
    $("#question2").show(500);
  });

  // Question 2
  //lobsta
  $("#q2a1").click(function () {
    barnacle += 2;
    tongue += 1;
    $("#question2").hide(500);
    $("#question3").show(500);
  });

  //tapas
  $("#q2a2").click(function () {
    piggyback += 3;
    hippoeye += 1;
    $("#question2").hide(500);
    $("#question3").show(500);
  });

  //spaghetti
  $("#q2a3").click(function () {
    fungus += 2;
    tongue += 1;
    $("#question2").hide(500);
    $("#question3").show(500);
  });

  //vegan
  $("#q2a4").click(function () {
    hippoeye += 2;
    hyperparasite += 1;
    piggyback += 1;
    $("#question2").hide(500);
    $("#question3").show(500);
  });

  //steak
  $("#q2a5").click(function () {
    trex += 4;
    tongue += 1;
    $("#question2").hide(500);
    $("#question3").show(500);
  });

  //sushi
  $("#q2a6).click(function () {
    barnacle += 2;
    tongue += 2;
    hippoeye += 1;
  $("question2").hide(500);
  $("question3").show(500);
});

  //candy
  $("#q2a7").click(function () {
    hyperparasite += 4;
    fungus += 1;
    $("#question2").hide(500);
    $("#question3").show(500);
  });

  // Question 3
  //listen
  $("#q3a1").click(function () {
    hyperparasite += 5;
    hippoeye += 3;
    $("#question3").hide(500);
    $("#question4").show(500);
  });

  //answer silly
  $("#q3a2").click(function () {
    piggyback += 3;
    $("#question3").hide(500);
    $("#question4").show(500);
  });

  //answer troll
  $("#q3a3").click(function () {
    fungus += 4;
    barnacle += 2;
    $("#question3").hide(500);
    $("#question4").show(500);
  });

  //answer angry
  $("#q3a4").click(function () {
    trex += 4;
    tongue += 2;
    $("#question3").hide(500);
    $("#question4").show(500);
  });

  //no answer
  $("#q3a5").click(function () {
    piggyback += 2;
    fungus += 1;
    $("#question3").hide(500);
    $("#question4").show(500);
  });

  // Question 4
  //take first
  $("#q4a1").click(function () {
    trex += 4;
    $("#question4").hide(500);
    $("#question5").show(500);
  });

  //take w conscience
  $("#q4a2").click(function () {
    barnacle += 5;
    tongue += 3;
    $("#question4").hide(500);
    $("#question5").show(500);
  });

  //take plus friend
  $("#q4a3").click(function () {
    hyperparasite += 4;
    hippoeye += 2;
    $("#question4").hide(500);
    $("#question5").show(500);
  });

  //take tootsie
  $("#q4a4").click(function () {
    hyperparasite += 3;
    barnacle += 1;
    $("#question4").hide(500);
    $("#question5").show(500);
  });

  //don't take
  $("#q4a5").click(function () {
    piggyback += 2;
    fungus += 2;
    $("#question4").hide(500);
    $("#question5").show(500);
  });

  // Question 5
  //ursula spa
  $("#q5a1").click(function () {
    barnacle += 5;
    hippoeye += 3;
    $("#question5").hide(500);
    $("#question6").show(500);
  });

  //joker
  $("#q5a2").click(function () {
    piggyback += 5;
    $("#question5").hide(500);
    $("#question6").show(500);
  });

  //hannibal
  $("#q5a3").click(function () {
    fungus += 5;
    tongue += 6;
    $("#question5").hide(500);
    $("#question6").show(500);
  });

  //cruella
  $("#q5a4").click(function () {
    hippoeye += 4;
    barnacle += 2;
    $("#question5").hide(500);
    $("#question6").show(500);
  });

  //voldemort
  $("#q5a5").click(function () {
    trex += 8;
    fungus += 3;
    $("#question5").hide(500);
    $("#question6").show(500);
  });

  //scar
  $("#q5a6").click(function () {
    hyperparasite += 5;
    piggyback += 2;
    $("#question5").hide(500);
    $("#question6").show(500);
  });

  // Question 6
  //netflix
  $("#q6a1").click(function () {
    barnacle += 3;
    piggyback += 5;
    $("#question6").hide(500);
    $("#question7").show(500);
  });

  //comfort food
  $("#q6a2").click(function () {
    barnacle += 5;
    $("#question6").hide(500);
    $("#question7").show(500);
  });

  //read
  $("#q6a3").click(function () {
    fungus += 5;
    tongue += 1;
    $("#question6").hide(500);
    $("#question7").show(500);
  });

  //creative
  $("#q6a4").click(function () {
    hippoeye += 4;
    fungus += 3;
    $("#question6").hide(500);
    $("#question7").show(500);
  });

  //party
  $("#q6a5").click(function () {
    trex += 6;
    tongue += 2;
    hyperparasite += 3;
    $("#question6").hide(500);
    $("#question7").show(500);
  });

  //exercise
  $("#q6a6").click(function () {
    hyperparasite += 6;
    trex += 3;
    piggyback += 1;
    $("#question6").hide(500);
    $("#question7").show(500);
  });

  // Question 7
  //nurse
  $("#q7a1").click(function () {
    barnacle += 8;
    hippoeye += 2;
    $("#question7").hide(500);
    $("#question8").show(500);
  });

  //travel
  $("#q7a2").click(function () {
    piggyback += 10;
    $("#question7").hide(500);
    $("#question8").show(500);
  });

  //scientist
  $("#q7a3").click(function () {
    fungus += 10;
    tongue += 1;
    $("#question7").hide(500);
    $("#question8").show(500);
  });

  //perform
  $("#q7a4").click(function () {
    hippoeye += 8;
    fungus += 3;
    hyperparasite += 5;
    $("#question7").hide(500);
    $("#question8").show(500);
  });

  //ceo
  $("#q7a5").click(function () {
    trex += 6;
    tongue += 3;
    fungus += 1;
    $("#question7").hide(500);
    $("#question8").show(500);
  });

  //poli
  $("#q7a6").click(function () {
    tongue += 10;
    trex += 3;
    fungus += 1;
    $("#question7").hide(500);
    $("#question8").show(500);
  });

  //ngo
  $("#q7a7").click(function () {
    hyperparasite += 10;
    hippoeye += 3;
    $("#question7").hide(500);
    $("#question8").show(500);
  });

  // Question 8
  //loveable
  $("#q8a1").click(function () {
    barnacle += 6;
    hippoeye += 2;
    hyperparasite += 4;
    $("#question8").hide(500);
    $("#question9").show(500);
  });

  //loyal
  $("#q8a2").click(function () {
    piggyback += 3;
    $("#question8").hide(500);
    $("#question9").show(500);
  });

  //creative
  $("#q8a3").click(function () {
    fungus += 5;
    $("#question8").hide(500);
    $("#question9").show(500);
  });

  //adventurous
  $("#q8a4").click(function () {
    trex += 6;
    fungus += 1;
    piggyback += 2;
    $("#question8").hide(500);
    $("#question9").show(500);
  });

  //Witty
  $("#q8a5").click(function () {
    tongue += 8;
    fungus += 3;
    $("#question8").hide(500);
    $("#question9").show(500);
  });

  //kind
  $("#q8a6").click(function () {
    hyperparasite += 10;
    barnacle += 5;
    $("#question8").hide(500);
    $("#question9").show(500);
  });

  // Question 9
  //devoted and loyal
  $("#q9a1").click(function () {
    barnacle += 5;
    piggyback += 3;
    hippoeye += 3;
    $("#question9").hide(500);
    $("#question10").show(500);
  });

  //play crowd
  $("#q9a2").click(function () {
    fungus += 5;
    trex += 3;
    $("#question9").hide(500);
    $("#question10").show(500);
  });

  //fun fiery
  $("#q9a3").click(function () {
    trex += 10;
    fungus += 2;
    $("#question9").hide(500);
    $("#question10").show(500);
  });

  //romantic
  $("#q9a4").click(function () {
    tongue += 8;
    barnacle += 3;
    hyperparasite += 3;
    $("#question9").hide(500);
    $("#question10").show(500);
  });

  //triangle
  $("#q9a5").click(function () {
    trex += 6;
    fungus += 3;
    $("#question9").hide(500);
    $("#question10").show(500);
  });

  // Question 10
  //parking
  $("#q10a1").click(function () {
    barnacle += 5;
    tongue += 2;
    $("#question10").hide(500);
    calculateHighest();
  });

  //joyride
  $("#q10a2").click(function () {
    piggyback += 3;
    tongue += 3;
    $("#question10").hide(500);
    calculateHighest();
  });

  //graffiti
  $("#q10a3").click(function () {
    hippoeye += 6;
    fungus += 6;
    $("#question10").hide(500);
    calculateHighest();
  });

  //poop
  $("#q10a4").click(function () {
    trex += 10;
    hyperparasite += 5;
    $("#question10").hide(500);
    calculateHighest();
  });

  function calculateHighest() {
    var scores = {
      fungus: fungus,
      trex: trex,
      hyperparasite: hyperparasite,
      barnacle: barnacle,
      tongue: tongue,
      piggyback: piggyback,
      hippoeye: hippoeye
    };

    var maxScore = Math.max.apply(null, Object.values(scores));
    var winners = Object.keys(scores).filter(function (key) {
      return scores[key] === maxScore;
    });

    // If two outcomes tie, choose fairly between the tied highest scores.
    var winner = winners[Math.floor(Math.random() * winners.length)];
    $("#" + winner + "Result").show(500);
    $("#restartQuiz").show();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  $("#restartQuiz").hide().click(function () {
    window.location.reload();
  });

});
