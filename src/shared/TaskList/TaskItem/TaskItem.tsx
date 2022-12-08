import React from "react";
import { ItemState } from "../../../../store/item/reducer";
import { Checkbox } from "../../Customs/Checkbox/Checkbox";
import { Closer } from "../../Customs/Closer/Closer";
import { ModalContainer } from "./ModalWinContainer/ModalContainer";
import styles from "./taskitem.css";

interface ITaskItemProps {
    id: string;
    isOpenedModal: boolean,
    todo: ItemState;
    onChange: () => void;
    onClick: () => void
}

export function TaskItem({ id, isOpenedModal, todo, onChange, onClick }: ITaskItemProps) {
    return (
        <li className={styles.item}>
            <div className={styles.box}>
                {isOpenedModal ? <ModalContainer id={id} /> : null}
                <label className={styles.label}>
                    <Checkbox checked={todo.isDone} />
                    <input type="checkbox" className={styles.checkbox} checked={todo.isDone} onChange={onChange} />
                    <p className={styles.task}>
                        {todo.text}
                    </p>
                </label>
                <Closer onClick={onClick} />
            </div>
        </li>
    )
}