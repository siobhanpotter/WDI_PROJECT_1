
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
    setInterval(pickRandomWord,2000);
    console.log(word);
  });


  $submitButton.on('click', function() {
    $userInput = $input.val();
    checkAnswer();
    console.log(score);
    $score.html(score);
  });
}

function pickRandomWord() {
  word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  shuffleString(word);

}

function shuffleString(word) {
  const shuffledWord = shuffleWord(word);
  if (shuffledWord === word) {
    shuffleString(word);
  }
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
  container.animate({top: '+512px'}, 9000);
  // if ($userInput === word){
  //   container.css('color','pink');
  // } else {
  //   container.css('color','white');
  // }

  // $wordContainer.css('color','red');
  // container.css('color','white');
  // container.css({'margin-left': randomWidth});
  // container.animate({backgroundColor: 'black'}, 'slow');
  // container.animate({left: '+512px'},9000);
  // container.animate({opacity: '0'}, 1);
  // $('#first').animate({ width: '200px', marginTop:'50px' }, 200);
  checkAnswer(container);
}


function checkAnswer() {
  if($userInput === word) {
    score ++;
  } else {
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
