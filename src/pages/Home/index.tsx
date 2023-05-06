import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IntroSession } from './styles'

import introImage from '../../assets/imgs/intro-image.png'

export function Home() {
  return (
    <IntroSession>
      <div>
        <h1>Encontre o café perfeito para qualque hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>
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
            <Coffee size={32} weight="fill" />O café chega fresquinho até você
          </li>
        </ul>
      </div>
      <img src={introImage} alt="" />
    </IntroSession>
  )
}
