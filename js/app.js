'use strict'
// /////////////////////////////////////////
// function choice()
// {
//     var question1=prompt("Do you i like  horror movies? ");
// if(question1.toLowerCase()=== 'yes'||question1.toLowerCase()=== 'y'||
//  question1.toLowerCase() === 'no' ||question1.toLowerCase()=='n')
// {
//     switch(question1)
//     {
//         case 'yes':
//         case 'y':
//             console.log('you are cool person great answer');
//             alert("you are cool person great answer");
//             break;
//         case 'no':
//         case 'n':
//             console.log('too bad i like horror movies ');
//             alert("too bad i like horror movies");
//     }
// }
// else
// {
//      console.log('enter either yes or no then repeat the answer');
//      alert("enter either yes or no then repeat the answer");
//     choice(question1);
// }
// }
// function choice2()
// {
//     var question2=prompt("Do you know my favouirte animes ?");
// if(question2.toLowerCase()=== 'yes'||question2.toLowerCase()=== 'y'||
//  question2.toLowerCase() === 'no' ||question2.toLowerCase()=='n')
// {
//     switch(question2)
//     {
//         case 'yes':
//         case 'y':
//             console.log('you are an otuku');
//             alert("you are an otuku. go watch Tokyo ghoul");
//             break;
//             case 'no':
//             case 'n':
//                 alert("too bad iam a big fan of anime");
//                 console.log('too bad iam a big fan of anime');

//                 break;



//             }

// }
// else
// {
//     console.log('enter either yes or no then repeat the answer');
//     alert("enter either yes or no then repeat the answer");
//     choice2(question2);

// }
// }
// function choice3()
// {
//     var question3=prompt("Do i like pc Console ?");
// if(question2.toLowerCase()=== 'yes'||question2.toLowerCase()=== 'y'||
//  question2.toLowerCase() === 'no' ||question2.toLowerCase()=='n')
// {
//     switch(question3)
//     {
//         case 'yes':
//         case 'y':
//             console.log('yes im a gamer');
//             alert("yes im a gamer");
//             break;
//         case 'no':
//         case 'n':
//             console.log('who doesnt like computer you can do everything on it rethink');
//     alert("who doesnt like computer you can do everything on it rethink");
//             }

// }
// else
// {
//     console.log('enter either yes or no then repeat the answer');
//     alert("enter either yes or no then repeat the answer");
//     choice3(question3);

// }
// }
// function choice4()
// {
//     var question4=prompt("Do i like fourtnite ?");
// if(question4.toLowerCase()=== 'yes'||question4.toLowerCase()=== 'y'||
//  question4.toLowerCase() === 'no' ||question4.toLowerCase()=='n')
// {
//     switch(question4)
//     {
//         case 'yes':
//             case 'y':
//                 console.log('no i dont like it its a kid game');
//                 alert("no i dont like it its a kid game");
//                 break;
//                 case 'no':
//                 case 'n':
//                     console.log('you guessed right too over raited');
//                     alert("you guessed right too over raited");

//                     break;
//             }

// }
// else
// {
//     console.log('enter either yes or no then repeat the answer');
//     alert("enter either yes or no then repeat the answer");
//     choice4(question4);

// }
// }

















































//////////////////////////////////////////////////////////////////////
var totalQuestions=7;
var score=0;
var question1=prompt("Do i like horror movies? ");
if(question1.toLowerCase()=== 'yes'||question1.toLowerCase()=== 'y'||
 question1.toLowerCase() === 'no' ||question1.toLowerCase()=='n')
{
    switch(question1.toLowerCase())
    {
        case 'yes':
        case 'y':
            score++;
            console.log('you guessed right my faviourite is drag me to hell');
            alert("you guessed right my faviourite is drag me to hell");
            break;
        case 'no':
        case 'n':
            console.log('too bad i like horror movies ');
            alert("too bad i like horror movies");
    }

}

else
{
     console.log('enter either yes or no then repeat the answer');
     alert("enter either yes or no then repeat the answer");
    //choice(question2);
}

