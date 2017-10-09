$(() => {

// console.log('hello');
const $h1 = $('h1');
const $button = $('button');
let $input = $('input[type="text"]');
let $submitButton = $('input[type="submit"]');
// let $userInput = $input.val();
let wordsArray = ['cat', 'hat', 'bat'];


function randomizeLetters() {
  for (var i = 0; i < wordsArray.length; i++) {
  let wordsArraySplit = wordsArray[i].split('');
  wordsArraySplit.sort(function() { return 0.5 - Math.random() });
  let jumbledWord = wordsArraySplit.join('');
  //if the jumbled word is equal to the word in the word word in the word array randomize the letters again.
  if (jumbledWord[i] === wordsArray[i]) {
    randomizeLetters();
    // console.log('it works');
  }
  };
};


$button.on('click', function() {
  randomizeLetters();
});

$submitButton.on('click', function() {
  // let $userInput = $input.val();
  checkAnswer();
  console.log($userInput);
});



function checkAnswer() {
  let $userInput = $input.val();
  //If the first word the user enters into the imput box is the same as the first word in the wordsArray alert 'right answer', and that word dissapears, if it is different alert 'keep trying'.

  // If the contents of the imput box is the same as wordsArray[i], make the word dissapear / display none, alert the user they have got the correct answer, allow the user to move on to the next word.
  if($userInput === $userInput){
    console.log('its working');
  }
}



function resetGame() {
}

function animateWords() {
}









// $("button").click(function(){
//     // console.log('hello');
//     $("h1").animate({
//         left: '250px',
//         // opacity: '0.5',
//         // height: '150px',
//         // width: '150px'
//     });
// });


});
