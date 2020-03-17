import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faKeyboard, faQuestionCircle, faShare, faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt, faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faCommentAlt, farFaHeart,  faMobileAlt, faKeyboard, faQuestionCircle, faShare, fasFaHeart)

const renderEntireTree = (state) => {
    ReactDOM.render(
        <App
            state = {state}
            dispatch = {store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})

renderEntireTree(store.getState())

serviceWorker.unregister()
