import '../styles/index.scss';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

const App = () => {
    return <>
        <section className='hero'></section>
        <main>
            <section>
                <Recipes/>
            </section>
            <img src={sword} alt="sword" width="250px"/>
            <img src={swordSvg} alt="swordSvg" width="250px"/>
        </main>
    </>
} 

export default App;