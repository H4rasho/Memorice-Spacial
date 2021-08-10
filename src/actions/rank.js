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

