import { Container } from './style'
import Logo from '../../Assets/FoodJP.svg'

export default function Menu(){
    return(
        <>
            <div className='container'>
                <Container>
                    <a href=""> <img src={Logo} alt="" /> </a>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Cardapio</li>
                            <li>Sobre</li>
                        </ul>
                    </nav>
                    <button>Entrar</button>
                </Container>
            </div>
        </>
    )
}