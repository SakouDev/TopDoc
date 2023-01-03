import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaHandHoldingMedical } from 'react-icons/fa'

function Navbar({ navbarLinks, setNavbarLinks }) {
    return (
        <nav className='navbar'>
            <Link to={'/'} onClick={() => setNavbarLinks(true)}>
                <FaHandHoldingMedical className='logo'/>
            </Link>
            {navbarLinks &&
                <div className='right_nav'>
                    <div className='btn_container'>
                        <Link to={"/connexion"} className='acc_link' onClick={() => setNavbarLinks(false)}>
                            Je prends rendez-vous
                        </Link>
                        <span className='btn_3D'></span>
                    </div>
                    <Link to={"/"} className='link'>
                        Je suis praticien
                    </Link>
                </div>
            }
        </nav>
    )
}

export default Navbar