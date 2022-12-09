import styles from "./modal.css"
import React, { useEffect, useRef } from "react";
import { setOpenedModal } from "../../../../../store/item/action";
import { useDispatch } from "react-redux";

interface IModalProps {
    id: string;
    onClose: () => void;
    onCansle: () => void
}

export function Modal({ id, onClose, onCansle }: IModalProps) {
    const ref = useRef(null);
    const dispatch = useDispatch();
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
                    <button className={styles.btn} onClick={onClose}>Yes</button>
                    <button className={styles.btn} onClick={onCansle}>No</button>
                </div>
            </div>
        </div>
    )
}
