import Banner from '../../Assets/banner.svg'
import {Container} from './style'



export default function Banner1(){
    return(
        <Container>
            <div className='baner'>
                <h1>Comida Oriental</h1>
                <p>A culináriaa Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.</p>
                <button>Cardapio</button>
            </div>
            <div>
                     <img src={Banner} alt="" /> 
            </div>
        </Container>
    )
}