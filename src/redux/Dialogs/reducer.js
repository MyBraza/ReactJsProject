const offline = 'question-circle',
    desktop = 'keyboard',
    mobile = 'mobile-alt'

let initialState = {
    dialogs: [
        {
            id: 1,
            userName: 'My Friend',
            userImage: 'https://images.spot.im/v1/production/yupgrpkcftvrhpc5jff5',
            userStatus: mobile,
            messages: [
                {
                    id: 1,
                    text: 'sup'
                },
                {
                    id: 2,
                    text: 'yo'
                }
            ]
        },
        {
            id: 2,
            userName: 'Not Me',
            userImage: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
            userStatus: offline,
            messages: [
                {
                    id: 1,
                    text: 'hello'
                },
                {
                    id: 2,
                    text: 'hi'
                }
            ]
        }
    ],
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        default:
            console.log('Invalid action type')
            return state
    }
}

export default reducer