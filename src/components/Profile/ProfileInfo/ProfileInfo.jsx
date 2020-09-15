import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={classes.imgHeaderBlock}>
            <img alt='' className={classes.imgHeader} src='https://www.yestravel.ru/upload/information_system_29/8/4/6/item_846/information_items_846.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatar}>
                    <img alt='' src={props.profile.photos.large} />
                </div>
                <div className={classes.aboutMe}>
                    {props.profile.aboutMe}
                </div>
                <div className={classes.contactsBlock}>
                    <ul className={classes.contacts}>
                        <li>
                            <span className={classes.bold}>Facebook:</span>
                            {props.profile.contacts.facebook ? props.profile.contacts.facebook : <span> --- </span>}
                        </li>
                        <li>
                            <span className={classes.bold}>Website: </span>
                            {props.profile.contacts.website ? props.profile.contacts.website : <span> --- </span>}
                        </li>
                        <li>
                            <span className={classes.bold}>VK: </span>
                            {props.profile.contacts.vk ? props.profile.contacts.vk : <span> --- </span>}
                        </li>
                        <li>
                            <span className={classes.bold}>Twitter: </span>
                            {props.profile.contacts.twitter ? props.profile.contacts.twitter : <span> --- </span>}
                        </li>
                        <li>
                            <span className={classes.bold}>Instagram: </span>
                            {props.profile.contacts.instagram ? props.profile.contacts.instagram : <span> --- </span>}
                        </li>
                        <li>
                            <span className={classes.bold}>Youtube: </span>
                            {props.profile.contacts.youtube ? props.profile.contacts.youtube : <span> --- </span>}
                        </li>
                        <li>
                            <span className={classes.bold}>Github: </span>
                            {props.profile.contacts.github ? props.profile.contacts.github : <span> --- </span>}
                        </li>
                        <li>
                            <span className={classes.bold}>mainLink: </span>
                            {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : <span> --- </span>}
                        </li>
                    </ul>
                </div>
                <div className={classes.jobBlock}>
                    <div>{!props.profile.contacts.lookingForAJob ? <span>Ищет работу!</span> : <span>Не ищет работу...</span>}</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                    <div>Полное имя: {props.profile.fullName}</div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;