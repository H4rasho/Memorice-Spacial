import { types } from "../types/types";



export const cargarNombre = (user) => ({
    type: types.login,
    payload: user
})


export const upDateBestScore = (rank) => ({
    type: types.upDateBestScore,
    payload: rank
})
