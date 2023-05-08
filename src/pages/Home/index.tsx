import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeContainer,
  CoffeeList,
  HomeContainer,
  IntroSession,
} from './styles'

import introImage from '../../assets/imgs/intro-image.png'
import { CoffeeCard } from './components'

export function Home() {
  return (
    <HomeContainer>
      <IntroSession>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ul>
              <li>
                <ShoppingCart size={32} weight="fill" /> Compra simples e segura
              </li>

              <li>
                <Package size={32} weight="fill" />
                Embalagem mantém o café intacto
              </li>
              <li>
                <Timer size={32} weight="fill" />
                Entrega rápida e rastreada
              </li>
              <li>
                <Coffee size={32} weight="fill" />O café chega fresquinho até
                você
              </li>
            </ul>
          </div>
          <img src={introImage} alt="" />
        </div>
      </IntroSession>
      <CoffeeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
