import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import "./Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FacebookLogin } from "react-facebook-login";
import Facebook from "./facebook";

const Login = ({ verifyLogin }) => {
  const signIn = async (email, password) => {
    axios({
      method: "post",
      url: `http://localhost:5000/users/signin`,
      data: {
        email: email,
        password: password,
      },
      Headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status == 200) {
          verifyLogin(response.data);
          navigate("/questions/page/1");
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
  };

  const faceBookData = (response)=>{
    console.log(response)
  }

  const navigate = useNavigate();


  const [errorMessage, setErrorMessage] = useState("");

  const [showForgetPassword, setForgetPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(e.target.typeEmailX.value, e.target.typePasswordX.value);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section>
        {showForgetPassword && (
          <ForgotPassword setForgetPassword={setForgetPassword} />
        )}
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card ">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="text-primary fw-bold mb-2 text-uppercase ">
                      Login
                    </h2>
                    <p>Please enter your login and password!</p>

                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          required={true}
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          required={true}
                        />
                      </div>

                      {errorMessage && (
                        <p
                          style={{
                            fontSize: "20px",
                            color: "red",
                            fontWeight: "bolder",
                          }}
                        >
                          {" "}
                          {errorMessage}{" "}
                        </p>
                      )}

                      <div className="text-end mt-2 mb-5">
                        <a
                          className="forgetPassword"
                          onClick={(e) => {
                            e.preventDefault();
                            setForgetPassword(true);
                          }}
                        >
                          Forgot password?
                        </a>
                      </div>

                      <button
                        className="btn btn-primary  btn-block btn-expand btn-lg"
                        type="submit"
                      >
                        LOG IN
                      </button>
                    </form>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-black mx-3">
                        <FaGoogle size="2em" color="" />
                      </a>
                      <div>
                          <Facebook/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="signup">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
