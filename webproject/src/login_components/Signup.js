import "./Login.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.formpassword.value === e.target.formpassword2.value) {
      alert(
        "Please Click on the Confirmation Link Sent to your Email Account to verify your Account"
      );
    } else {
      alert("Entered Passwords Do Not Match");
    }
  };
  return (
    <>
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
                          class="form-control form-control-md"
                          placeholder="Email"
                          required="true"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="formusername"
                          class="form-control form-control-md"
                          placeholder="Username"
                          required="true"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="formpassword"
                          class="form-control form-control-md"
                          placeholder="Password"
                          required="true"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="formpassword2"
                          class="form-control form-control-md"
                          placeholder="Re-Type Your Password"
                          required="true"
                        />
                      </div>

                      <div class="d-flex justify-content-center mb-3">
                        <button
                          class="btn btn-primary  btn-block btn-lg gradient-custom-4 text-body"
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
    </>
  );
};

export default Signup;
