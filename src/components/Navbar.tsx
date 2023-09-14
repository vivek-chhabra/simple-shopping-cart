import { NavLink } from "react-router-dom";
import './Navbar.scss'

type Props = {};

export default function Navbar({}: Props) {
    return (
        <div className="Navbar">
            <nav className="navbar shadow-lg rounded-bottom-4 navbar-expand-lg bg-body-tertiary sticky-top ">
                <div className="container-fluid container">
                    <a className="navbar-brand fw-bold" href="#">
                        CartVilla
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/store' className="nav-link active">
                                    Store
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link active">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <i className="fa-solid fa-cart-shopping text-xl">
                        <div>1</div>
                    </i>
                </div>
            </nav>
        </div>
    );
}
