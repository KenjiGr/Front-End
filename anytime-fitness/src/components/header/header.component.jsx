import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.styles.scss';
import {axiosWithAuth} from '../../utils/axiosWithAuth'
// import {ReactComponent as Logo} from '../../assets/original.svg'
import CartIcon from '../cart-icon/cart-icon.component'
// import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser }) => (
    <div className='header'>
        {/* <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link> */}
        <div className='options'>
            <Link className='option' to='/Classes'>
                CLASSES
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => axiosWithAuth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {/* <CartDropdown/> */}
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);