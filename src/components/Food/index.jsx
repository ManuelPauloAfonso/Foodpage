import Food1 from '../../Assets/food.png'


import {Container} from "./style";

export default function Food(){
    return(
        <Container>
                <div>
                    <img src={Food1} alt="" />
                </div>
                <div className='work'>
                    <h1>Feita de forma Tradicional</h1>
                    <p>Loreem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className='link'>
                       <a className='' href="">Ler mais sobre o modo de preparo</a>
                    </div>
                </div>
        </Container>
    )
}