//  Interval Demonstration
//  Set our number counter to 100.
var secRemaining = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//set first trivia set num
var triviaNum = 0;

//count of corect variale
var countCorrect = 0,
  score;

//  This will hold the answers objects
var triviaSets = [{
    question: "Who was the first fighter to wear UFC gold in two different weight classes?",
    option: [{
        text: "Randy Couture",
        correct: true
      },
      {
        text: "Connor McGregor",
        correct: false
      },
      {
        text: "BJ Penn",
        correct: false
      },
      {
        text: "Dana White",
        answer: false
      }
    ]
  },
  {
    question: "Who was the first UFC champion?",
    option: [{
        text: "BJ Penn",
        correct: false
      },
      {
        text: "Royce Gracie",
        correct: true
      },
      {
        text: "Conor McGregor",
        correct: false
      },
      {
        text: "Matt Hughes",
        correct: false
      }
    ]
  },
  {
    question: "Logest winning streak?",
    option: [{
        text: "Conor McGregor",
        correct: false
      },
      {
        text: "Matt Hughes",
        correct: false
      },
      {
        text: "Anderson Silva.",
        correct: true
      },
      {
        text: "Urijah Faber",
        correct: false
      }
    ]
  },
  {
    question: "What is Big John McCarthy's favorite pre-fight catch phrase",
    option: [{
        text: "Let's get it on!",
        correct: true
      },
      {
        text: "Fight!",
        correct: false
      },
      {
        text: "Let's go!",
        correct: false
      },
      {
        text: "Let's get ready to rumble!",
        correct: false
      }
    ]
  }
];

//load next question
//lots of if statments here I think it's messy would like some sugestions on how to make this cleaner
function pupulateQuestions(clickButton) {

  //first run or time ran out
  if (triviaSets.length === 0 || clickButton === false) {
    //skipp
  }

  //not first and not last
  else if (triviaNum > 0) {

    //get the number of the ID cicked and turn it into a number
    var optionId = $(this).attr('id');
    optionId = optionId.substr(optionId.length - 1, 1);
    optionId = parseInt(optionId);

    var curCorrect = triviaSets[triviaNum - 1].option[optionId].correct

    //log correct answer
    if (curCorrect === true) {
      countCorrect++;
    }

  }

  //last qestion
  if (triviaSets.length === triviaNum) {

    //if timer ran out then skip
    if (clickButton === false) {
      //skip
    }
    else {
      //get the number of the ID cicked and turn it into a number
      var optionId = $(this).attr('id');
      optionId = optionId.substr(optionId.length - 1, 1);
      optionId = parseInt(optionId);

      var curCorrect = triviaSets[triviaNum - 1].option[optionId].correct

      //log correct answer
      if (curCorrect === true) {
        countCorrect++;
      }
    }

    //calculate score
    score = Math.floor((countCorrect / triviaSets.length) * 100);

    //remove questions
    $("#answers-row").children().remove();

    //remove Timer
    $("#timer").children().remove();
    $("#timer").remove();

    //your score is
    $("#question").text("You're score is!")
    $("#question").css('font-size', '24px');

    var a = $("<p>");
    a.addClass('score');
    a.text(score + "%")

    $("#answers-row").append(a);

    clearInterval(intervalId);

  }
  else {

    //display question
    $("#question").text(triviaSets[triviaNum].question)

    //print options
    for (var i = 0; i <= 3; i++) {
      var curOption = "#option-" + i;
      var curText = triviaSets[triviaNum].option[i].text;
      $(curOption).text(curText);
    }

    //next trivia number
    triviaNum++;

    //reset timer
    runTimer();

    console.log("count correct : " + countCorrect);
  }

}

//  The run function sets an interval
//  that runs the decrement function once a second.
function runTimer() {

  //reset timer to 30 secs
  secRemaining = 30

  //clear interval
  clearInterval(intervalId);

  //  Show the number in the #show-number tag.
  $("#counter").text(secRemaining);

  //start the timer
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  secRemaining--;

  //  Show the number in the #show-number tag.
  $("#counter").text(secRemaining);

  //  Once number hits zero...
  if (secRemaining === -1) {

    //  ...run the stop function.
    stop();

  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);

  //load next question
  pupulateQuestions(false);
}

function start() {

  $("#start-container").children().hide();
  //hide start container
  $("#start-container").hide();
  console.log("start ran");

  //show  trivia container
  $("#trivia-container").children().show();
  $("#trivia-container").show();

  //show first question
  //run the questions loop
  pupulateQuestions();
}

//hide trivia container
$("#trivia-container").children().hide();
$("#trivia-container").hide();

//  When question answered next question
$(".options").on("click", pupulateQuestions);

//  When question answered next question
$("#start-btn").on("click", start);
