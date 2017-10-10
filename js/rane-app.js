
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

const wordsArray = ['cat', 'tree', 'house'];
// const randomWord = [];

function setup() {
  $submitButton = $('.submit');
  $screen = $('.screen');
  $wordContainer = $('.word-container');
  $playButton = $('.playButton');
  $input = $('input[type="text"]');
  $userInput = $input.val();
  $score = $('.score');


  $playButton.one('click', function() {
    // intervalFunction();
    setInterval(pickRandomWord,10000);
  });


  $submitButton.on('click', function() {
    $userInput = $input.val();
    checkAnswer();
    console.log(score);
    $score.html(score);
  });
}

function pickRandomWord() {
  // const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  //Check answer now before the letters in the word are shuffled
  shuffleString(word);
  // console.log(word);

}

function shuffleString(word) {
  const shuffledWord = shuffleWord(word);
  createHtmlContainerForWord(shuffledWord);
}

function createHtmlContainerForWord(shuffledWord) {
  // console.log('this is from createHtmlContainerForWord', shuffledWord);
  const $wordContainer = $(`<div class="word-container">${shuffledWord}</div>`);
  $screen.append($wordContainer);
  randomWidth($wordContainer);
}


function randomWidth(container) {
  const randomWidth = Math.floor(Math.random() * 410);
  $screen.append(container);
  container.css({'margin-left': randomWidth});

  animateHtmlContainer(container);
}

function animateHtmlContainer(container) {
  // console.log(container);
  container.animate({top: '+512px'}, 9000);
  container.animate({opacity: '0'}, 1);
}


function checkAnswer() {
  if($userInput === word) {
    alert('correct answer');
    score ++;
  } else {
    alert('keep trying');
    score --;
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
