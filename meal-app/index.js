//https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
const result = document.getElementById('result');
const form = document.querySelector('form');
const input = document.querySelector('input');

let meals = [];

async function fetchMeals(search) {
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+ search)
        .then((res) => res.json())
        .then((data) => (meals = data.meals));

    console.log(meals);
}

function mealsDisplay() {
    //limiter l'affichage:
    meals.length = 12;

    result.innerHTML = meals.map(
        (meal) =>
            `
    <li class="card">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strArea}</p>
        <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
        <ul></ul>
    </li>
    `
    ).join('');
}

input.addEventListener('input', (e) => {
    //recherche se déclenche au moment de la validation avec entrée
    fetchMeals(e.target.value);   
    //recherche se déclenche en temps réel
    // fetchMeals(e.target.value).then(() => mealsDisplay());  

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    mealsDisplay();
});

