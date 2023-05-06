import styled from 'styled-components'

export const IntroSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70rem;

  div {
    width: 36.75rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 900;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  ul {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;

    svg:nth-child(1) {
      background: ${(props) => props.theme['base-text']};
    }

    svg {
      padding: 0.5rem;
      border-radius: 999px;
      color: ${(props) => props.theme['base-white']};
      background: ${(props) => props.theme['brand-yellow-dark']};
    }
  }

  li:nth-child(1) {
    width: 250px;
  }

  li:nth-child(3) {
    width: 250px;
  }

  img {
    width: 29.75rem;
  }

  div {
    display: flex;

    flex-direction: column;
  }
`
