import React from "react";
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={classes.img}>
            <img src='https://www.yestravel.ru/upload/information_system_29/8/4/6/item_846/information_items_846.jpg'/>
            </div>
            <div>
                ava + description
                <img src='http://lovelycat.ru/images/article/thumbs/400x400/etEY9zCuGciL9szdH7CNRMFoutSmz_U5.jpg'/>
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;