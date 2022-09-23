import { useContext } from 'react';
import {CartContext} from '../../Contexts/CartContext';
import './Cart.css'

const Cart = () => {
    const {myCart, total, setTotal, addToCart} = useContext(CartContext);

    const handleCheckout = () => {
        console.log('>>Check out!')
        setTotal(0);
        addToCart([]);
    }

    return ( 
        <>
        <section className="cart-container">
            <div className="cart-header">CHECK OUT:</div>
            <div className="cart-items">
                {console.log('>>Check myCart', myCart)}
                {myCart.length > 0 && 
                myCart.map((dog) => {
                    return(
                        <>
                        <div className="cart-items">
                            <img src={dog.imageUrl} className="cart-item-img"></img>
                            {dog.name} - {dog.price}
                        </div>
                        
                        </>
                    )
                })}
                <div className="cart-total">TOTAL: {total.toString()}</div>
                <button className="cart-checkout" onClick={handleCheckout}>CHECK OUT</button>
            </div>
        </section>
        </>
     );
}
 
export default Cart;