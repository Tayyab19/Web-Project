import React from 'react';
import GoogleLogin from 'react-google-login';
import { FaGoogle } from "react-icons/fa";

const Google = ({login}) => {
    const responseGoogle = (response) =>{
        login(response)
    }

    return(
    <GoogleLogin
    clientId="943308053357-5ob0cq3qkrbpt0a7q8c5iscr91t6d0bf.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    render={renderProps => (
        <FaGoogle onClick={renderProps.onClick} size="2em" color="" />
        )}
    />)
    
}


export default Google;