import React from "react";
import styles from "./checkbox.css";

interface ICheckBoxProps {
    checked?: boolean;
}

export function Checkbox({ checked }: ICheckBoxProps) {
    return (
        <span className={checked ? styles.on : styles.off}></span>
    )
}