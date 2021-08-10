import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux'
import { mostarNavBar } from '../../actions/ui';
import { Link } from 'react-router-dom';

export const Header = () => {

    const {navBar} = useSelector(state => state.ui)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(mostarNavBar(navBar))
    }

    return (
        <header className="memorice__header">
            <img src="https://cdn.discordapp.com/attachments/823026225194336286/870417421859684392/120x120.png" className="memorice__header-logo" alt="nashor spacial"/>
            <h1 className="memorice__header-title">MEMORICE SPACIAL</h1>
            <FontAwesomeIcon icon= {faBars}  size="2x" onClick={handleClick} className="memorice__icon-header"/>
            <nav className="memorice__nav-laptop">
                <ul>
                    <Link className="memorice__nav-laptop-Link" to="/">Inicio</Link>
                    <Link className="memorice__nav-laptop-Link" to="/rank">Rank</Link>
                </ul>
            </nav>
        </header>
    )
}




