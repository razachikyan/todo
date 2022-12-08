import React from "react";
import { useSelector } from "react-redux";
import { ItemState } from "../../../store/item/reducer";
import { RootState } from "../../../store/reducer";
import { TaskItem } from "./TaskItem/TaskItem";
import styles from "./tasklist.css";

export function Tasklist() {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const isHided = useSelector<RootState, boolean>(state => state.checked);

    return (
        <div className={styles.container}>
            <ul>
                {
                    isHided ? todos.filter((todo, i) => {
                        let count = 0;
                        if (!todo.isDone) {
                            todo.index = i - count;
                            return todo;
                        }
                        console.log(todo);

                    }).map(todo => {
                        return <TaskItem key={todo.id} index={todo.index} id={todo.id} />
                    }) : todos.map(todo => {
                        return <TaskItem key={todo.id} index={todo.index} id={todo.id} />
                    })
                }
            </ul>
        </div>
    )
}