import {profileAPI} from '../API/api';

const ADD_POST = 'social-net/profile/ADD_POST';
const SET_USER_PROFILE = 'social-net/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-net/profile/SET_USER_STATUS';
const DELETE_POST = 'social-net/profile/DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi? how are you?', likesCount: '0'},
        {id: 2, message: 'Its my first post', likesCount: '23'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 77,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.setUserProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatus = (text) => async (dispatch) => {
    let response = await profileAPI.updateStatus(text)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(text))
    }
}

export default profileReducer;