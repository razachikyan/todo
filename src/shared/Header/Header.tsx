import React from "react";
import styles from "./header.css";
import { Checkbox } from "../Customs/Checkbox/Checkbox";

interface iHeaderProps {
    isEmpty: boolean,
    checked: boolean,
    onChange: () => void
}

export function Header({ isEmpty, checked, onChange }: iHeaderProps) {
    return (
        <header className={styles.header}>
            {isEmpty ? <div className={styles.container}>
                <label className={styles.input}>
                    <Checkbox checked={checked} />
                    <input type="checkbox" className={styles.checkbox} onChange={onChange} checked={!checked} />
                    <span className={styles.input__name}>Hide completed</span>
                </label>
            </div> : null}
        </header>
    )
}

