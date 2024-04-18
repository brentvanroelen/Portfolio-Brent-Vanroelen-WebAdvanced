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

let display = document.getElementById('infoCharacters');
function formChecker(event){
    event.preventDefault();

    let mijnForm = document.getElementsByClassName('MyLittleForm');
    let ingevoerdeWaarde = document.getElementById('favCharacter').value.toLowerCase();

    let data = fetch('data.json')
    .then(response => response.json())
    .then(json => {
    
    
    let character = json.find(character => character.name.toLowerCase() === ingevoerdeWaarde.toLowerCase());

    if (character){
           
        
        let { name, element, age, role, affiliation, description, allies, enemies, quote } = character;

        display.innerHTML = `
        <p>The name of your character is ${name}, the element this person bends is ${element}
        . He or she is ${age}. This character's role is ${role}, the affiliation this person has is
        ${affiliation}. A little description of your character: ${description}. The allies this person has are 
        ${allies.join(', ')} and the enemies are ${enemies.join(', ')}. Last but not least a known quote of your character is
        ${quote} </p>
    `;

            document.getElementById('infoCharacters').innerHTML = display;
    }else{
        alert('Hey, you have to choose your favorite character!!');}
        
        
        
    })

   /*  if(ingevoerdeWaarde == null || ingevoerdeWaarde == '' ){
        //alert('Hey, you have to choose your favorite character!!');
        return false;
    }else{
        alert('You have selected: ' + ingevoerdeWaarde + ' as your favorite character');
    } */
}


//Event

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

// template literals

let nameRoku = 'Avatar Roku'
let ageRoku = 70

console.log(`My name is ${nameRoku} and I am ${ageRoku} years old`)




//destructuring

let pSubbending = document.getElementById('pSubbending');

const subBending = {
    earthbending: 'lavabending, seismic sense, metalbending',
    airbending: 'spiritual projection, flying, soundbending',
    waterbending: 'bloodbending, healing, plantbending',
    firebending: 'lightning, combustion, blue fire'
}

differentBending(subBending)

function differentBending({earthbending, airbending, waterbending, firebending}){

    let newPSubbending = document.createTextNode(pSubbending.textContent = `Some of the different bending techniques are, for erthbending: ${earthbending}, the airnation could:  ${airbending}, in the watertribes the poeple could: ${waterbending} and the ruthless firenation made use of: ${firebending}`);
    
}

differentBending(subBending)
