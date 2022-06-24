import styled from "styled-components";


export const Container = styled.header`

font-family: 'Inter', sans-serif;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

align-items: center;
font-size: 1.5rem;
padding-top: 2.5rem;


button{
    border: 2px solid #292929;
    border-radius: 10px;
    width: 11.75rem;
    height: 3.063rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    line-height: 1.813rem;
    font-size: 1.5rem;



}
ul{
    display: flex;
    flex-wrap: wrap;
    gap: 5.688rem;
    align-items: center;
}

.img{
    display: none;
}

@media (max-width: 999px) {


    
        justify-content: space-around;
    

    .img{
        display: block;
    }
    button{
        display: none;
    }
    nav{
        display: none;
    }
    
}


`
