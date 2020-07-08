class UI {

    // Print Categories
    displayCategories() {
        const categoryList = cocktail.getCategories()
            .then(categories => {
                const catList = categories.categories.drinks;
                // Append a first option without value
                const firstOption = document.createElement('option');
                firstOption.textContent = '';
                firstOption.value = '';
                document.querySelector('#search').appendChild(firstOption);

                // Append into the Select
                catList.forEach(category => {
                    const option = document.createElement('option');
                    option.textContent = category.strCategory;
                    PageTransitionEvent.value = category.strCategory.split(' ').join('_')
                    document.querySelector('#search').appendChild(option);
                })
            })
    }

    displayDrinks(drinks) {
        const resultsWrapper = document.querySelector('.results-wrapper');
        resultsWrapper.style.display = 'block';

        const resultsDiv = document.querySelector('#results');

        // loop through the drins
        drinks.forEach(drink => {
            resultsDiv.innerHTML += `
                <div class="col-md-4">
                    <div class="card my-3">
                        <img class="card-img-top" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" alt="${drink.strDrink}">
                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}"</h2>
                            <a data-target="#recipe" class="btn btn-success get-recipe" href="#" data-toggle="modal" data-id="${drink.idDrink}">Get Recipe</a>
                        </div>
                    </div>
                </div>
            `;
        })
    }

    displayDrinksWithIngredients(drinks) {

        const resultsWrapper = document.querySelector('.results-wrapper');
        resultsWrapper.style.display = 'block';

        const resultsDiv = document.querySelector('#results');

        drinks.forEach(drink => {
            resultsDiv.innerHTML += `
                <div class="col-md-6">
                    <div class="card my-3">
                        <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">+</button>
                        <img class="card-img-top" src="${drink.strDrinkThumb}" alt="${drink.strDrink}" alt="${drink.strDrink}">
                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}"</h2>
                            <p class="card-text font-weight-bold">Instructions:</p>
                            <p class=card-text">
                                ${drink.strInstructions}
                            </p>
                            <p class="card-text">
                                <ul class="list-group">
                                    <li class="list-group-item alert alert-danger">Ingredients</li>${this.displayingIngredients(drink)}
                                </ul>
                            </p>
                            <p class="card-text font-weight-bold">Extra Information:</p>
                            <p class="card-text">
                                <span class="badge badge-pill badge-success">
                                    ${drink.strAlcoholic}
                                </span>
                                <span class="badge badge-pill badge-warning">
                                    ${drink.strCategory}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            `;
        })
    }

    // Prints the ingredients
    displayingIngredients(drink) {
        // console.log(drink);
        let ingredients = [];
        for(let i = 1; i < 16; i++){
            const ingredientMeasure = {};
            if(drink[`strIngredient${i}`] !== null ) {
                ingredientMeasure.ingredient = drink[`strIngredient${i}`];
                ingredientMeasure.measure = drink[`strMeasure${i}`];
                ingredients.push(ingredientMeasure);

            }
        }

        // console.log(ingredients);
        let ingredientsTemplate = '';
        ingredients.forEach(ingredient => {
            ingredientsTemplate += `
                <li class="list-group-item">${ingredient.ingredient} - ${ingredient.measure}</li>

            `;
        });
        return ingredientsTemplate;
    }

//Dipslays single recipe
    displaySingleRecipe(recipe) {
        // get variables
        const modalTitle = document.querySelector('.modal-title'),
            modalDescription = document.querySelector('.modal-body .description-text'),
            modalIngredients = document.querySelector('.modal-body .ingredient-list .list-group');
            console.log(recipe);
            modalTitle.innerHTML = recipe.strDrink;
            modalDescription.innerHTML = recipe.strInstructions;

            modalIngredients.innerHTML = this.displayingIngredients(recipe);
    }
    
    // Displays a cutom message

    printMessage(message, className) {
        const div = document.createElement('div');

        div.innerHTML = `
            <div class="alert alert-dismissable alert-${className}">
                <button type="button" class="close" data-dismiss="alert">X</button>
                ${message}
            </div>
        `;

        const reference = document.querySelector('.jumbotron h1');
        const parentNode = reference.parentElement;
        parentNode.insertBefore(div, reference);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)
    }

    // Clear previous results
    clearResults() {
        const resultsDiv = document.querySelector('#results');
        resultsDiv.innerHTML = '';
    }

}