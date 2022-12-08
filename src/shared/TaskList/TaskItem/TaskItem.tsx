import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDone } from "../../../../store/item/action";
import { ItemState } from "../../../../store/item/reducer";
import { RootState, setItem, setTodos } from "../../../../store/reducer";
import { Checkbox } from "../../Customs/Checkbox/Checkbox";
import { Closer } from "../../Customs/Closer/Closer";
import styles from "./taskitem.css";

interface ITaskItemProps {
    index: number,
    id: string
}

export function TaskItem({ index, id }: ITaskItemProps) {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const [todo] = todos.filter(todo => {
        if (todo.id == id) {
            return todo
        }
    })
    // const isDone = useSelector<RootState, boolean>(state => state.todoList[index].isDone);
    // const text = useSelector<RootState, string>(state => state.todoList[index].text);

    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            <label className={styles.label}>
                <Checkbox checked={todo.isDone} />
                <input type="checkbox" className={styles.checkbox} checked={todo.isDone} onChange={() => {
                    dispatch(setDone(!todo.isDone, todo.id));
                }} />
                <p className={styles.task}>
                    {todo.text}
                </p>
            </label>
            <Closer onClick={() => {
                dispatch(setTodos(todos.filter((item) => {
                    if (item.id != todo.id) {
                        return item;
                    }
                })));
            }} />
        </li>
    )
}