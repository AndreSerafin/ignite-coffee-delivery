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

  h1,h2,h3,h4,h5 {
    font-family: 'Baloo 2';
  }

  body{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }
`
