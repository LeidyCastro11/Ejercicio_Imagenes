import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
.ContainerText {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    font-family: sans-serif;
    font-size: 17px;
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
`;

export default GlobalStyles;