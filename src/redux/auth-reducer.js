import userPhoto from '../assets/images/profile-default.png';
import {usersAPI} from '../API/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_AVATAR = 'SET_USER_AVATAR';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    avatarURL: userPhoto
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_USER_AVATAR:
            return {
                ...state,
                avatarURL: action.avatarURL
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setUserAvatar = (avatarURL) => ({type: SET_USER_AVATAR, avatarURL})

export const setUserData = () => {
    return (dispatch) => {
        usersAPI.setAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email } = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}


export default authReducer;