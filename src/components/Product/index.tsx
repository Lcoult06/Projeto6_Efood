import ProdutoImg from '../../assets/images/pizza.png'
import { ButtonCard } from '../Button/styles'
import { Card, TitleCard, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src={ProdutoImg} alt="Pizza" />
    <TitleCard>Pizza Marguerita</TitleCard>
    <Descricao>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simlicidade!
    </Descricao>
    <ButtonCard>Adicionar ao carrinho</ButtonCard>
  </Card>
)

export default Product
