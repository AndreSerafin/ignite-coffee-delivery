import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,input, textarea, p, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['brand-yellow-dark']};
    border-radius: 6px;
  }

  h1,h2,h3,h4,h5 {      
    font-family: 'Baloo 2';
  }

  body{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
    -webkit-font-smoothing: antialiased;
  }
`
