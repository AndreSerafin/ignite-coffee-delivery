import { ActionsSession, CardContainer, PriceSession, Select } from './styles'
import expressoCoffee from '../../../assets/coffee-imgs/expresso.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface CoffeeType {
  coffeeName: string
  categories: string[]
  price: number
  description: string
  imgUrl: string
}

interface PropsType {
  coffeeInfos: CoffeeType
}

export function CoffeeCard({ coffeeInfos }: PropsType) {
  return (
    <CardContainer>
      <img src={coffeeInfos.imgUrl} alt="" />
      <div>
        {coffeeInfos.categories.map((category) => {
          return <span key={category}>{category}</span>
        })}
      </div>
      <h3>{coffeeInfos.coffeeName}</h3>
      <p>{coffeeInfos.description}</p>
      <PriceSession>
        <div>
          <span>
            R$<span>{coffeeInfos.price.toString().padEnd(4, '0')}</span>
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
