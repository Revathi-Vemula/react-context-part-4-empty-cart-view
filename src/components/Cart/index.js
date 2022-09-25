import Header from '../Header'
import CartContext from '../../context/CartContext'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const isCartListEmpty = cartList.length === 0

      return (
        <div>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              <h1 className="cart-heading">My Cart</h1>
              {isCartListEmpty ? <EmptyCartView /> : <CartListView />}
            </div>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
