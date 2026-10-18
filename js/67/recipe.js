
const recipeList = $("#recipes");
const display = $("#recipeDisplay");
let recipe;

let currentRec;

async function getRecipes(){
    const a = await fetch("recipes.json");
    const rec = await a.json();
    console.log(rec);
    // const row =
    //     `<option value="cookies">${rec[0].name}</option>
    //     <option value="beef">Roast Beef</option>
    //     <option value="soup">Chicken Soup</option>`;
 
    rec.forEach((e) => {
        recipeList.append(`<option value="${e.id}">${e.name}</option>`);  
    });
      
console.log(rec[0]);    
    return rec;
};
getRecipes();
recipeList.on('change',async (e) => {
    currentRec = e.target.value;
    console.log(currentRec);
    if (Number(currentRec) === 0) {
        display.empty();
        return;
    };
    recipe = await (await fetch(`recipes/${currentRec}.json`)).json();
    console.log(recipe);

    console.log(recipe.ingredients);
    display.html(`<h2>${recipe.name}</h2><img src=${recipe.image}><p>${recipe.ingredients}</p>`);
//     let ingredientsList;
// try {
//     ingredientsList = await (await fetch("recipeIng.json")).json();
//     console.log(ingredientsList);
// } catch (e) {
//     console.error(e);
// }

// ingredientsList.forEach((e) => {
//     if(e.id === currentRec){
//      console.log(e.id)
// }
// })
});
;
    








 
