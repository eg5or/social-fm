import userPhoto from '../assets/images/profile-default.png';
import {authAPI} from '../API/api';
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'social-net/auth/SET_USER_DATA';
const SET_USER_AVATAR = 'social-net/auth/SET_USER_AVATAR';


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
                ...action.payload
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const setUserAvatar = (avatarURL) => ({type: SET_USER_AVATAR, avatarURL})

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;