//window.onload

//vars
let title1 = document.getElementById('h1');
let title2 = document.getElementById('h2');

//DOM manipulatie + selfexecuting function

(function(){
       
    
    document.addEventListener('DOMContentLoaded', function(){
    
        let newTitle2 = document.createTextNode(title2.textContent = 'Zuko');

    });

})();

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
        localStorage.setItem('favCharacter', ingevoerdeWaarde);
    //localStorage.clear(); 
    //gebruiken indien je de localstorage wilt clearen(om een nieuw character in te voeren)(zowel het lokaal opslaan als verschillende characters werkt)

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


window.onload = () =>{

    let favorieteCharacter = localStorage.getItem('favCharacter');
    if(favorieteCharacter){
        document.getElementById('favCharacter').value = favorieteCharacter;
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



// callbackfunction

let pCallback = document.getElementById('pCallback');

    let callbackfunction = (callback) => {


    let livaActionPrint = "Avatar: The Last Airbender is an American live-action series from streaming service Netflix. The series premiered on February 22, 2024 and is based on the original animated series Avatar: The Legend of AangThe story follows young Aang, who discovers he is the new Avatar and must save the world. He must master all four elements - water, earth, fire and air - to end the war being waged by the Fire Nation led by Fire Lord Ozai. The series has a cast that includes Gordon Cormier as Avatar Aang, Kiawentiio as Katara, Ian Ousley as Sokka, and Daniel Dae Kim as Fire Lord Ozai.";
    



    pCallback.textContent = livaActionPrint;

}
callbackfunction(pCallback);

//promise
let button = document.getElementById('adventureButton');


async function adventureTime(event){
    
    if (event){
        event.preventDefault()
        }
    

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                let time = true;
                if (time) {
                    resolve('APPA YIP YIP TO THE NORTH POLE');
                } else {
                    reject('Appa is still trapped in Basing Se');
                }
            }, 1000)
        
        
        }
        )
    }



button.addEventListener('click', async (event) => {
    
    
    adventureTime(event)
        .then((message) => {
            alert('APPA YIP YIP TO THE NORTH POLE')
        })

        .catch(error => {
            alert('Appa is still trapped in Basing Se')
        })
})

// Previous Avatars
let previousAvatars = ['Korra', 'Aang', 'Roku', 'Kyoshi', 'Kuruk', 'Yangchen'];

console.log('Previous Avatars:');
previousAvatars.forEach(avatar => {
    console.log(avatar);
});