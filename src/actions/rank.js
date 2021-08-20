import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";


export const addRank = (rank) => ({
    type: types.rankAdd,
    payload: rank
})

export const startRank = (time) => ({
    type: types.rankStart,
    payload: time
})

export const timeupdate = (rank) => ({
    type: types.timeUpdate,
    payload: rank
})

export const startGetRanks = () => {

    return async (disptach) => {

        const resp = await fetchConToken('rank')
        const body = await resp.json();

        if (body.ok) {
            disptach(getRanks(body.ranks))
        } else {
            console.log(body.msg);
        }

    }

}

export const startGetBestRank = () => {

    return async (disptach) => {

        const resp = await fetchConToken('rank/bestScore');
        const body = await resp.json();

        if (body.ok) {
            if (body.bestScore) {
                disptach(getBestRank(body.bestScore.time))
            }
        }
        else {
            console.log(body.msg)
        }
    }

}

export const startAddRank = (time) => {
    return async (dispatch) => {
        const resp = await fetchConToken('rank', {time}, 'POST')
        const body = await resp.json();
        console.log(resp);
        if (body.ok) {
            console.log('agregado')
        }
        else {
            console.log(body.msg)
        }
    }
}



export const rankCheckingFinish = () => ({
    type: types.rankCheckingFinish
})

const getBestRank = (time) => ({
    type: types.rankStarGetBestRank,
    payload: time
})

const getRanks = (ranks) => ({
    type: types.rankStartGetRank,
    payload: ranks
})
