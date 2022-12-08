import React, { FormEvent } from "react";
import styles from "./taskinput.css"

interface ITaskInputProps {
    isValidated: boolean;
    value: string;
    onChange: (ev: any) => void;
    onClick: (ev: FormEvent) => void;
}

export function TaskInput({ isValidated, value, onChange, onClick }: ITaskInputProps) {
    return (
        <form className={styles.container}>
            <span className={styles.name}>
                Task
            </span>
            <div className={styles.box}>
                <input placeholder="Write here" type="text" className={isValidated ? styles.inputSuccess : styles.inputError} value={value} onChange={onChange} />
                <button type="submit" className={styles.button} onClick={onClick}>Add</button>
            </div>
            {!isValidated ? <p className={styles.err_message}>Task content can contain max 54 characters.</p> : null}
        </form>
    )
}

