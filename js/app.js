'use strict';
var totalQuestions = 7;
var score = 0;
function personaldetals()
{
    var name = prompt('whats your name?');
    alert('welcome mr.' + ' ' + name);
    // question1.toLowerCase();
    document.querySelector('.description').innerHTML = 'Welcome mr' + ' ' + name;
  var question1 = prompt('Do i like horror movies? ');
  if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y' ||
        question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n') {
    switch (question1.toLowerCase()) {
    case 'yes':
    case 'y':
      score++;
      alert('you guessed right my faviourite is drag me to hell');
      break;
    case 'no':
    case 'n':
      alert('too bad i like horror movies');
    }
    
  }
    
  else {
    alert('enter either yes or no then repeat the answer');
  }
    
  var question2 = prompt('Do i like  animes ?');
  if (question2.toLowerCase() === 'yes' || question2.toLowerCase() === 'y' ||
        question2.toLowerCase() === 'no' || question2.toLowerCase() === 'n') {
    switch (question2) {
    case 'yes':
    case 'y':
      score++;
      alert('yes iam an   an otuku');
      break;
    case 'no':
    case 'n':
      alert('your wrong i am big fan of anime');
    
      break;
    
    
    }
    
  }
    
  else {
    alert('enter either yes or no then repeat the answer');
  }
  var question3 = prompt('do i like pc Consoles');
  if (question3.toLowerCase() === 'yes' || question3.toLowerCase() === 'y' ||
        question3.toLowerCase() === 'no' || question3.toLowerCase() === 'n') {
    switch (question3) {
    case 'yes':
    case 'y':
      score++;
      alert('yes iam a gamer');
      break;
    case 'no':
    case 'n':
      alert('who doesnt like computer you can do everything on it rethink');
    
    }
    
  }
    
  else {
    alert('enter either yes or no then repeat the answer');
  }
  var question4 = prompt('do i like fourtnite ?');
  if (question4.toLowerCase() === 'yes' || question4.toLowerCase() === 'y' ||
        question4.toLowerCase() === 'no' || question4.toLowerCase() === 'n') {
    switch (question4) {
    case 'yes':
    case 'y':
      score++;
      alert('no i hate this game too childish');
      break;
    case 'no':
    case 'n':
      alert('maybe you think its a kid game');
    
      break;
    }
  }
    
  else {
    alert('enter either yes or no then repeat the answer');
  }
  var question5 = prompt('am i gona pass 201 course ');
  if (question5.toLowerCase() === 'yes' || question5.toLowerCase() === 'y' ||
        question5.toLowerCase() === 'no' || question5.toLowerCase() === 'n') {
    switch (question5) {
    case 'yes':
    case 'y':
      score++;
      alert('hell yes im gona pass');
      break;
    case 'no':
    case 'n':
      alert('you are wrong  you will see');
    
      break;
    }
    
  }
    
  else {
    alert('enter either yes or no then repeat the answer');
    
  }
}
function numberguess(){
 
  alert('guess a number in my head');
  var counter = 0;
    
  while (counter < 3) {
    var question6 = parseInt(prompt('Guess a number?? test ur luck with this number' + Math.floor(Math.random() * 10) + 1));
    if (question6 > 5) {
      alert('its too high');
      counter++;
    }
    if (question6 < 5) {
      alert('its too low');
      counter++;
    }
    if (question6 === 5) {
      score++;
      alert('you have guessed right');
      break;
    }
    
    counter++;
    if (counter === 5) {
      alert('sorry you excdeded ur trys');
    
    }
  }
}
    
  //question7
  function listgame(){

  
  var counter2 = 0;
  var games = ['dota', 'bioshock', 'plants vs zombies', 'pupg', 'fifa'];
  var gamequestion = prompt('guess my faviorite game').toLowerCase();
  while (counter2 < 7) {
    
    for (var i = 0; i < games.length; i++) {
     
      switch (gamequestion) {
      case games[0]:
        score++;
        alert('my fav games are ' + 'dota bioshcok ,fourtnite,pupg,fifa');
        i = games.length;
        counter2 = 7;
        break;
      case games[1]:
        score++;
        alert('my fav games are ' + 'dota bioshcok ,fourtnite,pupg,fifa');
        i = games.length;
        counter2 = 7;
        break;
      case games[2]:
        score++;
        alert('my fav games are ' + 'dota bioshcok ,fourtnite,pupg,fifa');
        i = games.length;
        counter2 = 7;
        break;
      case games[3]:
        score++;
        alert('my fav games are ' + 'dota bioshcok ,fourtnite,pupg,fifa');
        break;
      case games[4]:
        score++;
        alert('my fav games are ' + 'dota bioshcok ,fourtnite,pupg,fifa');
        i = games.length;
        counter2 = 7;
        break;
      case games[5]:
        score++;
        alert('my fav games are ' + 'dota bioshcok ,fourtnite,pupg,fifa');
        i = games.length;
        counter2 = 7;
        break;
      default:
        gamequestion = prompt('guess my faviorite game');
        counter2++;
        break;
      }
    
      if (counter2 === 6) {
        alert('you have excedeed your trys');
        counter2 = 7;
        break;
      }
    }
    
  }
    
  alert('your score is' + ' ' + score + ' ' + 'out of' + ' ' + totalQuestions);
  }
  personaldetals();
  numberguess();
  listgame();








