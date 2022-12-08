import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemState } from "../../../store/item/reducer";
import { RootState, setIsEmpty, setItem, setTodos, setValidated, updateInputValue } from "../../../store/reducer";
import { generateID } from "../../generateID";
import styles from "./taskinput.css"


export function TaskInput() {
    const value = useSelector<RootState, string>(state => state.inputValue);
    const isValidated = useSelector<RootState, boolean>(state => state.validated);
    const dispatch = useDispatch();
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    return (
        <form className={styles.container}>
            <span className={styles.name}>
                Task
            </span>
            <div className={styles.box}>
                <input placeholder="Write here" type="text" className={isValidated ? styles.inputSuccess : styles.inputError} value={value} onChange={
                    (ev) => {
                        dispatch(updateInputValue(ev.target.value));
                        if (ev.target.value.trim().length > 0 && ev.target.value.trim().length < 54) {
                            dispatch(setValidated(true));
                        } else {
                            dispatch(setValidated(false));
                        }
                    }
                } />
                <button type="submit" className={styles.button} onClick={(ev) => {
                    ev.preventDefault();
                    if (value.length > 0 && value.length < 54) {
                        const id = generateID();
                        dispatch(setItem({ text: value.trim(), isDone: false, index: 0, id }));
                        todos.unshift({ text: value.trim(), isDone: false, index: 0, id, isOpenedModal: false });
                        if (todos.length > 0) {
                            dispatch(setTodos(todos.map((todo, i) => {
                                todo.index = i;
                                return todo;
                            })));
                            dispatch(setIsEmpty(todos.length > 0));
                        }
                        dispatch(updateInputValue(""));
                    }
                }}>Add</button>
            </div>
            {!isValidated ? <p className={styles.err_message}>Task content can contain max 54 characters.</p> : null}
        </form>
    )
}

