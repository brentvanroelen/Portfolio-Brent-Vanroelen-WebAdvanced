'use strict';

//vars
let title1 = document.getElementById('h1');
let title2 = document.getElementById('h2');

//DOM manipulatie
let newTitle2 = document.createTextNode(title2.textContent = 'Zuko');

//Event
title1.addEventListener('click', function(){
    let newTitle1 = document.createTextNode(title1.textContent = 'The Legend Of Korra');
});

//form valideren
function formChecker(event){
    event.preventDefault();
    let mijnForm = document.getElementById('mijnForm');
    let geselecteerdeWaarde = mijnForm.value;

    if(geselecteerdeWaarde == null || geselecteerdeWaarde == '' ){
        alert('Hey, you have to choose your favorite character!!');
        return false;
    }
}


let formElement = document.getElementById('mijnForm');
formElement.addEventListener('submit', formChecker);


//Constante

const leeftijdAang = 112;

let AangleeftijdUitIjs = 12; 

let AantalJarenInIjs = leeftijdAang - AangleeftijdUitIjs;



let revealAntwoord = document.getElementById('antwoord');

revealAntwoord.addEventListener('click',function(){
    let correctAntwoord = document.createTextNode(revealAntwoord.textContent = `De time Aang was in the ice berg is: ${AantalJarenInIjs}` );
})

