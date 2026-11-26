import Header from './Header'
import { useState ,useEffect} from 'react'
import './App.css'
import RecipeDisplay from './RecipeDiplay'
import RecipeSelect from './RecipeSelect';
import NoRecipe from './NoRecipe';
import AddRecipe from './AddRecipe';

function App() {
  const [recipe, setRecipe] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [addingRecipe, setAddingRecipe] = useState(false);
console.log(selectedRecipe)
  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("recipes.json");
        if (!r.ok) {
          throw new Error(`${r.status}-${r.statusText}`)
        }
        const result = await r.json();
        console.log(result);
        setRecipe(result);
        console.log([...result, { "name": "bread" }]);
        setRecipe(prev=>[...prev, { "name": "bread", "ingredients": ["flour", "water", "yeast"] }]);
        console.log(recipe);
      } catch (e) {
        console.error(e);
      }
    }
    )()
  }, [])
  const addRecip = (e) => {
    setRecipe(prev => [...prev, e]);
    setAddingRecipe(prev => !prev);
   }
  return (
    <>
      <Header />
       <RecipeSelect recipes={recipe} setSelectedRecipe={setSelectedRecipe}/>
      
      {
        selectedRecipe ?
          <RecipeDisplay recipes={selectedRecipe} /> :
          <NoRecipe></NoRecipe>
      }
      {!addingRecipe&&<button onClick={() => setAddingRecipe(prev => !prev)} >
        add recipe
      </button>}
      
      {addingRecipe && <AddRecipe onAddRecipe={addRecip} />}
    </>
  )
}

export default App
