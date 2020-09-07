const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;