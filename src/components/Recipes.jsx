import {useState} from 'react'

const elventShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
  };
  
const elventShieldRecipe2 = {
    ...elventShieldRecipe,
    leather: 1,
    refinedMoonstone: 3,
};

function Recipes() {
    const [recipes, setRecipes] = useState({})
    const renderList = ()=>{
        return <ul>
            {Object.keys(recipes).map(key=>{
                return <li>
                    {`${key}: ${recipes[key]}`}
                </li>
            })}
        </ul>
    }
    return (
        <div>
            
            <button onClick={()=>setRecipes(elventShieldRecipe)}>recipes 1</button>
            <button onClick={()=>setRecipes(elventShieldRecipe2)}>recipes 2</button>
            {renderList()}
        </div>
    )
}
  
export default Recipes 
