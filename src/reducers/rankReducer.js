import { types } from "../types/types";

const initialState = {
    rank: []
}


export const rankReducer = (state= initialState, action) => {
    
    switch (action.type) {
        case types.rankAdd:
            return {
                ...state,
                rank: [
                    ...state.rank,
                    action.payload
                ]
            }
        case types.rankStart:
            return {
                ...state,
                start: action.payload
            }
        case types.timeUpdate:
            return {
                ...state,
                rank: state.rank.map(ran=> (
                    ran.name === action.payload.name
                    ? ran.time = action.payload.time
                    : ran
                ))
            } 

        default:
            return state
    }

}



