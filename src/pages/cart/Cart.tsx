import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeItem } from "../../app/slice/cartSlice";
import { formatCurrency } from "../../utilities/formatCurrency";
import './Cart.scss'

type Props = {};

export default function Cart({}: Props) {
    const { cartItems } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()
    return (
        <div className="Cart py-3 pb-4">
            <h2>Cart Items</h2>
            <div className="cart-items">
                {cartItems && cartItems.length > 0 ? cartItems.map(item => (
                    <div className="item">
                        <div className="left">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="right">
                            <div className="title">{item.name}</div>
                            <div className="middle">
                                <div className="price">Price {formatCurrency(item.price)}</div>
                                <div className="qty">Quantity {item.qty}</div>
                                <div className="total">Total &nbsp;&nbsp;&nbsp;{formatCurrency(item.qty * item.price)}</div>
                            </div>
                            <div className="remove btn btn-danger py-1 px-2 mt-auto" onClick={() => dispatch(removeItem(item.id))}>Remove</div>
                        </div>
                    </div>
                )) : <span className="no-item">"Your Cart is Empty"</span>}
            </div>
        </div>
    );
}
