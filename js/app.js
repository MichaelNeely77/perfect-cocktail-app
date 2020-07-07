// INstantiate the clssses
const ui = new UI();
    cocktail = new CocktailAPI();





// Add the event listeners

function eventListeners() {

    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
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
                serverResponse = cocktail.getDrinksByName(searchTerm);
                break;
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient(searchTerm);
                break;
                
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