import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
          alert(
            "Please Click on the Confirmation Link Sent to your Email Account to Verify your Account"
          );
          navigate("/");
        } else {
          alert("Username\\Email Already in Use");
        }
      })
      .catch((err) => console.log(err));
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
        alert("Entered Passwords Do Not Match");
      }
    } else {
      alert("Password too short");
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
