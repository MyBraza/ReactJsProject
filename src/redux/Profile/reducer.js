const offline = 'question-circle',
    desktop = 'keyboard',
    mobile = 'mobile-alt',
    CHANGE_INPUT_FORM_VALUE = 'CHANGE_INPUT_FORM_VALUE',
    ADD_POST = 'ADD_POST'

let initialState = {
    info: {
        userName: 'Its Me',
        userImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
        status: 'online',
        device: desktop,
        userInfo: {
            birthday: 'tomorrow',
            number: '89283334444',
            adress: ''
        }
    },
    inputFormValue: '',
    feed: [
        {
            id: 1,
            userName: 'Not Me',
            userImage: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
            userStatus: offline,
            contentText: 'Its a cat picture',
            contentImage: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
            likeCounter: 15,
            commentCounter: 5,
            shareCounter: 2
        }
    ]
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case CHANGE_INPUT_FORM_VALUE: {
            state.inputFormValue = action.payload
            return state
        }

        case ADD_POST: {
            let post = {
                id: 3,
                userName: state.info.userName,
                userImage: state.info.userImage,
                userStatus: state.info.device,
                contentText: state.inputFormValue,
                contentImage: '',
                likeCounter: 0,
                commentCounter: 0,
                shareCounter: 0
            }
            state.inputFormValue = ''
            state.feed.push(post)
            return state
        }

        default:
            console.log('Invalid action type')
            return state
    }
}

export default reducer