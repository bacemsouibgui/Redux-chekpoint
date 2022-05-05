import React from 'react';
import {addtodu , deletetodu , edittodu} from '../action/actionType';

const inisialState={
    todu : [{
        id : 0 ,
        text : "learn react js"
    }
    
]
}

function reducer(state = inisialState, action) {
    switch (action.type) {
        case addtodu:
            return {
                ...state, todu: [...state.todu, action.payload]
            }

        case edittodu:
            return {
                ...state, todu: state.todu.map(el => el.id === action.payload.id ? action.payload : el)
            }
        
        case deletetodu : 
        return {
            ...state , todu :  state.todu.filter (el => el.id != action.payload)
        }    
        default:
            return state
    }
}

export default reducer;