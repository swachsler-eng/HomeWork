
export default function AddRecipe({ onAddRecipe }) {
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                const name = e.target.name.value
                const ingredients = e.target.ingredients.value.split(',')
                onAddRecipe({ name, ingredients })
            }}>
                <label>name
                    <input type="text" id="name"></input>
                </label>
                <label>ingredients (separate with commas)
                    <input type="text" id="ingredients"></input>
                </label>
                
                <button type="submit">Add Recipe</button>
        </form>
        </>
    )
}