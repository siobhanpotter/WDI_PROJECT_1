$(() => {

  // console.log('hello');
  const $h1 = $('h1');
  const $playButton = $('.playButton');
  const $input = $('input[type="text"]');
  const $submitButton = $('input[type="submit"]');
  let $userInput = $input.val();
  const wordsArray = ['cat', 'hat', 'bat'];
  const jumbledWordsArray = [];
  let score = 0;
  const $score = $('.score');
  const timer = 10;
  const $timeContainer = $('.timer');
  const $screen = $('.screen');
  // console.log($fallingWord.html());







  // function randomizeLettersloop() {
  //   //here is where the checkAnswer would be located, I think.
  //   for (var i = 0; i < jumbledWordsArray.length; i++) {
  //     jumbledWordsArray[i].randomizeLetters();
  //     console.log(jumbledWordsArray);
  //   }
  // };
  //
  // randomizeLettersloop();



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
    //When you click on play run all of this (below) every 10 seconds, first on the first word in the wordsArray, then on the second word in the words array etc.....
    // for (var i = 0; i < wordsArray.length; i++) {

    console.log(wordsArray);
    jumbleWords();
    console.log(jumbledWordsArray)
    makeWordsFall();
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
    // console.log(splitWord);
    const jumbled = splitWord.sort(function() {
      return 0.5 - Math.random();
    });
    // console.log(jumbledWord);
    return jumbled.join('');
  }

  // Create a new div with the word inside and make it fall
  function makeWordsFall() {
    for (var i = 0; i < jumbledWordsArray.length; i++) {
      const jumbledWord = jumbledWordsArray[i];
      const $fallingWord = $(`<div class="fallingWord" id="fallingWord">${jumbledWord}</div>`);
      $fallingWord.css('left', Math.floor(Math.random()*$screen.width()+1));
      $screen.append($fallingWord)
      $fallingWord.animate({top: '+716px'}, 9000);
      $fallingWord.animate({opacity: '0'}, 1);
    }
  }

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



  function checkAnswer() {
  // let $userInput = $input.val();
  //If the first word the user enters into the imput box is the same as the first word in the wordsArray alert 'right answer', and that word dissapears, if it is different alert 'keep trying'.

  // If the contents of the imput box is the same as wordsArray[i], make the word dissapear / display none, alert the user they have got the correct answer, allow the user to move on to the next word.

    //When you click on play run this check answer code every 10 seconds
  // for (var i = 0; i < wordsArray.length; i++) {
  //   if($userInput === wordsArray[i]) {
  //     // alert('correct answer');
  //     score ++;
  //     // console.log(`yay ${wordsArray[0]}`);
  //     //if the user answer is correct display none for words array[0]
  //     //if the user answer is correct randomize the next word
  //     //"                            " then check the answer of the next word.
  //     $fallingWord.animate({opacity: '0'}, "fast");
  //   } else {
  //       alert('keep trying');
  //       score --;
  //     }
  //
  //   }
  // }




    /////////////////////////////////////////////////
    if ($userInput === wordsArray[0]) {
    // alert('correct answer');
      score ++;
      // console.log(`yay ${wordsArray[0]}`);
      //if the user answer is correct display none for words array[0]
      //if the user answer is correct randomize the next word
      //"                            " then check the answer of the next word.
      // $fallingWord.animate({opacity: '0'}, 'fast');
    } else {
      alert('keep trying');
      score --;
    }


  }
  ////////////////////////////////////////////////////////////////




  function resetGame() {
  }




// function animateWords() {
// }

// function reset() {
//   score = 0;
//   timer = 10;
//
//   $score.html(score);
//   $timeContainer.html(timer);
// }








});
