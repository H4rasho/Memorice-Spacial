import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth'


export const NavBar = () => {
    const {navBar} = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav className={`${navBar ? "memorice__NavBar" : "dispay-none"}`}>
            <ul>
                <Link className="memorice__nav-Link" to="/">Inicio</Link>
                <Link className="memorice__nav-Link" to="/rank">Rank</Link>
                <Link 
                    className="memorice__nav-Link" to="/"
                    onClick={handleLogout}
                >    
                Salir</Link>

            </ul>
        </nav>
    )
}
