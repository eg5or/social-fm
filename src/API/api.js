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
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    },
    getUserPhoto(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    }
}

export const profileAPI = {
    setUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}