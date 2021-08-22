import { types } from "../types/types";

const initialState = {
    checking: true
}


export const authReducer = (state = initialState, action) => {
     
    switch (action.type) {
           
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            } 

        case types.authCheckingFinish: 
            return {
                ...state,
                checking: false
            }

        case types.upDateBestScore:
            return {
                ...state,
                user: {
                    ...state.user,
                    bestScore: action.payload
                }
            }
        case types.authLogout : 
            return {
                checking: false
            }

        default:
            return state
    }

}

