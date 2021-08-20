import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rankCheckingFinish, startGetRanks } from '../../actions/rank'

export const Rank = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(startGetRanks());
        dispatch(rankCheckingFinish());
    }, [dispatch])

    const { uid, name } = useSelector(state => state.auth)
    const {navBar} = useSelector(state => state.ui)
    const {ranking, chekingRank} = useSelector(state => state.rank)
    const id = Date.now()
    
    

    return (
        <div className={`${navBar ? "memorice__juego-navBar" : "memorice__juego-noNavBAr"} rank__container`}>
            <h1>Rank</h1>
            {
                ranking.length > 0
                    ?
                    <table className="rank__table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time  [s]</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                ranking.map(rank => (
                                    <tr key={rank.user._id}>
                                    <td> {rank.user.name} </td>
                                    <td> {rank.time} </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    :
                    <h2>No Rank encontrado</h2>
            }
        </div>
    )
}

