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
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`);
        // Wait for response andreturn JSON
        const recipe = await apiResponse.json();

        return {
            recipe
        }
    }
}