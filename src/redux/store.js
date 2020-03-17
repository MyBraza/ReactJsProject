import profileReducer from './Profile/reducer'
import dialogPageReducer from './Dialogs/reducer'
import {combineReducers, createStore} from "redux";

let reducer = combineReducers({
    profile: profileReducer,
    dialogPage: dialogPageReducer
})

const offline = 'question-circle',
    desktop = 'keyboard',
    mobile = 'mobile-alt',
    CHANGE_INPUT_FORM_VALUE = 'CHANGE_INPUT_FORM_VALUE',
    ADD_POST = 'ADD_POST'

let store = createStore(reducer);


export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const changeInputFormValueActionCreator = text => ({
    type: CHANGE_INPUT_FORM_VALUE,
    payload: text
})

export default store;