import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}
html{
    font-size: 62.5%;
}
body{
    font-size: 1.6rem;
}
a{
    text-decoration: none;
}
input{
    font-family: 'Montserrat', sans-serif;

}

li{
    list-style: none;
}
.container{
    max-width: 1229px;
    margin: 0 auto;

}
`