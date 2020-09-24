import React from "react";
import Header from './Header';
import {connect} from 'react-redux';
import {setUserAvatar, setUserData} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setUserData()
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
export default connect(mapStateToProps, {
    setUserAvatar,
    setUserData
})(HeaderContainer);