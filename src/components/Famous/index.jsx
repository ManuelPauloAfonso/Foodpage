import img1 from '../../Assets/img1.svg'
import img2 from '../../Assets/img2.svg'
import img3 from '../../Assets/img3.svg'
import { Container } from './style'


export default function Famous(){
    return(
        <>
            <div className='container'>
            <Container>
            <h1>Mais Populares</h1>
            <div className="container1">

                <div>
                    <div className='img'>
                      <img src={img1} alt="" />
                    </div>
                    <h3>Ramen de Frango</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='span'>
                        <span>R$ 30</span>
                    </div>
                </div>
                <div>
                    <div className='img'>
                       <img src={img2} alt="" />
                    </div>
                    <h3>Ramen de Frango</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='span'>
                        <span>R$ 30</span>
                    </div>
                </div>
                <div>
                    <div className='img'>
                        <img src={img3} alt="" />
                    </div>
                    <h3>Ramen de Frango</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='span'>
                        <span>R$ 30</span>
                    </div>
                </div>

            </div>
        </Container>
            </div>
        </>
       
    )
}