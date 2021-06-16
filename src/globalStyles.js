import {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Hind-Light.woff'

const GlobalStyles = createGlobalStyle`
.ContainerText {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    font-family: sans-serif;
    font-size: 17px;
}

.ContainerText p{
    font-family: 'Hind';
    font-size: 15px;
    margin: 0 20px;
}

.ContainerImage{
    display: flex;
    width: 50%;
    height: 100%;
    margin-right: 10px;
    justify-content: center;
}

ContainerImage img {
    width: 100%;
    height: auto;
}

//Fuentes

@font-face {
    font-family: 'Hind';
    src: local('Hind'), url(${PrimaryFont}) format('woff');
}

//Estilos para botones

button {
    border-radius: 20%;
    width: auto;
    height: 50px;
}

button a{
    text-decoration: none;
    color: black;
}
`;

export default GlobalStyles;