import { types } from "../types/types";

const initialState = {
    user: {
        logged: false,
        displayName: null,
    }
}


export const authReducer = (state = initialState, action) => {
     
    switch (action.type) {
        case types.login: 
            return {
                ...state,
                user: {
                    logged: true,
                    id: action.payload.id,
                    displayName: action.payload.name
                }
            }
        case types.upDateBestScore:
            return {
                ...state,
                user: {
                    ...state.user,
                    bestScore: action.payload
                }
            }
        default:
            return state
    }

}

