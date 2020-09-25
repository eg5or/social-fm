import userPhoto from '../assets/images/profile-default.png';
import {authAPI} from '../API/api';

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

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const setUserAvatar = (avatarURL) => ({type: SET_USER_AVATAR, avatarURL})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}
export const logout = (email, password, rememberMe) => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer;