
import './Header.css'

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__brand">
                    <img src="./logo192.png" alt="" className="brand__logo" />
                </div>

                <div className="navbar__nav__items">
                    <div className="nav__items">
                        <button className="button__primary">Order Food</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;