import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ navbarLinks, setNavbarLinks }) {
    return (
        <nav className='navbar'>
            <Link to={'/'} onClick={() => setNavbarLinks(true)}>
                TOPDOC
            </Link>
            {navbarLinks &&
                <div className='right_nav'>
                    <Link to={"/connexion"} className='acc_link' onClick={() => setNavbarLinks(false)}>
                        Je prends rendez-vous
                    </Link>
                    <Link to={"/"} className='link'>
                        Je suis praticien
                    </Link>
                </div>
            }
        </nav>
    )
}

export default Navbar