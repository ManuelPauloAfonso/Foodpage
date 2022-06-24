import styled from 'styled-components'

export const Container = styled.section`

font-family: 'Montserrat', sans-serif;
display: flex;
align-items: center;
flex-wrap: wrap;
padding-top: 8rem;
justify-content: center;
gap: 7.75rem;
margin: 0 auto;

img{
    width: 37.75rem;
    height: 31.25rem;
}

.work{
    max-width: 30.438rem;

    p{
        font-size: 1.5rem;
        margin-top: 1.5rem;
        color: #292929;
        font-weight: 400;
        line-height: 2.4rem;
    }
    h1{
        font-size: 3rem;
    }
    a{
        color: #DA2535;
        font-weight: 500;
        font-size: 1.5rem;
    }

}
.link{
    margin-top: 2.5rem;

}

@media (max-width: 999px) {
    img{
        width: 25rem;
        height: 21.875rem;
    }
    .work{
        text-align: center;
    }
}

`




