import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
            <div className={classes.item}>
                <img alt='' src='https://cs8.pikabu.ru/avatars/1165/x1165542-515700605.png'/>
                {props.message}
                <div>
                <span>like {props.likesCount}</span>
                </div>
            </div>
    )
}
export default Post;