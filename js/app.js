$(() => {

// console.log('hello');
const $h1 = $('h1');
const $playButton = $('.playButton');
let $input = $('input[type="text"]');
let $submitButton = $('input[type="submit"]');
let $userInput = $input.val();
let wordsArray = ['cat', 'hat', 'bat'];
let jumbledWordsArray = [];
let score = 0;
let $fallingWord = $('#fallingWord');
let $score = $('.score');
let timer = 10;
let $timeContainer = $('.timer');
console.log($fallingWord.html());



function randomizeLetters() {
  let splitWord = wordsArray[0].split('');
  // console.log(splitWord);
  let jumbledWord = splitWord.sort(function() { return 0.5 - Math.random() });
  // console.log(jumbledWord);
  let jumbledWordJoined = jumbledWord.join('');
  // console.log(jumbledWordJoined);
  jumbledWordsArray.push(jumbledWordJoined);
  console.log(jumbledWordsArray);
};

function randomizeLettersloop() {
  //here is where the checkAnswer would be located, I think.
  for (var i = 0; i < jumbledWordsArray.length; i++) {
    jumbledWordsArray[i].randomizeLetters();
    console.log(jumbledWordsArray);
  }
};

randomizeLettersloop();



//BELOW A RANDOMIZE LETTERS LOOP WHICH DIDNT WORK, I WAS TRYING TO LOOP THROUGH THE ENTIRE WORDS ARRAY RANDOMISING THE LETTERS IN EACH WORD

// function randomizeLetters() {
//   for (var i = 0; i < wordsArray.length; i++) {
//   let wordsArraySplit = wordsArray[i].split('');
//   wordsArraySplit.sort(function() { return 0.5 - Math.random() });
//   let jumbledWord = wordsArraySplit.join('');
//   //if the jumbled word is equal to the word in the word word in the word array randomize the letters again.
//   jumbledWordsArray.push(jumbledWord);
//   console.log(jumbledWordsArray);
//   // if (jumbledWord[i] === wordsArray[i]) {
//   //   randomizeLetters();
//   //   // console.log('it works');
//   // }
//   };
// };

//////////////////////////////////////////////////NEED THIS (BELOW)////////////////////
// $playButton.one('click', function() {
//   randomizeLetters();
//   //add the jumbledWordsArray to #fallingWord
//   $fallingWord.html(jumbledWordsArray);
//   //make the word fall from the top of the screen.
// });



$playButton.one('click',function(){
    // console.log('hello');
    randomizeLetters();
    countdown();
    $fallingWord.html(jumbledWordsArray);
    $fallingWord.animate({top: '+580px'}, 9000);
    $fallingWord.animate({opacity: '0'}, 1);
});


$submitButton.on('click', function(e) {
  e.preventDefault();
  $userInput = $input.val();
  // console.lo g($userInput);
  checkAnswer();
  console.log(score);
  $score.html(score);
  // if (score === score +1){
  //   $fallingWord.animate({opacity: '0'}, 1);
  // }
});


//NEED FALLING WORD TO CONTAIN JUMBLED WORDS ARRAY


function checkAnswer() {
  // let $userInput = $input.val();
  //If the first word the user enters into the imput box is the same as the first word in the wordsArray alert 'right answer', and that word dissapears, if it is different alert 'keep trying'.

  // If the contents of the imput box is the same as wordsArray[i], make the word dissapear / display none, alert the user they have got the correct answer, allow the user to move on to the next word.
  if($userInput === wordsArray[0]) {
    // alert('correct answer');
    $fallingWord.animate({opacity: '0'}, "fast");
    score ++;
    // console.log(`yay ${wordsArray[0]}`);
    //if the user answer is correct display none for words array[0]
    //if the user answer is correct randomize the next word
    //"                            " then check the answer of the next word.
  } else {
      alert('keep trying');
      score --;
    }

}

function countdown() {
  timer--;
  $timeContainer.html(timer);

  if (timer <= 0) {
    clearInterval(interval);
    gameOver();
  }
}



// function reset() {
//   score = 0;
//   timer = 10;
//
//   $score.html(score);
//   $timeContainer.html(timer);
// }

function resetGame() {
}

function animateWords() {


}












});
