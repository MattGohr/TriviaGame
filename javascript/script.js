//  Interval Demonstration
//  Set our number counter to 100.
var secRemaining = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;


//  This will hold the answers objects
var triviaSets = [
  {
    question : "Who was the first fighter to wear UFC gold in two different weight classes?",
    option:[
      {
        text: "Randy.",
        correct: false},
      {
        text: "There are 365 days in a year.",
        correct: true},
      {
        text: "There are 42 ounces in a pound.",
        correct: false},
      {
        text: "The Declaration of Independence was created in 1745.",
        answer: false}
  ]},
  {
    question : "Who was the first fighter to wear UFC gold in two different weight classes?",
    option:[
      {
        text: "The sky is GREEN.",
        correct: false},
      {
        text: "There are 365 days in a year.",
        correct: true},
      {
        text: "There are 42 ounces in a pound.",
        correct: false},
      {
        text: "The Declaration of Independence was created in 1745.",
        correct: false}
  ]},
  {
    question : "Who was the first fighter to wear UFC gold in two different weight classes?",
    option:[
      {
        text: "The sky is yellow.",
        correct: false},
      {
        text: "There are 365 days in a year.",
        correct: true},
      {
        text: "There are 42 ounces in a pound.",
        correct: false},
      {
        text: "The Declaration of Independence was created in 1745.",
        correct: false}
  ]},
  {
    question : "Who was the first fighter to wear UFC gold in two different weight classes?",
    option:[
      {
        text: "The sky is yellow.",
        correct: false},
      {
        text: "There are 365 days in a year.",
        correct: true},
      {
        text: "There are 42 ounces in a pound.",
        correct: false},
      {
        text: "The Declaration of Independence was created in 1745.",
        correct: false}
  ]}
];

console.log(triviaSets[1].question);
console.log(triviaSets[1].option[0].text);
console.log(triviaSets[1].option[0].correct);
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
    // alert("Time Up!");
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
