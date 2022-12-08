import React from "react";
import { ItemState } from "../../../store/item/reducer";
import { TaskItemContainer } from "./TaskItemContainer/TaskItemContainer";
import styles from "./tasklist.css";

interface ITaskListProps {
    isEmpty: boolean;
    isHided: boolean;
    todos: ItemState[];
}

export function TaskList({ isEmpty, isHided, todos }: ITaskListProps) {
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
                        return <TaskItemContainer key={todo.id} id={todo.id} />
                    }) : todos.map(todo => {
                        return <TaskItemContainer key={todo.id} id={todo.id} />
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