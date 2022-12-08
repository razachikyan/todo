import React from "react";
import styles from "./closer.css"

interface ICloserProps {
    onClick: () => void
}

export function Closer({ onClick }: ICloserProps) {
    return <button onClick={onClick} className={styles.closer}></button>
}