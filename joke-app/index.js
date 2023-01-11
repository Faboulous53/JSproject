//https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const content = document.getElementById("content");




function getJoke(){
fetch('https://api.blablagues.net/?rub=blagues')
    .then((res) => res.json())
    .then((data) => {
        const getData = data.data.content;
        header.textContent = getData.text_head;
        // condition ternaire après ? valeur si vrai. après : sinon tu fais ça.
        //donc: si jamais data.data.content.text n'a pas de "", alors tu affiches le.text si non le .text_hidden
        content.textContent = getData.text !== ""
        ? getData.text 
        : getData.text_hidden ;
    });
}

document.body.addEventListener('click', getJoke)
