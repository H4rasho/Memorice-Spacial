import { types } from "../types/types";

export const setActiveNave = (nave) => ({
    type: types.active,
    payload: nave
})

export const mostrarNave = (nave) => ({
    type: types.mostarNave,
    payload: nave
})

export const ocultarNave = (nave) => ({
    type: types.ocultarNave,
    payload: nave
})



export const cargarNaves = (naves) => ({
    type: types.cargarNaves,
    payload: naves
})

export const clearActive = () => ({
    type: types.clearActive
})

export const playAgain = () => ({
    type: types.playAgain
})

