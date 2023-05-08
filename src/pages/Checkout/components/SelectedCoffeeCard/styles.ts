import styled from 'styled-components'

export const SelectedCoffeeCardContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  gap: 1.25rem;

  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  > div {
    display: flex;
    gap: 1.125rem;
    padding-bottom: 1.5rem;

    border-bottom: 1px solid ${(props) => props.theme['base-button']};
    img {
      width: 4rem;
    }

    > div {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
    }

    > p {
      margin-left: 1rem;
      color: ${(props) => props.theme['base-text']};
      font-weight: bold;
      align-self: flex-start;
    }
  }
  & + & {
    padding-top: 0;
    border-radius: 0;
  }
`
export const SelectCoffeeNumber = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: ${(props) => props.theme['brand-purple']};
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  div:nth-child(1) {
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    background-color: ${(props) => props.theme['base-button']};
  }
  > button {
    border-radius: 6px;
    gap: 0.25rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['base-button']};
  }
`
