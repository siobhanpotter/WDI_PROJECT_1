$(() => {
  const $h1 = $('h1');
  const $playButton = $('.playButton');
  const $input = $('input[type="text"]');
  // const $submitButton = $('input[type="submit"]');
  const $submitButton = $('.submit');
  console.log($submitButton);
  let $userInput = $input.val();
  const wordsArray = ['cat', 'hat', 'bat'];
  const jumbledWordsArray = [];
  let score = 0;
  const $score = $('.score');
  const timer = 10;
  // const $timeContainer = $('.timer');
  const $screen = $('.screen');


  $playButton.one('click',function(){
    //When you click on play run all of this (below) every 2 seconds, first on the first word in the wordsArray, then on the second word in the words array etc.....
    // for (var i = 0; i < wordsArray.length; i++) {
    // var interval = setInterval(jumbleWords, makeWordsFall,  11000);
    console.log(wordsArray);
    jumbleWords();
    console.log(jumbledWordsArray)
    makeWordsFall();
    setTimeout(function(){
      jumbleWords(); makeWordsFall();
    }, 11000);
    // }
    // var interval = setInterval(randomizeLetters, $fallingWord.html(jumbledWordsArray), animateWord  5000));
  });

  // Create a new array with each word, jumbled.
  function jumbleWords() {
    for (let i = 0; i < wordsArray.length; i++) {
      const wordToJumble = wordsArray[i];
      jumbledWordsArray.push(jumbleWord(wordToJumble));
    }
  }

  // Actually jumble the word
  function jumbleWord(word) {
    const splitWord = word.split('');
    const jumbled = splitWord.sort(function() {
      return 0.5 - Math.random();
    });
    return jumbled.join('');
  }

  // Create a new div with the word inside and make it fall
  function makeWordsFall() {
    for (var i = 0; i < jumbledWordsArray.length; i++) {
      const jumbledWord = jumbledWordsArray[i];
      const $fallingWord = $(`<div class="fallingWord" id="fallingWord">${jumbledWord}</div>`);
      $fallingWord.css('left', Math.floor(Math.random()*$screen.width()+1));
      $screen.append($fallingWord);
      $fallingWord.animate({top: '+605px'}, 9000);
      $fallingWord.animate({opacity: '0'}, 1);
    }
  }

  $submitButton.on('click', function() {
    // e.preventDefault();
    console.log('hi!');
    $userInput = $input.val();
    checkAnswer();
    console.log(score);
    $score.html(score);
    // if (score === score +1){
    //   $fallingWord.animate({opacity: '0'}, 1);
    // }
  });


  function checkAnswer() {
    if ($userInput === wordsArray[0]) {
      score ++;
    } else {
      alert('keep trying');
      score --;
    }
  }


  function resetGame() {
  }

  // function reset() {
  //   score = 0;
  //   timer = 10;
  //
  //   $score.html(score);
  //   $timeContainer.html(timer);
  // }

});
