import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.img}>
            <img src='https://www.yestravel.ru/upload/information_system_29/8/4/6/item_846/information_items_846.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
                <img src='http://lovelycat.ru/images/article/thumbs/400x400/etEY9zCuGciL9szdH7CNRMFoutSmz_U5.jpg'/>
            </div>
        </div>
    )
}
export default ProfileInfo;