import React from "react";
import { useSelector } from "react-redux";
import { ItemState } from "../../../store/item/reducer";
import { RootState } from "../../../store/reducer";
import { TaskItem } from "./TaskItem/TaskItem";
import styles from "./tasklist.css"


export function Tasklist() {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const isHided = useSelector<RootState, boolean>(state => state.checked);
    let count = 0;
    let todoList = isHided ? todos.filter((todo, i) => {
        todo.index -= count;
        if (!todo.isDone) {
            return todo;
        } else {
            count++;
        }
    }) : todos;
    console.log(todoList);

    return (
        <div className={styles.container}>
            <ul>
                {
                    todoList.map((todo, i) => {
                        return <TaskItem key={todo.id} index={i} />
                    })
                }
            </ul>
        </div>
    )
}