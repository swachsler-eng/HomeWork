export default function RecipeDisplay({ recipes }) {

    return (
        <>
            <h2>{ recipes.name}</h2>
            <p>{ (recipes.ingredients).join(',')}</p>
        </>
    )
}
