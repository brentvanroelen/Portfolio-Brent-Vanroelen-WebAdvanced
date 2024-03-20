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
    
    let mijnForm = document.getElementsByClassName('MyLittleForm');
    let ingevoerdeWaarde = document.getElementById('favCharacter').value;

    if(ingevoerdeWaarde == null || ingevoerdeWaarde == '' ){
        alert('Hey, you have to choose your favorite character!!');
        return false;
    }else{
        alert('You have selected: ' + ingevoerdeWaarde + ' as your favorite character');
    }
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


//api toevoegen

let apiPlaats = document.getElementsByClassName('plaatsVoorApi');


function vriendenEnVijanden(event) {
    event.preventDefault();
    
    let nationInput = document.getElementById('nationQuestion').value;
    

let data = fetch(`https://last-airbender-api.fly.dev/api/v1/characters?affiliation=${nationInput}`)
        .then(apiPlaats => apiPlaats.json())
        .then(json => {


            const nation = json.affiliation;
            const foto = json.photoUrl;
            const allies = json.allies;
            const enemies = json.enemies;

            apiPlaats = `
                <h2> (${nation})</h2>
                <p>Allies: ${allies}</p>
                <p>Enemies: ${enemies}</p>
                <img src="${foto}" alt="${nation} Poster">
            `;
            console.log(apiPlaats);
            document.getElementById('plaatsVoorApi').innerHTML = apiPlaats;
            
        })}