var question2=prompt("Do i like  animes ?");
if(question2.toLowerCase()=== 'yes'||question2.toLowerCase()=== 'y'||
 question2.toLowerCase() === 'no' ||question2.toLowerCase()=='n')
{
    switch(question2)
    {
        case 'yes':
        case 'y':
            score++;
            console.log('yes iam an   an otuku');
            alert("yes iam an   an otuku");
            break;
            case 'no':
            case 'n':
                alert("your wrong i am big fan of anime");
                console.log('your wrong i am big fan of anime');

                break;


    }

}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");
    //choice2(question2);
}
var question3=prompt("do i like pc Consoles");
if(question3.toLowerCase()=== 'yes'||question3.toLowerCase()=== 'y'||
 question3.toLowerCase() === 'no' ||question3.toLowerCase()=='n'){
    switch(question3)
    {
        case 'yes':
        case 'y':
            score++;
            console.log('yes iam a gamer');
            alert("yes iam a gamer");
            break;
        case 'no':
        case 'n':
            console.log('who doesnt like computer you can do everything on it rethink');
    alert("who doesnt like computer you can do everything on it rethink");

    }

}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");
    //choice3(question3);
}
var question4 =prompt('do i like fourtnite ?');
if(question4.toLowerCase()=== 'yes'||question4.toLowerCase()=== 'y'||
 question4.toLowerCase() === 'no' ||question4.toLowerCase()=='n'){
    switch(question4)
    {
        case 'yes':
        case 'y':
            score++;
            console.log('you guessed right');
            alert("no i hate this game too childish");
            break;
            case 'no':
            case 'n':
                console.log('you guessed right its a kid game.');
                alert("maybe you think its a kid game");

                break;
    }
}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");
   // choice4(question4);
}
var question5=prompt('am i gona pass 201 course ');
if(question5.toLowerCase()=== 'yes'||question5.toLowerCase()=== 'y'||
 question5.toLowerCase() === 'no' ||question5.toLowerCase()=='n'){
    switch(question5)
    {
        case 'yes':
        case 'y':
            score++;
            console.log('hell yes im gona pass');
            alert("hell yes im gona pass");
            break;
            case'no':
            case 'n':
            console.log('you are wrong  you will see');
    alert("you are wrong  you will see");

            break;
    }

}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");

}
var name=prompt('whats your name?');
alert("welcome mr."+' '+ name);
question1.toLowerCase();
document.querySelector(".description").innerHTML="Welcome mr"+' '+ name;
var rightanswer = 5;
alert("guess a number in my head");
var counter = 0;

while (counter < 4) {
    var question6 = parseInt(prompt("Guess a number?? test ur luck with this number"+Math.floor(Math.random() * 10) + 1));
    if (question6 > 5) {
        alert("its too high");
        counter++;
    }
    if (question6 < 5) {
        alert("its too low");
        counter++;
    }
    if (question6 === 5) {
        score++;
        alert("you have guessed right");
        break;
    }

counter++;
if (counter == 4) {
    alert("sorry you excdeded ur trys");

}
}

//question7
var counter = 0;
var games = ['dota', 'bioshcok', 'fourtnite', 'pupg', 'fifa'];
var gamequestion = prompt("guess my faviorite game").toLowerCase();
while (counter < 7) {

    console.log(counter);
    for (var i = 0; i < games.length; i++) {
        // console.log(i);
        // console.log(counter);
        // var gamequestion = prompt("guess my faviorite game");

        if (gamequestion === 'dota' || gamequestion ==='bioshcok' || gamequestion === 'pupg' || gamequestion === 'fifa') {
            score++;
            alert("my fav games are " + 'dota bioshcok ,fourtnite,pupg,fifa');
            i = games.length;
            counter = 7;
            break;
        }
        // else {
        //     alert("guess again");
        // }
        if (counter === 7) {
            alert("you have exceded your trys ");
        } else {
            gamequestion = prompt("guess my faviorite game");
            counter++;
            break;
        }
    }

}
alert("your score is"+' '+score+ ' '+'out of'+' '+totalQuestions);
// if (counter2 === 7) {
//     alert("you have exceded your trys ");
// }
// question2.toLowerCase();
// question4.toLowerCase();
// question5.toLocaleLowerCase();
// question3.toLocaleLowerCase();






