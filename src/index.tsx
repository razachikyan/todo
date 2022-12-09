import "./styles/style.css";
import "./babel";
import React from "react";
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../store/reducer";
import { composeWithDevTools } from "redux-devtools-extension"
import { Layout } from "./shared/Layout/Layout"
import { HeaderContainer } from "./shared/HeaderContainer/HeaderContainer";
import { TaskInputContainer } from "./shared/TaskInputContainer/TaskInputContainer";
import { TaskListContainer } from "./shared/TaskListContainer/TaskListContainer";

const store = createStore(rootReducer, composeWithDevTools())

function App() {
    return (
        <Layout >
            <HeaderContainer />
            <TaskInputContainer />
            <TaskListContainer />
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

