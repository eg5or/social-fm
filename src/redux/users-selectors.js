import {createSelector} from "reselect";

export const getUsers = (state) => { // примитивный селектор
    return state.usersPage.users
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true)  // используем примитивный селектор с фильтрацией
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)  // первым параметром передаем примитивный селектор, чтобы его результат вернуть в его функцию
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
