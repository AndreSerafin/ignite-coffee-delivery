import logo from '../../assets/imgs/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionsSession, HeaderComponent } from './styles'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderComponent>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <ActionsSession>
        <button>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </button>
        <NavLink to={'/checkout'}>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ActionsSession>
    </HeaderComponent>
  )
}
