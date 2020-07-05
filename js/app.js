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
       cocktail.getDrinksByName(searchTerm)
       .then(cocktails => {
            if(cocktails.cocktails.drinks === null) {
        ui.printMessage('There are no cocktails for that term', 'danger');
        
            }
       })
    }
}