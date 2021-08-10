import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { MemoriceJuego } from '../components/memorice/MemoriceJuego'
import { Rank } from '../components/memorice/Rank'
import { Footer } from '../components/ui/Footer'
import { Header } from '../components/ui/Header'
import { NavBar } from '../components/ui/NavBar'

export const MemoriceRoutes = () => {


    return (
        <>
            <div className="memorice__container">
                <Header />
                <NavBar />
                <Switch>              
                    <Route exact path="/" component={ MemoriceJuego }/>
                    <Route exact path="/rank" component={ Rank }/>
                    <Redirect to="/profile"/>
                </Switch>
                <Footer />    
            </div>     
        </>
    )
}



