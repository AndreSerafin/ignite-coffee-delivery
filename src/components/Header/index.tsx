import logo from '../../assets/imgs/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ActionsSession, HeaderComponent } from './styles'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderComponent>
      <img src={logo} alt="" />
      <ActionsSession>
        <div>
          <MapPin size={22} weight="fill" />
          <p>Anápolis, GO</p>
        </div>
        <NavLink to={'/'}>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </ActionsSession>
    </HeaderComponent>
  )
}
