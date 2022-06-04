import React from 'react';
import GoogleLogin from 'react-google-login';
import { FaGoogle } from "react-icons/fa";

const Google = ({}) => {

    const googleData = (response) => {
        console.log(response);
        if (response.email!=null){
            axios({
                method: "post",
                url: `http://localhost:5000/users/signin`,
                data: {
                  email: response.email,
                  password: response.password,
                },
                Headers: { "Content-Type": "application/json" },
              })
                .then((res) => {
                  if (res.status == 200) {
                    console.log(res)
                    navigate("/questions");
                  }
                })
                .catch((err) => {
                  console.log(err);
                  if (err.response.data.Message) {
                    toast.error(err.response.data.Message, {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }
                });
        }  
      }
    
    const navigate = useNavigate();
    

    return(
    <GoogleLogin
    clientId="943308053357-5ob0cq3qkrbpt0a7q8c5iscr91t6d0bf.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={googleData}
    onFailure={googleData}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}
    render={renderProps => (
        <FaGoogle onClick={renderProps.onClick} size="2em" color="" />
        )}
    />)
      

}


export default Google;