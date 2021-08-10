import { naves } from "../data/naves";
import { types } from "../types/types";


const initialState = {
    naveS: naves.sort(function () { return Math.random() - 0.5 }),
    active: null,
}


export const memoriceReducer = (state = initialState, action) => {
    switch (action.type) {

        case  types.cargarNaves:
            return {
                ...state,
                naveS: action.payload
            }

        case types.active:
            return{
                ...state,
                active: {
                    id: action.payload.id,
                    name: action.payload.name,
                    img: action.payload.img 
                }
            }

        case types.mostarNave: 
            return{
                ...state,
                naveS: state.naveS.map(nave => 
                    nave.id === action.payload
                    ? action.payload
                    : nave   
                )
            }

        case types.ocultarNave: 
            return{
                ...state,
                naveS: state.naveS.map(nave => 
                    nave.id === action.payload.id
                    ? action.payload
                    : nave   
                )
            }

        case types.clearActive:{
            return {
                ...state,
                active: null
            }
        }
        case types.playAgain:
            return initialState

        default:
            return state
    }
}
