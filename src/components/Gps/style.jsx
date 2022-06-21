import styled from "styled-components";


export const Container = styled.section`
    font-family: 'Montserrat', sans-serif;
    margin-top: 6.25rem;

.h1{
        margin-left: 38rem;
}

.Container{

    display: flex;
    justify-content: center;

    img{
        width: 76.813rem;
        height: 31.25rem;
        border-radius: 16px;
        margin-top: 3rem;

    }
    .form{
        margin-top: 3.5rem;
        display: flex;
        justify-content: center;

        input{
            width: 39.375rem;
            height: 4rem;
            border: 1px solid #292929;
            background: #FBFBFB;
            border-radius: 10px 0px 0px 10px;
            font-size: 1.5rem;
            color: #292929;
            line-height: 123%;
            font-weight: 400;
            padding-left: 1rem;
            

        }
        button{
            width: 11.438rem;
            border-radius: 0px 10px 10px 0px;
            background: #DA2535;
            font-weight: 500;
            line-height: 123%;
            color: #FBFBFB;
            font-size: 1.5rem;
            border: none;


        }
    }
}

`