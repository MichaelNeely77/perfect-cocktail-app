// INstantiate the clssses
const ui = new UI();





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
        ui.printMessage('Please add somthing into the form', 'danger');
    } else {
        console.log('Query the REST API');
    }
}