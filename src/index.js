import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {changeInputFormValue, pushPost, subsribe} from './redux/state';

const renderEntireTree = () => {
    ReactDOM.render(
        <App
            state = {state}
            pushPost={pushPost}
            changeInputFormValue={changeInputFormValue}
        />,
        document.getElementById('root')
    );
}

subsribe(renderEntireTree)

renderEntireTree()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
