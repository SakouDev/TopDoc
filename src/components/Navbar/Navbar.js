import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaHandHoldingMedical } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to={'/'}>
                <FaHandHoldingMedical className='logo'/>
            </Link>
                <div className='right_nav'>
                    <div className='btn_container'>
                        <Link to={"/connexion"} className='acc_link'>
                            Je me connecte
                        </Link>
                        <span className='btn_3D'></span>
                    </div>
                    <Link to={"/"} className='link'>
                        Je m'inscris
                    </Link>
                </div>
        </nav>
    )
}

export default Navbar