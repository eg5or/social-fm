import React from 'react';
import classes from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cs6.pikabu.ru/avatars/1065/v1065084-1907064302.jpg',
                followed: false,
                fullName: 'Egor',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://cs6.pikabu.ru/avatars/1065/v1065084-1907064302.jpg',
                followed: false,
                fullName: 'Andrey',
                status: 'I am a friend',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://cs6.pikabu.ru/avatars/1065/v1065084-1907064302.jpg',
                followed: true,
                fullName: 'Vanya',
                status: 'Hello social',
                location: {city: 'Korolev', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://cs6.pikabu.ru/avatars/1065/v1065084-1907064302.jpg',
                followed: true,
                fullName: 'Alina',
                status: 'bla bla bla',
                location: {city: 'Peresvet', country: 'Russia'}
            }
            ,])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>UNFOLLOW</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>FOLLOW</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;