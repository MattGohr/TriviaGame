//  Interval Demonstration
//  Set our number counter to 100.
var secRemaining = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//set first trivia set num
var triviaNum = 0;

//count of corect variale
countCorrect = 0;

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
function pupulateQuestions() {



  //if first run skip step
  if (triviaNum > 0) {

    //get the number of the ID cicked and turn it into a number
    var optionId = $(this).attr('id');
    optionId = optionId.substr(optionId.length - 1, 1);
    optionId = parseInt(optionId);

    //Check answer true or false
    if (triviaSets[triviaNum].option[optionId].correct === true){
      countCorrect++;
    }

  }


  //display question
  $("#question").text(triviaSets[triviaNum].question)

  //print options
  for (var i = 0; i <= 3; i++){
    var curOption = "#option-"+i;
    var curText = triviaSets[triviaNum].option[i].text;
    $(curOption).text(curText);
  }

  //next trivia number
  triviaNum++;

  //reset timer
  runTimer();

  console.log("count correct : " + countCorrect);

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

  //log invalid answer

  //load next question
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
