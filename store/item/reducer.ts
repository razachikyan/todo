import { Reducer } from "redux";
import { setDoneAction, setIndexAction, SET_DONE, SET_INDEX } from "./action";

export type ItemState = {
    isDone: boolean,
    text: string,
    index: number,
    id: string
}

export type ItemAction = setDoneAction | setIndexAction;

const initialItemState = {
    isDone: false,
    text: "",
    index: 0,
    id: ""
}

export const itemReducer: Reducer<ItemState, ItemAction> = (state = initialItemState, action) => {
    switch (action.type) {
        case SET_DONE: {
            return {
                ...state,
                isDone: action.isDone,
                id: action.id
            }
        }
        case SET_INDEX: {
            return {
                ...state,
                index: action.index,
                isDone: action.isDone
            }
        }
        default:
            return state;
    }
}