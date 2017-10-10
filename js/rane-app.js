

// $(() => {
//   console.log($('.score-board'));
// });

$(setup);

const $screen = $('.screen');
// let score = 0;
// const $score = $('.score');
const $wordContainer = $('.word-container');
const wordsArray = ['cat', 'hat', 'bat'];


function setup() {
  pickRandomWord();
}

function pickRandomWord() {
  const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  shuffleString(word);
}

function shuffleString(word) {
  const shuffledWord = shuffleWord(word);
  createHtmlContainerForWord(shuffledWord);
}

function createHtmlContainerForWord(shuffledWord) {
  // console.log('this is from createHtmlContainerForWord', shuffledWord);
  const $wordContainer = $(`<div class="word-container">${shuffledWord}</div>`);
  $('.screen').append($wordContainer);
  // console.log($wordContainer);


  randomWidth($wordContainer);
}


function randomWidth(container) {
  // const screenWidth =
  const randomWidth = Math.floor(Math.random() * 410);
  $screen.append(container);
  container.css({'margin-left': randomWidth});

  animateHtmlContainer(container);
}

function animateHtmlContainer(container) {
  console.log(container);
  container.animate({top: '+512px'}, 9000);
  container.animate({opacity: '0'}, 1);
}



function shuffleWord(word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}

// function checkAnswer() {
//   if ($userInput === wordsArray[0]) {
//     score ++;
//   } else {
//     alert('keep trying');
//     score --;
//   }
// };
