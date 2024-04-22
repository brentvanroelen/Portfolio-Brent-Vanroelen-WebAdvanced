//'use strict';

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
 let formChecker = (event) =>{
    event.preventDefault();

    let mijnForm = document.getElementsByClassName('MyLittleForm');
    let ingevoerdeWaarde = document.getElementById('favCharacter').value;

    let data = fetch('json/data.json')
    .then(response => response.json())
    .then(json => {
        
        let gevondenCharacter = false;
    
    for(let i = 0; i < json.length; i++){
        if(json[i].name === ingevoerdeWaarde){
    

            display.innerHTML = `
            <p>The name of your character is ${json[i].name}, the element this person bends is ${json[i].element}.
            This character's role is ${json[i].role}, the affiliation this person has is
            ${json[i].affiliation}. A little description of your character: ${json[i].description}. The allies this person has are 
            ${json[i].allies} and the enemies are ${json[i].enemies}. Last but not least a known quote of your character is: '
            ${json[i].quote}'. </p>
        `;
        gevondenCharacter = true;
        break;
        }
        document.getElementById('infoCharacters').innerHTML = display;
    
}
        if (!gevondenCharacter){
            alert('Character not found');
}
})}




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


// spread en rest operator

let dierenAtla = ["Sky Bison", "Komodo Rhino", "Badger Mole", "Armadillo Lion", "Shirshu"];
let dierenKorra = ["Polar Bear Dog","Fire Ferret","Dragon","Spirit Wild Creatures"];

let alleDieren = [...dierenAtla, ...dierenKorra];
let = [firstAnimal, ...restOfTheArray] = alleDieren;

let pFirstAninmal = document.getElementById('skyBison');

console.log("The first animal from this array is: ", firstAnimal);
let displayFirstAninmal = document.createTextNode(pFirstAninmal.textContent = `The first animal from the array is: ${firstAnimal}`);
console.log("The rest of this array:" , restOfTheArray);