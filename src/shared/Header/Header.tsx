import React, { useEffect } from "react";
import styles from "./header.css";
import { Checkbox } from "../Customs/Checkbox/Checkbox";
import { useSelector, useDispatch } from "react-redux"
import { RootState, setChecked } from "../../../store/reducer";

export function Header() {
    const checked = useSelector<RootState, boolean>(state => state.checked);

    const dispatch = useDispatch();
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <label className={styles.input}>
                    <Checkbox checked={checked} />
                    <input type="checkbox" className={styles.checkbox} onChange={() => dispatch(setChecked(!checked))} checked={!checked} />
                    <span className={styles.input__name}>Hide completed</span>
                </label>
            </div>
        </header>
    )
}

