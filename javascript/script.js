//  Interval Demonstration
//  Set our number counter to 100.
var secRemaining = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  variable that will have all question
var questions = [
"Who was the first fighter to wear UFC gold in two different weight classes?",
"What is the name of the company that owns the UFC?",
"How did Tim Sylvia lose against Frank Mir?",
"What is Big John McCarthy's famous fighting phrase?",
"Who holds the record for consecutive wins inside the Octagon?"
];


//  This will hold the answers objects
var answerSets = {
  set1: {
    q1: ["The sky is blue.", false],
    q2: ["There are 365 days in a year.", false],
    q3: ["There are 42 ounces in a pound.", false],
    q4: ["The Declaration of Independence was created in 1745.", true]
  },
  set2: {
    q1: ["The sky is blue.", false],
    q2: ["There are 365 days in a year.", false],
    q3: ["There are 42 ounces in a pound.", false],
    q4: ["The Declaration of Independence was created in 1745.", true]
  },
  set3: {
    q1: ["The sky is blue.", false],
    q2: ["There are 365 days in a year.", false],
    q3: ["There are 42 ounces in a pound.", false],
    q4: ["The Declaration of Independence was created in 1745.", true]
  },
  set4: {
    q1: ["The sky is blue.", false],
    q2: ["There are 365 days in a year.", false],
    q3: ["There are 42 ounces in a pound.", false],
    q4: ["The Declaration of Independence was created in 1745.", true]
  }
};

//  When question answered need to stop
$(".question-answer").on("click", stop);

//  When the resume button gets clicked, execute the run function.
$("#resume").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  secRemaining--;

  //  Show the number in the #show-number tag.
  $("#counter").text(secRemaining);


  //  Once number hits zero...
  if (secRemaining === 0) {

    //  ...run the stop function.
    stop();

    //  Once Loose then display on screen
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

//  Execute the run function.
run();
