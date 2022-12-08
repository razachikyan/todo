import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDone, setOpenedModal } from "../../../../store/item/action";
import { ItemState } from "../../../../store/item/reducer";
import { RootState, setItem, setTodos } from "../../../../store/reducer";
import { Checkbox } from "../../Customs/Checkbox/Checkbox";
import { Closer } from "../../Customs/Closer/Closer";
import { Modal } from "./ModalWin/Modal";
import styles from "./taskitem.css";

interface ITaskItemProps {
    id: string
}

export function TaskItem({ id }: ITaskItemProps) {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const [todo] = todos.filter(todo => {
        if (todo.id == id) {
            return todo
        }
    })
    const isOpenedModal = todo.isOpenedModal;
    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            <div className={styles.box}>
                {isOpenedModal ? <Modal id={id} /> : null}
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
                    dispatch(setOpenedModal(id, true))
                }} />
            </div>
        </li>
    )
}