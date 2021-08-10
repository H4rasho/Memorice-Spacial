import { types } from "../types/types";


export const mostarNavBar = (estado) => ({
    type: types.uiMostrarNavBar,
    payload: !estado
})



