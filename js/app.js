// INstantiate the clssses
const ui = new UI();
    cocktail = new CocktailAPI();
    cocktailDB = new CocktailDB();


// Add the event listeners

function eventListeners() {
    // Document Ready
    document.addEventListener('DOMContentLoaded', documentReady);

    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }
    
    // The results div listeners
    const resultsDiv = document.querySelector('#results');
    if(resultsDiv) {
        resultsDiv.addEventListener('click', resultsDelegation);
    }

}

eventListeners();

function getCocktails(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;

    if(searchTerm === '') {
        ui.printMessage('Please add something into the form', 'danger');
    } else {
        // Server response form promise
        let serverResponse;

        // Type of response
        const type = document.querySelector('#type').value;

        // Evaluate the type of method
        switch(type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName( searchTerm );
                break;
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient( searchTerm );
                break;
            case 'category':
                serverResponse = cocktail.getDrinksByCategory( searchTerm );
                break;
            case 'alcohol':
                serverResponse = cocktail.getDrinksByAlcohol( searchTerm );
        }

        ui.clearResults();

        serverResponse.then(cocktails => {
            if(cocktails.cocktails.drinks === null) {
                ui.printMessage('There are no cocktails for that term', 'danger');
            } else {
               if(type === 'name') {
                   // Display with ingredients
                   ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
               } else {
                   // Display without ingredients
                   ui.displayDrinks(cocktails.cocktails.drinks);
               }

            }
       })
    }
}

function resultsDelegation(e) {
    e.preventDefault();

    if(e.target.classList.contains('get-recipe')) {
        cocktail.getSingleRecipe(e.target.dataset.id)
            .then(recipe => {
                // diplays recipe into modal
                ui.displaySingleRecipe(recipe.recipe.drinks[0]);
                // console.log(recipe);
            })
    } 

    if(e.target.classList.contains('favorite-btn')) {
        if(e.target.classList.contains('is-favorite')) {
            e.target.classList.remove('is-favorite');
            e.target.textContent = "+";

        } else {
            e.target.classList.add('is-favorite');
            e.target.textContent = "-";

            // get info
            const cardBody = e.target.parentElement;

            const drinkInfo = {
                id: e.target.dataset.id,
                name: cardBody.querySelector('.card-title').textContent,
                image: cardBody.querySelector('.card-img-top').src
            }
            // console.log(drinkInfo);
            // add into storage
            cocktailDB.saveIntoDB(drinkInfo);
        }
    }
}

// Document Ready
function documentReady() {
    // Select the search category
    const searchCategory = document.querySelector('.search-category');
    if(searchCategory) {
        ui.displayCategories();
    }

    const favoritesTable = document.querySelector('#favorites');
    if(favoritesTable) {
        // Get favorites from local storage
        const drinks = cocktailDB.getFromDB();
        ui.displayFavorites(drinks);
    }
}