import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3301964b-54a5-4b1c-bdf8-0b3219e63ecc"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    setAuthUserData() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getUserPhoto(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    }
}