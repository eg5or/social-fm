import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormsControl";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <LoginReduxForm onSubmit={addPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Enter message...'}
                   name={'newPostText'}
                   component={TextArea}
                   validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({

    form: 'myPosts'
})(MyPostsForm)


export default MyPosts;