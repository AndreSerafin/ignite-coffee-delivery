import expresso from '../assets/coffee-imgs/expresso.png'
import americanExpresso from '../assets/coffee-imgs/american.png'
import creamyExpresso from '../assets/coffee-imgs/creamyExpresso.png'
import coldExpresso from '../assets/coffee-imgs/coldCoffee.png'
import coffeWithMillk from '../assets/coffee-imgs/coffeeWithMilk.png'
import latte from '../assets/coffee-imgs/latte.png'
import capuccino from '../assets/coffee-imgs/capuccino.png'
import machiatto from '../assets/coffee-imgs/macchiato.png'
import mochaccino from '../assets/coffee-imgs/mochaccino.png'
import hotChocolate from '../assets/coffee-imgs/hotChocolate.png'
import cuban from '../assets/coffee-imgs/cuban.png'
import hawain from '../assets/coffee-imgs/hawaian.png'
import arabian from '../assets/coffee-imgs/arabian.png'
import irish from '../assets/coffee-imgs/irish.png'

export const coffees = [
  {
    coffeeName: 'Expresso Tradicional',
    categories: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imgUrl: expresso,
  },
  {
    coffeeName: 'Expresso Americano',
    categories: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imgUrl: americanExpresso,
  },
  {
    coffeeName: 'Expresso Cremoso',
    categories: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imgUrl: creamyExpresso,
  },
  {
    coffeeName: 'Expresso Gelado',
    categories: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7.5,
    imgUrl: coldExpresso,
  },
  {
    coffeeName: 'Café com Leite',
    categories: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 6.8,
    imgUrl: coffeWithMillk,
  },
  {
    coffeeName: 'Latte',
    categories: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 8.2,
    imgUrl: latte,
  },
  {
    coffeeName: 'Cappuccino',
    categories: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 8.5,
    imgUrl: capuccino,
  },
  {
    coffeeName: 'Macchiato',
    categories: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 7.2,
    imgUrl: machiatto,
  },
  {
    coffeeName: 'Mochaccino',
    categories: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.5,
    imgUrl: mochaccino,
  },
  {
    coffeeName: 'Chocolate Quente',
    categories: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 7.9,
    imgUrl: hotChocolate,
  },
  {
    coffeeName: 'Cubano',
    categories: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 10,
    imgUrl: cuban,
  },
  {
    coffeeName: 'Havaiano',
    categories: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 6.5,
    imgUrl: hawain,
  },
  {
    coffeeName: 'Árabe',
    categories: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 8.9,
    imgUrl: arabian,
  },
  {
    coffeeName: 'Irlandês',
    categories: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.5,
    imgUrl: irish,
  },
]
