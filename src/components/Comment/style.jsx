
import styled from "styled-components"


export const Container = styled.section`
font-family: 'Montserrat', sans-serif;


margin-top: 6.25rem;
h1{
    font-size: 3rem;
    line-height: 2.438rem;
    text-align: center;

}


.container1{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.50rem;
    margin-top: 3rem;
}
.container-info{
    max-width: 22.375rem;
    div{
        margin-top: 1rem;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.438rem;
        color: #292929;
    }
    p{
        margin-top: 1rem;
        font-weight: 400;
        font-size: 1.5rem;
        color: #616161;
        line-height: 2.375rem;
    }
    .more{
        margin-top: 1rem;

    }
}
.bg{
    border-radius: 16px;
    background: #F3F3F3;
    width: 37.75rem;
    height: 28rem;
    padding-left: 2.5rem;
    padding-top: 2.563rem;

}

@media (max-width: 999px) {

    h1{
        text-align: center;
    }
    .container1{
        text-align: center;
        justify-content: center;
        
    }
    .bg{
        width: 28rem;
        text-align: center;
    }
    
}

`