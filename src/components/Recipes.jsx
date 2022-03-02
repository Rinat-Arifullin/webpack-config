import {useState} from 'react'

const elventShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
  };
  
const test2 = {
    ...elventShieldRecipe,
    leather: 1,
    refinedMoonstone: 3,
};

function Recipes() {
    const [recipes, setRecipes] = useState(null)
    return (
        <div>
            <button onClick={()=>setRecipes(elventShieldRecipe)}>recipes 1</button>
            <button onClick={()=>setRecipes(test2)}>recipes 1</button>
            <p>{JSON.stringify(recipes)}</p>
        </div>
    )
}
  
export default Recipes 
