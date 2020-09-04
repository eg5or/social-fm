import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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
            dialogs: [
                {id: 1, name: 'Alina', avatar: 'https://cs6.pikabu.ru/avatars/1065/v1065084-1907064302.jpg'},
                {id: 2, name: 'Temich', avatar: 'https://cs6.pikabu.ru/avatars/1571/v1571817-1743351695.jpg'},
                {id: 3, name: 'Skvor', avatar: 'https://cs6.pikabu.ru/avatars/1272/v1272441-1350175514.jpg'},
                {id: 4, name: 'Vanya', avatar: 'https://i.ytimg.com/vi/In4MXuQmuBA/hqdefault.jpg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Kuku'},
                {id: 4, message: 'Yo'}
            ],
            newMessageBody: "",
        },
        sidebar: {}
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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

// store - OOP