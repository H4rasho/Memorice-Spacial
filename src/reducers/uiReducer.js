import { types } from "../types/types";

const initialState = {
    navBar: false
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiMostrarNavBar:
            return {
                ...state,
                navBar: action.payload
            }
        default:
            return state
    }
}