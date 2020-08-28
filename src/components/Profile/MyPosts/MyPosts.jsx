import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi? how are you?', likesCount: '0'},
        {id: 2, message: 'Its my first post', likesCount: '23'}
    ]

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    )
}
export default MyPosts;