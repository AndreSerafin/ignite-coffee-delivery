import styled from 'styled-components'
import backgoundImage from '../../assets/imgs/intro-background.png'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const IntroSession = styled.div`
  padding: 5.875rem 0 6.75rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: center;
  background-image: url(${backgoundImage});
  background-size: cover;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70rem;

    > div {
      width: 36.75rem;
    }

    h1 {
      font-family: 'Baloo 2';
      font-size: 3rem;
      line-height: 3.9rem;
      font-weight: 900;
      color: ${(props) => props.theme['base-title']};
    }

    p {
      margin: 1rem 0 4.125rem 0;
      font-size: 1.25rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }

    ul {
      gap: 1rem;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      color: ${(props) => props.theme['base-text']};
    }

    li {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      svg {
        padding: 0.5rem;
        border-radius: 999px;
        color: ${(props) => props.theme['base-white']};
      }
    }

    li:nth-child(1) {
      width: 250px;

      svg {
        background: ${(props) => props.theme['brand-yellow-dark']};
      }
    }

    li:nth-child(2) {
      svg {
        background: ${(props) => props.theme['base-text']};
      }
    }
    li:nth-child(3) {
      width: 250px;
      svg {
        background: ${(props) => props.theme['brand-yellow']};
      }
    }

    li:nth-child(4) {
      svg {
        background: ${(props) => props.theme['brand-purple']};
      }
    }

    img {
      width: 29.75rem;
    }

    div {
      display: flex;

      flex-direction: column;
    }
  }
`
export const CoffeeContainer = styled.div`
  margin-bottom: 9.875rem;
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 70rem;

  h2 {
    margin-bottom: 3.375rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeList = styled.div`
  display: flex;
  gap: 2rem;
  width: 70rem;
  flex-wrap: wrap;
`
