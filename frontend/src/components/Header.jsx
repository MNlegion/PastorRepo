import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>CNGC</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>
            <li>
                <Link to='/logout'>
                    <FaSignOutAlt /> Logout
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header