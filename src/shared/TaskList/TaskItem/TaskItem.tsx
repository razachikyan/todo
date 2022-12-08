import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDone } from "../../../../store/item/action";
import { ItemState } from "../../../../store/item/reducer";
import { RootState, setItem, setTodos } from "../../../../store/reducer";
import { Checkbox } from "../../Customs/Checkbox/Checkbox";
import { Closer } from "../../Customs/Closer/Closer";
import styles from "./taskitem.css";

interface ITaskItemProps {
    index: number
}

export function TaskItem({ index }: ITaskItemProps) {
    const id = useSelector<RootState, string>(state => state.todoList[index].id);
    const isDone = useSelector<RootState, boolean>(state => state.todoList[index].isDone);
    const text = useSelector<RootState, string>(state => state.todoList[index].text);
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            <label className={styles.label}>
                <Checkbox checked={isDone} />
                <input type="checkbox" className={styles.checkbox} checked={isDone} onChange={() => {
                    dispatch(setDone(!isDone, id));
                }} />
                <p className={styles.task}>
                    {text}
                </p>
            </label>
            <Closer onClick={() => {
                dispatch(setTodos(todos.filter((todo) => {
                    if (todo.id != id) {
                        return todo;
                    }
                })));
            }} />
        </li>
    )
}