import Img1 from '../../Assets/mapa rio.svg'
import { Container } from './style'
export default function Gps(){

    return(
        <>
            <div className='container'>
            <Container>
                <div className='h1'>
                    <h1>Localização</h1>
                </div>
                <div className="Container">
                    <div>
                        <div className='img'>
                            <img src={Img1} alt="" />
                        </div>
                        <div className='form'>
                            <input type="text" placeholder='localização para entrega' />
                            <button>Buscar</button>
                        </div>
                    </div>
                </div>
            </Container>


            </div>
        </>
        
    )
}