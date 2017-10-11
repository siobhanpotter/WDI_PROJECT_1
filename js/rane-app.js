
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
console.log(counter);


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
  $resetPage = $('resetPage');


  $playButton.one('click', function() {
    pickRandomWord();
    // console.log(counter);

    //
    function decreaseCounter() {
      for (var i = 0; i < 10; i++) {
        counter--;
        console.log(counter);
      }
    }

    setInterval(decreaseCounter, 100);


    // startCreatingWords = setInterval(pickRandomWord, counter);

    console.log(counter);
    startCreatingWords = setInterval(pickRandomWord, counter);
    $('.myClass').css('border', '5px solid red');
    $('.myClass').on('keyup', function() {
      if ($(this).val() === randomWordArray[0]) {
        $('.myClass').css('border', '5px solid green');
      }
    });
    // incrumnetCounter();
  });


  // function incrumnetCounter() {
  //   setInterval(counter-=1000, 1000);
  // }


  /////////////////////////////////////////////////////////////////////////////
  // $playButton.one('click', function() {
  //   pickRandomWord();
  //   startCreatingWords = setInterval(pickRandomWord, 5000);
  //   console.log(this);
  //   $('.myClass').css('border', '5px solid red');
  //   $('.myClass').on('keyup', function() {
  //     // console.log(this);
  //     if ($(this).val() === randomWordArray[0]) {
  //       $('.myClass').css('border', '5px solid green');
  //       // console.log(this);
  //     }
  //   });
  //   // console.log(word);
  // });


  // var refreshIntervalId = setInterval(fname, 10000);
  /* later */





  $submitButton.on('submit', function(e) {
    e.preventDefault();
    // console.log('form submitted');
    $userInput = $input.val();
    // console.log($userInput);
    checkAnswer();
    $input.val('');
  });




  $resetButton.one('click', function(){
    // console.log('hi');
    reset();
    ///need to stop the set interval from running////
    clearInterval(startCreatingWords);
    $resetPage.show();
  });

} // ************* END ON SETUP!!!!!!!!!!! ************ //




function pickRandomWord() {
  $('.myClass').css('border', '5px solid red');
  // word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  word = wordsArray[wordCounter];
  wordCounter++;
  if (wordCounter === wordsArray.length) wordCounter = 0;
  randomWordArray.push(word);
  // console.log(randomWordArray);
  shuffleString(word);
}

function shuffleString(word) {
  let shuffledWord = '';
  shuffledWord = shuffleWord(word);
  if (shuffledWord === word) shuffledWord = shuffleWord(word);

  createHtmlContainerForWord(shuffledWord);
}

function createHtmlContainerForWord(shuffledWord) {
  // console.log('this is from createHtmlContainerForWord', shuffledWord);
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
  container.animate({top: '+512px'}, counter, 'linear', function() {
    // console.log('animation finished');
    container.remove();
    $($('.word-container')[0]).addClass('active');
  });
}


function checkAnswer() {
  if($userInput === randomWordArray[0]) {
    score++;
    $score.html(score);
    // console.log(score);
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

// $('#reset').one('click', function(){
//   console.log('hi');
//   score = 0;
//   wordCounter = 0;
// });

function reset() {
  score = 0;
  wordCounter = 0;
  $score.html(score);
}
