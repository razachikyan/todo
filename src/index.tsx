import "./styles/style.css";
import "./babel";
import React from "react";
import { createRoot } from 'react-dom/client';
import { Header } from "./shared/Header/Header"
import { TaskInput } from "./shared/TaskInput/TaskInput";
import { Tasklist } from "./shared/TaskList/TaskList";
import { createStore } from "redux";
import { Provider, useSelector } from "react-redux";
import { rootReducer, RootState } from "../store/reducer";
import { composeWithDevTools } from "redux-devtools-extension"
import { Layout } from "./shared/Layout/Layout"
import { ItemState } from "../store/item/reducer";

const store = createStore(rootReducer, composeWithDevTools())


function App() {
    const todos = useSelector<RootState, ItemState[]>(state => state.todoList);
    return (
        <Layout >
            <Header />
            <TaskInput />
            <Tasklist />
        </Layout>
    )
}

let rootElem = document.getElementById("react-root");

if (rootElem) {
    const root = createRoot(rootElem);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

