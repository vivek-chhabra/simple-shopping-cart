import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useAppSelector } from "../app/hooks";

type Props = {};

export default function Navbar({}: Props) {
    const { cartItems } = useAppSelector((state) => state.cart);
    return (
        <div className="Navbar">
            <nav className="navbar shadow-lg rounded-bottom-4 navbar-expand-lg bg-body-tertiary sticky-top ">
                <div className="container-fluid container">
                    <div className="navbar-brand fw-bold">CartVilla</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/store" className="nav-link">
                                    Store
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/cart">
                        <i className="fa-solid fa-cart-shopping text-xl">
                            <div>{cartItems ? cartItems.length : "0"}</div>
                        </i>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}
