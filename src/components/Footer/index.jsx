
import {Container} from './style'
import Logo from '../../Assets/FoodJP.svg'

export default function Footer(){
    return(
        <Container>
            <ul>
                <img src={Logo} alt="" />
            </ul>
            <ul>
                <h1>Contactos</h1>
                <li>+55 21 9999-9999</li>
                <li>email@gmail.com</li>
            </ul>
            <ul>
                <h1>Sobre Nós</h1>
                <li>Menu</li>
                <li>Valores</li>
                <li>Paginas Principal</li>
            </ul>
            <ul>
                <h1>Serviçoes</h1>
                <li>Entrega</li>
                <li>Retirada</li>
            </ul>

        </Container>
    )
}