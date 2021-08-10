import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const NavBar = () => {
    const {navBar} = useSelector(state => state.ui)
    return (
        <nav className={`${navBar ? "memorice__NavBar" : "dispay-none"}`}>
            <ul>
                <Link className="memorice__nav-Link" to="/">Inicio</Link>
                <Link className="memorice__nav-Link" to="/rank">Rank</Link>
            </ul>
        </nav>
    )
}
