import { types } from "../types/types";

const initialState = {
    ranking: [],
    bestScore: null,
    chekingRank: true
}


export const rankReducer = (state= initialState, action) => {
    
    switch (action.type) {
        case types.rankAdd:
            return {
                ...state,
                ranking: [
                    ...state.ranking,
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
        case types.rankStartGetRank:
            return {
                ...state,
                ranking: action.payload
                
            }
        
        case types.rankStarGetBestRank:
            return {
                ...state,
                bestScore: action.payload
            }   
        case types.rankCheckingFinish:
            return {
                ...state,
                chekingRank: false
            }

        default:
            return state
    }

}



