let offline = 'question-circle',
	desktop = 'keyboard',
	mobile = 'mobile-alt'

let state = {
	
	messagesPage: {
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
	},
	
	profile: {
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
		feed:[
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
			},
			{
				id: 2, 
				 userName: 'Its Me', 
				 userImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg', 
				 userStatus: mobile, 
				 contentText: 'Trying to make it work', 
				 likeCounter: 1, 
				 commentCounter: 3, 
				 shareCounter: 0
			}
		]
	}
}

export default state;