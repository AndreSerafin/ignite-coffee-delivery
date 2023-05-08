import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  margin: 0 10rem;
  justify-content: space-between;
  align-items: center;

  > div > div {
    h1 {
      color: ${(props) => props.theme['brand-yellow-dark']};
    }
    > p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
    }

    div > {
      p {
        color: ${(props) => props.theme['base-text']};
      }
      strong {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  img {
    margin-top: 2rem;
    width: 30.75rem;
    align-self: flex-end;
  }
`
export const Infos = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 1px;
  flex-direction: column;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    linear-gradient(
      to right,
      ${(props) => props.theme['brand-yellow-dark']},
      ${(props) => props.theme['brand-purple']}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 8.25rem 2rem 2rem;
    > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      svg {
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        border-radius: 999px;
        color: ${(props) => props.theme['base-white']};
      }
    }
  }

  div:nth-child(1) {
    svg {
      background: ${(props) => props.theme['brand-purple']};
    }
  }
  div:nth-child(2) > svg {
    background: ${(props) => props.theme['brand-yellow']};
  }
  div:nth-child(3) > svg {
    background: ${(props) => props.theme['brand-yellow-dark']};
  }
`
