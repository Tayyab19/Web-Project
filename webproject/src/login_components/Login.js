import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
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

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          required="true"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          class="form-control form-control-lg"
                          placeholder="password"
                          required="true"
                        />
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a class="text-black-50" href="#!">
                          <Link
                            to="/forgotpassword"
                            className="text-black-50 fw-bold"
                          >
                            Forgot password?
                          </Link>
                        </a>
                      </p>
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
                      <a href="#!" className="text-black login-color mx-3">
                        <FaFacebook size="2em" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-black-50 fw-bold">
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
    </>
  );
};

export default Login;
