function searchFood() {
    const mealName = document.getElementById('name');
    searchByName(mealName.value);
}

const searchByName = search => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
            const mealsArray = data.meals;
            if (mealsArray) {
                mealsArray.map(mealInfoTrue);
            }
            else {
                mealInfoFalse();
            }
        })
}

function mealInfoTrue(mealElement) {
    const mealsList = document.getElementById('result-container');
    const mealDiv = document.createElement('div');
    mealDiv.className = 'mealInformation';
    const mealInfo = `
    <div onclick="showMeal('${mealElement.strMeal}')">
        <img src='${mealElement.strMealThumb}' alt=''>
        <p>${mealElement.strMeal}</p>
        </div>
        `;
    mealDiv.innerHTML = mealInfo;
    mealsList.appendChild(mealDiv);
}

function mealInfoFalse() {
    const mealsList = document.getElementById('result-container');
    const mealInfo = `
        <p>No Meal Found</p>
        `;
    mealsList.innerHTML = mealInfo;
}

const showMeal = showMealInfo => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${showMealInfo}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const mealDetail = data.meals;
            const removeResultContainer = document.getElementById('result-container');
            removeResultContainer.style.display = 'none';

            const mealDetails = document.getElementById('meal-details');
            mealDetailsDiv = document.createElement('div');

            const mealDetailsHTML = `
        <img src='${mealDetail[0].strMealThumb}' alt=''>
        <h3>${mealDetail[0].strMeal}</h3>
        <p>Ingredients</p>
        `
            const ul = document.getElementById('ingredients-list');
            for (let i = 1; i <= 20; i++) {
                const li = document.createElement('li');
                const measure = "strMeasure" + i;
                const ingredients = "strIngredient" + i;

                const ingredientList = `${mealDetail[0][measure]} ${mealDetail[0][ingredients]} `;

                if (!ingredientList || ingredientList.trim().length === 0) {
                    break;
                } else {
                    li.innerText = ingredientList;
                    ul.appendChild(li);
                }
            }
            mealDetails.innerHTML = mealDetailsHTML;
        })
}