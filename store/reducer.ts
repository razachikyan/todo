import { Reducer } from "redux";
import { ActionCreator } from "redux";
import { generateID } from "../src/generateID";
import { setDoneAction, setIndexAction, SET_DONE, } from "./item/action";
import { ItemState } from "./item/reducer";

export type RootState = {
    validated: boolean,
    checked: boolean;
    inputValue: string;
    todoList: ItemState[];
}

const SET_VALIDATED = "SET_VALIDATED";
type setValidatedAction = {
    type: typeof SET_VALIDATED,
    validated: boolean
}

const SET_CHECKED = "SET_CHECKED";
type setCheckedAction = {
    type: typeof SET_CHECKED,
    checked: boolean;
}

const UPDATE_INPUT = "UPDATE_INPUT";
type updateInputAction = {
    type: typeof UPDATE_INPUT,
    inputValue: string,
}

const SET_TODOS = "SET_TODOS";
type setTodosAction = {
    type: typeof SET_TODOS,
    todoList: ItemState[]
}

const SET_ITEM = "SET_ITEM";
type setItemAction = {
    type: typeof SET_ITEM;
    isDone: boolean;
    text: string;
    index: number
    id: string
}

const todos: ItemState[] = JSON.parse(localStorage.getItem("todoList") ?? "[]");

const initialState: RootState = {
    validated: true,
    checked: false,
    inputValue: "",
    todoList: todos,
}

export const setValidated: ActionCreator<setValidatedAction> = (isVlidated => {
    return { type: SET_VALIDATED, validated: isVlidated }
})

export const setChecked: ActionCreator<setCheckedAction> = (isChecked) => {
    return { type: SET_CHECKED, checked: isChecked };
}

export const updateInputValue: ActionCreator<updateInputAction> = (text) => {
    return { type: UPDATE_INPUT, inputValue: text };
}

export const setTodos: ActionCreator<setTodosAction> = (todoList) => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
    return { type: SET_TODOS, todoList }
}

export const setItem: ActionCreator<setItemAction> = (item => {
    return { type: SET_ITEM, isDone: item.isDone, index: item.index, text: item.text, id: item.id }
})


type Action = updateInputAction
    | setCheckedAction
    | setTodosAction
    | setItemAction
    | setDoneAction
    | setIndexAction
    | setValidatedAction;

export const rootReducer: Reducer<RootState, Action> = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALIDATED: {
            return {
                ...state,
                validated: action.validated
            }
        }
        case SET_CHECKED:
            return {
                ...state,
                checked: action.checked
            }
        case UPDATE_INPUT: {
            return {
                ...state,
                inputValue: action.inputValue
            }
        }
        case SET_ITEM: {
            return {
                ...state,
                todoList: [{
                    isDone: action.isDone,
                    text: action.text,
                    index: action.index,
                    id: action.id
                }].concat(state.todoList),
            }
        }
        case SET_TODOS: {
            return {
                ...state,
                todoList: [...action.todoList]
            }
        }
        case SET_DONE: {
            localStorage.setItem("todoList", JSON.stringify(state.todoList.map(item => {
                if (item.id == action.id) {
                    return { ...item, isDone: action.isDone }
                }
                return item
            })))
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id == action.id) {
                        return { ...item, isDone: action.isDone }
                    }
                    return item
                })
            }
        }
        default:
            return state;
    }
}

