import React from "react";
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData, setUserAvatar} from '../../redux/auth-reducer';
import {usersAPI} from '../../API/api';

class HeaderContainer extends React.Component {

    componentDidMount() {


        usersAPI.setAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email } = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })

    }

    render() {

        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId,
    avatarURL: state.auth.avatarURL
})
export default connect(mapStateToProps, {setAuthUserData, setUserAvatar})(HeaderContainer);