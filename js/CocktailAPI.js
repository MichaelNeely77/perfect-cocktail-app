class CocktailAPI {

    async getDrinksByName(name) {
        // SEarch by name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    async getDrinksByIngredient(ingredient) {
        // Search by Ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Wait for response andreturn JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get single recipe
    async getSingleRecipe(id) {
        // Search by Ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        // Wait for response andreturn JSON
        const recipe = await apiResponse.json();

        return {
            recipe
        }
    }

    // Retrieves drink categories
    async getCategories() {
        const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        // Wait for the response
        const categories = await apiResponse.json();

        return {
            categories
        }
    }

    // Get Drinks By Category
    async getDrinksByCategory( category ) {
        // SEarch by Category
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        // Wait for response andreturn JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get drinks by Alcohol or Non-alcohol
    async getDrinksByAlcohol(term) {
        // Search drinks by alcohol
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
        // Wait for response andreturn JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }   
}