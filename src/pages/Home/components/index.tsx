import { ActionsSession, CardContainer, PriceSession, Select } from './styles'
import expressoCoffee from '../../../assets/coffee-imgs/expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { coffees } from '../../../coffees'

type CoffeeType = typeof coffees

interface PropsType {
  coffeeInfos: CoffeeType
}

export function CoffeeCard({ coffeeInfos }: PropsType) {
  return (
    <CardContainer>
      <img src={expressoCoffee} alt="" />
      <span>tradicional</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <PriceSession>
        <div>
          <span>
            R$<span>9,90</span>
          </span>
        </div>
        <ActionsSession>
          <Select>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </Select>
          <button>
            <ShoppingCart size={32} weight="fill" />
          </button>
        </ActionsSession>
      </PriceSession>
    </CardContainer>
  )
}
