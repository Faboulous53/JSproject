// /////////////XMLHttpRequest ancienne méthode

// function reqListener() {
//     // console.log(this.responseText);
// }

// reqListener();

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// // req.open('get', 'data.txt', true);
// // req.open('get', 'data.json', true);
// req.open('get', 'https://api.blablagues.net/?rub=blagues', true);
// req.send();

//////////////// FETCH
//then: quand tu as la réponse, tu fait ceci.
//catch: Si tu n'as pas la réponse, tu fais ceci (en l'occurence erreur).

//fetch théorique
// fetch('monlien', "object d'option").then((response) => {
//     //response
// }).catch((error) => console.log(error));

// fetch('data.txt')
//     .then((res) => res.text())
//     .then((data) => console.log(data));

// fetch('data.json')
// .then((res) => res.json())
// .then((data) => console.log(data));

///////////////

const myHeaders = new Headers();

const init = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
};

// fetch('data.json', init).then((res) => console.log(res));

//CRUD => Creat (POST), read (Get), update (put), Delete (DELETE).
const init2 = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        pseudo: 'Fabien',
        message: 'ça marche !',
    }),
    mode: 'cors',
    credentials: 'same-origin',
};

document.querySelector('form').addEventListener('submit', () => {
    fetch('http://localhost:3000/posts', init2).then(() =>
        console.log('data envoyée')
    );
});

//-------------------
// Asynchrone
//-------------------

setTimeout(() => {
    console.log('test');
}, 2000);

//promise
// fetch('monlien').then((res) => res)

// async/await
async function fetchData(){
   await fetch('monlien')
   // attend que le await soit exécuté avant de faire la suite
    await executeFonction();
    await console.log("test");
}

const fetchData2 = async () => {
    await fetch('monlien')
   // attend que le await soit exécuté avant de faire la suite
    await executeFonction();
}


//---------------
// LE JSON
//---------------

//Méthode .json() => méthode qui s'auto résoud toute seule en envoyant 
//le body de la requête.

fetch("data.json").then((res) => res.json())
.then((data) => {
    //stingify => convertit en JSON

    let settings =JSON.stringify(data);
     //parse => transforme JSON en objet JS
    //console.log(JSON.parse(settings));
});

//----------------------
// Web API
//----------------------

// CLIENT STORAGE
//----------------------

// Local Storage =! des cookies et ne supporte que des chaines de caractère.

const obj = {
    name:"Denis",
    age: "35",
}
localStorage.data = "Je stock la data";
localStorage.removeItem("data");

localStorage.user = JSON.stringify(obj);

//SESSION STORAGE

sessionStorage.dataSettings = "55px";
sessionStorage.clear;

//COOKIES
document.cookie = "Fabien";

// Bonne pratique
document.cookie = "pseudo=FD;path=/; max-age=45000; secure; samesite";

//vidéo 2h26

