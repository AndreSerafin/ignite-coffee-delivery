import { Minus, Plus, Trash } from 'phosphor-react'
import expresso from '../../../../assets/coffee-imgs/expresso.png'
import { SelectCoffeeNumber, SelectedCoffeeCardContainer } from './styles'

export function SelectedCoffeeCard() {
  return (
    <SelectedCoffeeCardContainer>
      <div>
        <img src={expresso} alt="" />
        <div>
          <p>Expresso Tradicional</p>
          <SelectCoffeeNumber>
            <div>
              <button>
                <Minus weight="bold" size={18} />
              </button>
              <span>1</span>
              <button>
                <Plus weight="bold" size={18} />
              </button>
            </div>
            <button>
              <Trash weight="bold" size={18} /> Remover
            </button>
          </SelectCoffeeNumber>
        </div>
        <p>R$ 9,90</p>
      </div>
    </SelectedCoffeeCardContainer>
  )
}
