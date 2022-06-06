import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startLogout } from "../../store/actions/auth";


export const Navbar = () => {

    const dispatch = useDispatch();

    const {name} = useSelector(state => state.auth);
    const {logged} = useSelector(state => state.wallet);

    const handleLogout = ()=>{
        dispatch(startLogout());
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link 
                to='/coins' 
                className='navbar-brand navitem'
            >
                FastInvest

            </Link>

            <div className="navbar-collapse">
               
                    {logged&&<NavLink 
                        className='nav-link navitem'
                        to='/wallet'
                    >
                        Ir a Wallet
                    </NavLink>}

                    <NavLink 
                        className='nav-link navitem'
                        to='/coins'
                    >
                        Monedas
                    </NavLink>

                    {!logged&&<NavLink
                        className='nav-link navitem'
                        to='/walletLogin'
                    >
                        Registrar Wallet
                    </NavLink>}
            </div>
            
            <div className="d-flex">

                <ul className='navbar-nav ml-auto'>

                    <span className='nav-item nav-link text-info'>{name}</span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>

            </div>

        </nav>
    )
}