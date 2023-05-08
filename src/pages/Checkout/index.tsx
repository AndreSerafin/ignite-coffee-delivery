import { CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  AdressSession,
  CheckoutContainer,
  ConfirmationSession,
  Form,
  InputSession,
  PaymentSession,
  SelectedCoffeesSession,
} from './styles'
import { SelectedCoffeeCard } from './components/SelectedCoffeeCard'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form>
        <div>
          <h2>Complete seu pedido</h2>
          <AdressSession>
            <div>
              <div>
                <MapPinLine size={22} />
                <div>
                  <p>Endereço de entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </div>
              <InputSession>
                <input type="text" placeholder="CEP" />
                <input type="text" placeholder="Rua" />
                <input type="number" placeholder="Número" min={0} />
                <div>
                  <input
                    id="complement"
                    type="text"
                    placeholder="Complemento"
                  />
                  <label htmlFor="complement">Opcional</label>
                </div>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </InputSession>
            </div>
          </AdressSession>
          <PaymentSession>
            <div>
              <CurrencyDollar size={22} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <div>
              <button>
                <CreditCard weight="bold" />
                Cartão de Crédito
              </button>
              <button>
                <CreditCard weight="bold" />
                Cartão de Débito
              </button>
              <button>
                <CreditCard weight="bold" />
                Dinheiro
              </button>
            </div>
          </PaymentSession>
        </div>
        <div>
          <h2>Cafés Selecionados</h2>
          <SelectedCoffeesSession>
            <SelectedCoffeeCard />
            <SelectedCoffeeCard />
            <ConfirmationSession>
              <p>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </p>
              <p>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </p>
              <p>
                <span>Total</span>
                <span>R$ 33,20</span>
              </p>
              <button>CONFIRMAR PEDIDO</button>
            </ConfirmationSession>
          </SelectedCoffeesSession>
        </div>
      </Form>
    </CheckoutContainer>
  )
}
