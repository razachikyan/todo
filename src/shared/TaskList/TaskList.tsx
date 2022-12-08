import React from "react";
import { useSelector } from "react-redux";
import { ItemState } from "../../../store/item/reducer";
import { RootState } from "../../../store/reducer";
import { TaskItem } from "./TaskItem/TaskItem";
import styles from "./tasklist.css";

export function Tasklist() {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const isHided = useSelector<RootState, boolean>(state => state.checked);
    const isEmpty = useSelector<RootState, boolean>(state => state.isEmpty);
    return (
        <div className={styles.container}>
            {isEmpty ? <ul className={styles.list}>
                {
                    isHided ? todos.filter((todo, i) => {
                        let count = 0;
                        if (!todo.isDone) {
                            todo.index = i - count;
                            return todo;
                        }
                        console.log(todo);

                    }).map(todo => {
                        return <TaskItem key={todo.id} id={todo.id} />
                    }) : todos.map(todo => {
                        return <TaskItem key={todo.id} id={todo.id} />
                    })
                }
            </ul> :
                <div className={styles.message_box}>
                    <p className={styles.descr}>your life is a blank page. You write on it.</p>
                    <p className={styles.message}>So start by adding your tasks here.</p>
                </div>}
        </div>
    )
}