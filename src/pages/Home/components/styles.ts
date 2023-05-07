import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  padding-bottom: 1.25rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 16rem;
  border-radius: 0.375rem 2.25rem;

  background: ${(props) => props.theme['base-card']};

  > span {
    margin: 0.75rem 2.125rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    margin-top: 0.75rem;
    font-weight: bold;
    background-color: ${(props) => props.theme['brand-yellow-light']};
    color: ${(props) => props.theme['brand-yellow-dark']};
    font-size: 0.625rem;
  }
  h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  button {
    background: none;
    border: 0;

    cursor: pointer;
  }

  p {
    max-width: 13.5rem;
    margin: 1rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
  img {
    margin-top: -1.25rem;
    width: 7.5rem;
  }
`

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  width: 4.5rem;
  background: ${(props) => props.theme['base-button']};

  svg {
    color: ${(props) => props.theme['brand-purple']};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme['brand-purple-dark']};
    }
  }
`

export const PriceSession = styled.div`
  gap: 1.4375rem;
  display: flex;
  align-items: center;

  > div {
    > span {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.75rem;
      > span {
        margin-left: 0.2rem;
        font-family: 'Baloo 2';
        font-size: 1.5rem;
        font-weight: 800;
      }
    }
  }
`
export const ActionsSession = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    border-radius: 6px;
    display: flex;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['brand-purple-dark']};
    transition: 0.3s;

    &:hover {
      background-color: ${(props) => props.theme['brand-purple']};
    }

    svg {
      color: ${(props) => props.theme['base-white']};
    }
  }
`
