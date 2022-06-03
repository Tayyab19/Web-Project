import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const signUp = (email, username, password) => {
    axios({
      method: "post",
      url: `http://localhost:5000/users/signup`,
      data: {
        email: email,
        password: password,
        username: username,
      },
      Headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          toast.success(
            "Please Click on the Confirmation Link Sent to your Email Account to Verify your Account",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          //navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Username\\Email Already in Use", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.formpassword.value.length > 5) {
      if (e.target.formpassword.value === e.target.formpassword2.value) {
        signUp(
          e.target.formemail.value,
          e.target.formusername.value,
          e.target.formpassword.value
        );
      } else {
        toast.error("Entered Passwords Do Not Match", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Password too short", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      <section>
        <div className="d-flex align-items-center h-100 ">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-primary text-uppercase text-center mb-5">
                      Signup
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="formemail"
                          className="form-control form-control-md"
                          placeholder="Email"
                          required="true"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="formusername"
                          className="form-control form-control-md"
                          placeholder="Username"
                          required="true"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="formpassword"
                          className="form-control form-control-md"
                          placeholder="Password"
                          required="true"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="formpassword2"
                          className="form-control form-control-md"
                          placeholder="Re-Type Your Password"
                          required="true"
                        />
                      </div>

                      <div className="d-flex justify-content-center mb-3">
                        <button
                          className="btn btn-primary  btn-block btn-lg gradient-custom-4 text-body"
                          type="submit"
                        >
                          SIGN UP
                        </button>
                      </div>

                      <div className="mt-3 text-center">
                        <p className="mb-0 ">
                          Already have an account?{" "}
                          <Link to="/" className="text-black-50 fw-bold">
                            Log In
                          </Link>
                        </p>
                      </div>
                    </form>
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

export default Signup;
