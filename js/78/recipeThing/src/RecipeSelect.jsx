
export default function RecipeSelect({ recipes , setSelectedRecipe}) {
    return (
        <>
              <select onChange={(e) => setSelectedRecipe(recipes[parseInt(e.target.value)])}>
                <option hidden>Choose a recipe</option>
                {recipes?.map((r, index) => (
                    <option value={index}>{r.name}</option>
                ))}
            </select>
        </>
    )
}