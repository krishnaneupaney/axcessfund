import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
// import { Button } from './Button';
import ContactForm from './pages/Contact';
import Login from './pages/Login';
import * as actionType from '../constants/actionTypes';
import useStyles from '../styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };


    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Axcess Fund <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                How this works
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu} onSubmit={ContactForm}>
                                Contact Us
                            </Link>

                        </li>

                        <li className='nav-item'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu} onSubmit={Login}>
                                Login
                            </Link>
                        </li>

                    </ul>
                    <Toolbar className={classes.toolbar}>
                        {user?.result ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )}
                    </Toolbar>
                    {/* <Button buttonStyle='btn--outline' Link to="/login" onClick={closeMobileMenu} onSubmit={Login}>Login</Button> */}

                </div>
            </nav>
        </>
    )
}

export default Navbar
