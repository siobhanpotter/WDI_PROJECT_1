
$(setup);

let $screen;
// let $wordContainer;
let $playButton;
let $input;
let $userInput;
let $score;
let $submitButton;
let score = 0;
let word;
let wordCounter = 0;
let $resetButton;
let startCreatingWords;
let startCreatingWordsL2;
// let $resetPage;
let counter = 5000;
let $welcome;
let $menuContainer;
let $x;


const wordsArray        = ['cat', 'tree', 'house', 'apple', 'garden', 'pizza', 'italy'];
const randomWordArray   = [];

function setup() {
  $submitButton = $('.submit');
  $screen = $('.screen');
  // $wordContainer = $('.word-container');
  $playButton = $('.playButton');
  $input = $('input[type="text"]');
  $userInput = $input.val();
  $score = $('.score');
  $resetButton = $('.resetButton');
  // $resetPage = $('.resetPage');
  $welcome = $('.welcome');
  $x = $('.x');

  //PLAY BUTTON - FOCUS ON INPUT, START THE CHAIN OF EVENTS + SPEED UP AS THE GAME GOES ON
  $playButton.one('click', function() {
    inputFocus();
    pickWord();
    startGame();
    setInterval(decreaseCounter, 500);
  });

  //SUBMIT BUTTON - PREVENT AUTO REFRESH, GET VALUE OF USERS ANSWER, CHECK ANSWER AGAINST ORIGINAL WORD, CLEAR INPUT
  $submitButton.on('submit', function(e) {
    e.preventDefault();
    $userInput = $input.val();
    checkAnswer();
    $input.val('');
  });

  //RESET BUTTON - RESET GAME + CLEAR INTERVAL FOR LEVEL ONE AND LEVEL 2.
  $resetButton.one('click', function(){
    reset();
    clearInterval(startCreatingWords);
    clearInterval(startCreatingWordsL2);
    // $resetPage.show();
  });

} // ************* END ON SETUP!!!!!!!!!!! ************ //


//THIS FUNCTION STARTS THE INTERVAL
function startGame() {
  timer();
  inputBoxCss();
}

function timer() {
  startCreatingWords = setInterval(pickWord, 5000);
}

function inputBoxCss() {
  $('.myClass').css('border', '5px solid #FF68CC');
  $('.myClass').on('keyup', function() {
    if ($(this).val() === randomWordArray[0]) {
      $('.myClass').css('border', '5px solid #B3FFAB');
    }
    console.log(randomWordArray[0]);
  });
}

function inputFocus() {
  $input.focus();
}

///////////////////////////////////////////////////////////////////////////////

//PICK WORD FROM THE ARRAY, THEN PICK THE NEXT ONE ETC
function pickWord() {
  $('.myClass').css('border', '5px solid #FF68CC');
  // word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  word = wordsArray[wordCounter];
  wordCounter++;
  if (wordCounter === wordsArray.length) wordCounter = 0;
  randomWordArray.push(word);
  shuffleString(word);
}


//SHUFFLE THE SELECTED WORD
function shuffleString(word) {
  let shuffledWord = '';
  shuffledWord = shuffleWord(word);
  if (shuffledWord === word) shuffledWord = shuffleWord(word);
  createHtmlContainerForWord(shuffledWord);
}

//CREATE A CONTAINER FOR THE WORD AND ADD THE ACTIVE CLASS.
function createHtmlContainerForWord(shuffledWord) {
  const $wordContainer = $(`<div class="word-container">${shuffledWord}</div>`);
  $screen.append($wordContainer);
  $($('.word-container')[0]).addClass('active');
  randomWidth($wordContainer);
}

//APPEND THE CONTAINER TO A RANDOM WIDTH ON THE SCREEN
function randomWidth(container) {
  const randomWidth = Math.floor(Math.random() * 410);
  $screen.append(container);
  container.css({'margin-left': randomWidth});
  animateHtmlContainer(container);
}

//ADD PX TO THE TOP OF THE ELEMENT TO MAKE IT APPEAR AS THOUGH ITS FALLING + ADD THE ACTIVE CLASS
//REMOVE WORD FROM RANDOM WORD ARRAY
function animateHtmlContainer(container) {
  container.animate({top: '+500px'}, counter, 'linear', function() {
    container.remove();
    $($('.word-container')[0]).addClass('active');
    randomWordArray.shift();
  });
}

//CHECK ANSWER - IF USER INPUT IS EQUAL TO THE FIRST WORD IN RANDOM WORD ARRAY - INCREASE SCORE, REMOVE WORD, ADDCLASS ACTIVE TO THE NEXT ONE. OR DECREASE SCORE.
function checkAnswer() {
  if($userInput === randomWordArray[0]) {
    score++;
    $score.html(score);
    randomWordArray.shift();
    $($('.word-container')[0]).remove();
    $($('.word-container')[0]).addClass('active');
  } else {
    score--;
    $score.html(score);
  }
}


//SHUFFLE THE WORD
function shuffleWord(word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}

//DECREASE THE COUNTER - THIS MAKES THE GAME GO FASTER
function decreaseCounter() {
  for (var i = 0; i < 10; i++) {
    counter--;
  }
}

//RESETS EVERYTHING BACK TO 0, REMOVES THE FALLING WORD AND CLEARS THE INTERVAL.
function reset() {
  score = 0;
  wordCounter = 0;
  $score.html(score);
  $($('.word-container')[0]).remove();
  setup();
}
