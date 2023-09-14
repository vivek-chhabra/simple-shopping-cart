import storeItems from "../../data/items.json";
import "./Store.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Item, addItem, deductItem, removeItem } from "../../app/slice/cartSlice";
import { formatCurrency } from "../../utilities/formatCurrency";

type Props = {};

export default function Store({}: Props) {
    const dispatch = useAppDispatch();
    const { cartItems } = useAppSelector((state) => state.cart);

    const handleAdd = (item: Omit<Item, "qty">) => {
        let qty = 0;
        if (cartItems) {
            cartItems.forEach((ele) => {
                if (ele.id === item.id) {
                    qty = ele.qty;
                }
            });
        }
        const newCartItem: Item = { ...item, qty: qty + 1 || 1 };
        dispatch(addItem(newCartItem));
    };

    const handleDeduct = (id: number) => {
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === id) {
                    dispatch(deductItem({ qty: cartItems[i].qty - 1, id }));
                }
            }
            if (cartItems.every((item) => item.id !== id)) alert("Item is not available in the cart!");
        } else {
            alert("Item is not available in the cart!");
        }
    };

    const getQty = (id: number) => {
        if (cartItems) {
            const ele = cartItems.filter((ele) => ele.id === id);
            if (ele.length === 0) {
                return 0;
            }
            return ele[0].qty;
        }
        return 0;
    };

    return (
        <div className="Store py-4 pb-5">
            <h2 className="text-center text-dark mb-4">Store</h2>
            <div className="items">
                {storeItems.map((item) => (
                    <div className="item pb-3">
                        <div className="img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="content">
                            <div className="top">
                                <div className="title">{item.name}</div>
                                <div className="price">{formatCurrency(item.price)}</div>
                            </div>
                            <div className="bottom">
                                <i className="fa-solid fa-plus" onClick={() => handleAdd(item)}></i>
                                <i className="fa-solid fa-minus" onClick={() => handleDeduct(item.id)}></i>
                                <div className="remove btn btn-danger py-1 px-2" onClick={() => dispatch(removeItem(item.id))}>
                                    Remove
                                </div>
                                <div className="no-of-items">{getQty(item.id)} units in cart</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
