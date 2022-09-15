import { ActionTypes } from "../constants/action-types"; 

const initalState = {
    products: [
        {
            id: 1,
            title:"Goktay",
            category:"Programmer"
        },
    ],
};

export const productReducer = (state= initalState,action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
};