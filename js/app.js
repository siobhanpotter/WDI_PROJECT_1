$(() => {

// console.log('hello');
const $h1 = $('h1');
const $button = $('button');
let $input = $('input[type="text"]');
let $submitButton = $('input[type="submit"]');
let $userInput = $input.val();
let wordsArray = ['cat', 'hat', 'bat'];
let jumbledWordsArray = [];



function randomizeLetters() {
  let splitWord = wordsArray[0].split('');
  // console.log(splitWord);
  let jumbledWord = splitWord.sort(function() { return 0.5 - Math.random() });
  // console.log(jumbledWord);
  let jumbledWordJoined = jumbledWord.join('');
  // console.log(jumbledWordJoined);
  jumbledWordsArray.push(jumbledWordJoined);
  // console.log(jumbledWordsArray);
};

function randomizeLettersloop() {
  //here is where the checkAnswer would be located, I think.
  for (var i = 0; i < jumbledWordsArray.length; i++) {
    jumbledWordsArray[i]
    randomizeLetters();
    console.log(jumbledWordsArray);
  }
}



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


$button.on('click', function() {
  randomizeLetters();
});

$submitButton.on('click', function(e) {
  e.preventDefault();
  $userInput = $input.val();

  // console.lo g($userInput);
  checkAnswer();
});



function checkAnswer() {
  // let $userInput = $input.val();
  //If the first word the user enters into the imput box is the same as the first word in the wordsArray alert 'right answer', and that word dissapears, if it is different alert 'keep trying'.

  // If the contents of the imput box is the same as wordsArray[i], make the word dissapear / display none, alert the user they have got the correct answer, allow the user to move on to the next word.
  if($userInput === wordsArray[0]) {
    alert('correct answer');
    // console.log(`yay ${wordsArray[0]}`);
  } else {
      alert('keep trying');
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
