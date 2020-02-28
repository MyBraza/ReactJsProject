import faLib from './faLib'

let state = {
	
	messagesPage: {
		messages: ['1', '2', '3']
	},
	
	profile: {
		info: {
			userName: 'Its Me',
			userImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
			status: 'online',
			device: faLib.desktop,
			userInfo: {
				birthday: 'tomorrow',
				number: '89283334444',
				adress: ''
			}
		},
		feed:[
			{id: 1, user: 'Not Me', userImage: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png', userStatus: faLib.offline, contentText: 'Its a cat picture', contentImage: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'},
			{id: 2, user: 'Its Me', userImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
			 userStatus: faLib.desktop, contentText: 'Trying to make it work'}
		]
	}
}

export default state;