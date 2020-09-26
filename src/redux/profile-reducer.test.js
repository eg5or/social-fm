import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi? how are you?', likesCount: '0'},
        {id: 2, message: 'Its my first post', likesCount: '23'}
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('New text')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation ожидание
    expect(newState.posts.length).toBe(3)
});

test('text saved', () => {
    // 1. test data
    let action = addPostActionCreator('New text')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation ожидание
    expect(newState.posts[2].message).toBe('New text')
});

test('after deleting length of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation ожидание
    expect(newState.posts.length).toBe(1)
});

