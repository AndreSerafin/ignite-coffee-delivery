import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Infos, SuccessContainer } from './styles'
import successImage from '../../assets/imgs/success.svg'
export function Success() {
  return (
    <SuccessContainer>
      <div>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <Infos>
          <div>
            <div>
              <MapPin weight="fill" />
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>
            <div>
              <Timer weight="fill" />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min </strong>
              </div>
            </div>
            <div>
              <CurrencyDollar weight="fill" />
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
        </Infos>
      </div>

      <img src={successImage} alt="" />
    </SuccessContainer>
  )
}
