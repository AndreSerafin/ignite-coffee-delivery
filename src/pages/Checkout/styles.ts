import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
`

export const Form = styled.form`
  display: flex;
  gap: 2rem;
  width: 70rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const InputSession = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.75rem;
  input {
    padding: 0.75rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
  }

  input:nth-child(1) {
    width: 12.5rem;
  }

  input:nth-child(2) {
    width: 35rem;
  }

  input:nth-child(3) {
    width: 12.5rem;
  }

  div:nth-child(4) {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};

    input {
      border: none;
      background: transparent;
      box-shadow: none;
    }
    label {
      width: max-content;
      margin-right: 0.75rem;
      font-style: italic;
      color: ${(props) => props.theme['base-label']};
    }

    &:focus-within {
      box-shadow: 0 0 0 2px ${(props) => props.theme['brand-yellow-dark']};
    }
  }
  input:nth-child(5) {
    width: 12.5rem;
  }
  input:nth-child(6) {
    width: 17.25rem;
  }
  input:nth-child(7) {
    width: 3.75rem;
  }
`
export const AdressSession = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  width: 40rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    div:first-child {
      display: flex;
      gap: 0.5em;

      p {
        font-size: 1rem;
        margin-bottom: 0.125rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
      svg {
        color: ${(props) => props.theme['brand-yellow-dark']};
      }
    }
  }
`

export const PaymentSession = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  div:first-child {
    display: flex;
    gap: 0.5em;

    p {
      font-size: 1rem;
      margin-bottom: 0.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
    svg {
      color: ${(props) => props.theme['brand-purple-dark']};
    }
  }

  > div:last-child {
    display: flex;
    margin-top: 2rem;
    gap: 0.75rem;

    button {
      font-size: 0.75rem;
      gap: 0.75rem;
      width: 11.125rem;
      display: flex;
      text-transform: uppercase;
      align-items: center;
      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      padding: 1rem;
      cursor: pointer;

      svg {
        color: ${(props) => props.theme['brand-purple']};
      }
    }
  }
`

export const SelectedCoffeesSession = styled.div`
  width: 28rem;
`
