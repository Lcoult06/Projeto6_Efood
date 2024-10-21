import { HeaderBar, Link, LinkCart, LinkItem } from './styles'
import HeaderImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${HeaderImg})` }}>
    <div className="container">
      <nav>
        <Link>
          <LinkItem>
            <a href="#">Restaurantes</a>
          </LinkItem>
        </Link>
      </nav>
      <img src={logo} alt="EPLAY" />
      <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
