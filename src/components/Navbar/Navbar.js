import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                TOPDOC
            </div>
            <div className='right_nav'>
                <Link to={"/"} className='acc_link'>
                    Je prends rendez-vous
                </Link>
                <Link to={"/"} className='link'>
                    Se connecter
                </Link>
            </div>
        </nav>
    )
}

export default Navbar