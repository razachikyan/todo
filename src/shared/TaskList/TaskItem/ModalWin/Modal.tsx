import styles from "./modal.css"
import React, { useEffect, useReducer, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, setIsEmpty, setTodos } from "../../../../../store/reducer";
import { ItemState } from "../../../../../store/item/reducer";
import { setOpenedModal } from "../../../../../store/item/action";

export function Modal({ id }: { id: string }) {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    const dispatch = useDispatch();
    const ref = useRef(null);
    const [todo] = todos.filter(todo => {
        if (todo.id == id) {
            return todo
        }
    });
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target == ref.current) {
                dispatch(setOpenedModal(id, false));
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick)
        };
    }, [])
    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.box}>
                <p className={styles.message}>
                    Are you sure you want to delete?
                </p>
                <div className={styles.controls}>
                    <button className={styles.btn} onClick={
                        () => {
                            dispatch(setTodos(todos.filter((item) => {
                                if (item.id != todo.id) {
                                    return item;
                                }
                            })));
                            dispatch(setIsEmpty((todos.length - 1) > 0))
                        }
                    }>Yes</button>
                    <button className={styles.btn} onClick={
                        () => {
                            dispatch(setOpenedModal(id, false))
                        }
                    }>No</button>
                </div>
            </div>
        </div>
    )
}