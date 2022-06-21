import { Container } from "./style"
import img1 from '../../Assets/pessoas.svg'
import img2 from '../../Assets/pessoas1.svg'
import img3 from '../../Assets/estrelas.svg'

export default function Comment(){
    return(
       <Container>
            <h1>Comentarios</h1>
            <div className="container">
                    <div className="bg">
                        <div className="container-info">
                            <img src={img1} alt="" /> <br />
                            <div>
                               <span>Daniel Almeidaa</span>
                            </div>
                            <p>Ótimo serviço! Encantada com a qualidade dos pratos.</p>
                            <img  className="more" src={img3} alt="" />
                        </div>
                    </div>
                    <div className="bg">
                        <div className="container-info">
                            <img src={img2} alt="" /> <br />
                            <div>
                               <span>Ricardo França</span>
                            </div>
                            <p>Não é apenas a comida excelente, o serviço torna .</p>
                            <img className="more" src={img3} alt="" />
                        </div>
                    </div>
            </div> 
       </Container> 
    )
}