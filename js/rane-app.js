
$(setup);

let $screen;
let $wordContainer;
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
let $resetPage;
let counter = 5000;
let $welcome;
let $menuContainer;
let $x;
// console.log(counter);


const wordsArray        = ['cat', 'tree', 'house', 'apple', 'garden', 'pizza', 'italy'];
const randomWordArray   = [];

function setup() {
  $submitButton = $('.submit');
  $screen = $('.screen');
  $wordContainer = $('.word-container');
  $playButton = $('.playButton');
  $input = $('input[type="text"]');
  $userInput = $input.val();
  $score = $('.score');
  $resetButton = $('.resetButton');
  $resetPage = $('.resetPage');
  $welcome = $('.welcome');
  $menuContainer = $('.menuContainer');
  $x = $('.x');




  $menuContainer.on('click', function() {
    $welcome.show();
  });

  $x.on('click', function() {
    console.log('hi');
    $welcome.hide();
  });


  $playButton.one('click', function() {
    inputFocus();
    pickWord();
    startGame();
    setInterval(decreaseCounter, 500);
  });


  $submitButton.on('submit', function(e) {
    e.preventDefault();
    $userInput = $input.val();
    checkAnswer();
    $input.val('');
  });

  $resetButton.one('click', function(){
    reset();
    clearInterval(startCreatingWords);
    // $resetPage.show();
  });



} // ************* END ON SETUP!!!!!!!!!!! ************ //


// function startGame() {
//   startCreatingWords = setInterval(pickWord, 5000);
//   $('.myClass').css('border', '5px solid red');
//   $('.myClass').on('keyup', function() {
//     if ($(this).val() === randomWordArray[0]) {
//       $('.myClass').css('border', '5px solid green');
//     }
//     console.log(randomWordArray[0]);
//   });
// }



function startGame() {
  startCreatingWords = setInterval(pickWord, 5000);

  $('.myClass').css('border', '5px solid #FF68CC');
  $('.myClass').on('keyup', function() {
    if ($(this).val() === randomWordArray[0]) {
      $('.myClass').css('border', '5px solid #B3FFAB');
    }
    console.log(randomWordArray[0]);
    levels();

  });
}



function levels() {
  if (score <= -10){
    $resetPage.show();
  } else if (score >= 6) {
    clearInterval(startCreatingWords);
    startCreatingWords = setInterval(pickWord, 3000);
  }
}


function inputFocus() {
  $input.focus();
}

function pickWord() {
  $('.myClass').css('border', '5px solid #FF68CC');
  // word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  word = wordsArray[wordCounter];
  wordCounter++;
  if (wordCounter === wordsArray.length) wordCounter = 0;
  randomWordArray.push(word);
  shuffleString(word);
}

function shuffleString(word) {
  let shuffledWord = '';
  shuffledWord = shuffleWord(word);
  if (shuffledWord === word) shuffledWord = shuffleWord(word);

  createHtmlContainerForWord(shuffledWord);
}

function createHtmlContainerForWord(shuffledWord) {
  const $wordContainer = $(`<div class="word-container">${shuffledWord}</div>`);
  $screen.append($wordContainer);
  $($('.word-container')[0]).addClass('active');

  randomWidth($wordContainer);
}

function randomWidth(container) {
  const randomWidth = Math.floor(Math.random() * 410);
  $screen.append(container);
  container.css({'margin-left': randomWidth});

  animateHtmlContainer(container);
}

function animateHtmlContainer(container) {
  container.animate({top: '+500px'}, counter, 'linear', function() {
    container.remove();
    $($('.word-container')[0]).addClass('active');
    randomWordArray.shift();
  });
}


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

function shuffleWord(word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}

function decreaseCounter() {
  for (var i = 0; i < 10; i++) {
    counter--;
  }
}

function reset() {
  score = 0;
  wordCounter = 0;
  $score.html(score);
  $($('.word-container')[0]).remove();
  setup();
}
