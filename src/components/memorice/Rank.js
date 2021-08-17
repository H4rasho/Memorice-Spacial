import React from 'react'
import { useSelector } from 'react-redux'

export const Rank = () => {

    const { user } = useSelector(state => state.auth)
    const {navBar} = useSelector(state => state.ui)
    const id = Date.now()
    const { displayName, bestScore } = user
    

    return (
        <div className={`${navBar ? "memorice__juego-navBar" : "memorice__juego-noNavBAr"} rank__container`}>
            <h1>Rank</h1>
            {
                bestScore
                    ?
                    <table className="rank__table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time  [s]</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr key={id.toString()}>
                                <td> {displayName} </td>
                                <td> {bestScore} </td>
                            </tr>
                        </tbody>
                    </table>
                    :
                    <h2>No Rank encontrado</h2>
            }
        </div>
    )
}

