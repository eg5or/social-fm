
let renderEntireTree = () => {
    console.log('State was changed');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer; // паттерн - наблюдатель observer ИЗУЧИТЬ!!! (addEventListener
}


export default state;

// store - OOP