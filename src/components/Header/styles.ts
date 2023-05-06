import styled from 'styled-components'

export const HeaderComponent = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70rem;
  margin: 2rem 10rem;
`
export const ActionsSession = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.875rem;

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: ${(props) => props.theme['brand-purple-light']};
    color: ${(props) => props.theme['brand-purple-dark']};
    font-weight: 400;
    padding: 0.625rem 0.5rem;
    border-radius: 6px;

    & svg {
      color: ${(props) => props.theme['brand-purple']};
    }
  }

  & a:last-child {
    display: flex;
    flex: 1;
    padding: 0.625rem;
    border-radius: 6px;
    background: ${(props) => props.theme['brand-yellow-light']};

    & svg {
      color: ${(props) => props.theme['brand-yellow-dark']};
    }
  }
`
