let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi? how are you?', likesCount: '0'},
                {id: 2, message: 'Its my first post', likesCount: '23'}
            ],
            newPostText: 'Francesco'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Kuku'},
                {id: 4, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Alina', avatar: 'https://cs6.pikabu.ru/avatars/1065/v1065084-1907064302.jpg'},
                {id: 2, name: 'Temich', avatar: 'https://cs6.pikabu.ru/avatars/1571/v1571817-1743351695.jpg'},
                {id: 3, name: 'Skvor', avatar: 'https://cs6.pikabu.ru/avatars/1272/v1272441-1350175514.jpg'},
                {id: 4, name: 'Vanya', avatar: 'https://i.ytimg.com/vi/In4MXuQmuBA/hqdefault.jpg'}
            ],
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн - наблюдатель observer ИЗУЧИТЬ!!! (addEventListener
    },

    dispatch(action) { // { type: 'ADD-POST', message: 'text'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export default store;
window.store = store;

// store - OOP