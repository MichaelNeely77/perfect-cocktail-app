class CocktailDB {

    // save the recipes into Storage
    saveIntoDB(drink) {
        const drinks = this.getFromDB();

        drinks.push(drink);

        localStorage.setItem('drinks', JSON.stringify(drinks));
    }

    // removes element from local storage
    removeFromDB(id) {
        const drinks = this.getFromDB();
        
        // Loop
        drinks.forEach((drink, index) => {
            if(id === drink.id) {
                drinks.splice(index, 1);
            }
        });

        localStorage.setItem('drinks', JSON.stringify(drinks) );
    }

    getFromDB() {
        let drinks;
        
        if(localStorage.getItem('drinks') === null) {
            drinks = [];
        } else {
            drinks = JSON.parse( localStorage.getItem('drinks') );
        }
        return drinks;
    }


}