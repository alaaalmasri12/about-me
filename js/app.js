'use strict'
var question1=prompt("Do you like horror movies? ");
if(question1.toLowerCase()=== 'yes'|| question1.toLowerCase() === 'no')
{
    switch(question1.toLowerCase())
    {
        case 'yes':
            console.log('you are cool person great answer');
            alert("you are cool person great answer");
            break;
        case 'no':
            console.log('you should watch inception great movie');
            alert("you should watch inception great movie");
    }
    
}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");
}

var question2=prompt("Do you like mind blowing animes ?");
if(question2.toLowerCase()=== 'yes'|| question2.toLowerCase() === 'no')
{
    switch(question2)
    {
        case 'yes':
            console.log('you are an otuku');
            alert("you are an otuku. go watch Tokyo ghoul");
            break;
            case 'no':
                alert("you should try tokyo ghoul great anime");
                console.log('you should try tokyo ghoul great anime');

                break;

        
    }

}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");
}
var question3=prompt("do u like pc Consoles");
if(question3.toLowerCase()=== 'yes'|| question3.toLowerCase() === 'no')
{
    switch(question3)
    {
        case 'yes':
            console.log('theres a new Pedator i suggest you but it');
            alert("theres a new Pedator i suggest you but it");
            break;
        case 'no':
            console.log('who doesnt like computer you can do everything on it rethink');
    alert("who doesnt like computer you can do everything on it rethink");
           
    }

}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");
}
var question4 =prompt('do you like fourtnite ?');
if(question4.toLowerCase()=== 'yes'|| question4.toLowerCase() === 'no')
{
    switch(question4)
    {
        case 'yes':
            console.log('go into buttle roual and choose a shoutgun to have most kills');
            alert("go into buttle roual and choose a shoutgun to have most kills");
            break;
            case 'no':
                console.log('maybe you think its a kid game');
                alert("maybe you think its a kid game");
               
                break;
    }
}

else
{
    console.log('enter either yes or no then repeat the answer');
    alert("enter either yes or no then repeat the answer");
}
var question5=prompt('are gona pass 201 course ');
if(question5.toLowerCase()=== 'yes'|| question5.toLowerCase() === 'no')
{
    switch(question5)
    {
        case 'yes':
            console.log('you should prapare by studying node js course');
            alert("you should prapare by studying node js course");
            break;
            case'no':
            console.log('dont worry life is long you are still young');
    alert("dont worry life is long you are still young");
           
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



// question2.toLowerCase();
// question4.toLowerCase();
// question5.toLocaleLowerCase();
// question3.toLocaleLowerCase();






