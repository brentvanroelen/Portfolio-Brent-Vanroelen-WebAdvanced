let title1 = document.getElementById('h1');
let tile2 = document.getElementById('h2');

let newTitle2 = document.createTextNode(tile2.textContent = 'Zuko');


title1.addEventListener('click',function(){
    let newTitle1 = document.createTextNode(title1.textContent = 'The Legend Of Korra')
})