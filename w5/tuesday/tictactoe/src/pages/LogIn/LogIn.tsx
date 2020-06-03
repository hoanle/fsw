import React, { Component } from 'react'
import './LogIn.css';
import FacebookLogin from 'react-facebook-login';
import UserInfoType from './../../types/UserInfoType';

type LogInProps = {
    onLoggInSuccess: (info: UserInfoType) => void 
}
class LogIn extends Component<LogInProps> {

    responseFacebook = (response: any) => {
        console.log(response.name);
        console.log(response.picture.data.url);
        console.log(response.userID)
        console.log(response.accessToken)
        let userInfo: UserInfoType = {
            id: response.userID,
            name: response.name,
            picture: response.picture.data.url,
            token: response.accessToken
        }
        this.props.onLoggInSuccess(userInfo);
    }
    signInButtonClicked = () => {
        console.log("signInButtonClicked");
    }

    render() {
        return (
            <div className="LogIn-div">This is where user logins
                <FacebookLogin
                    appId="1526658080855885"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.signInButtonClicked}
                    callback={this.responseFacebook} />
            </div>
        )
    }
}

export default LogIn;