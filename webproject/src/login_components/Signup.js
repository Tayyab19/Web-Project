import "./Login.css";
import { Link } from "react-router-dom";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have been successfully registered!");
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
                          id="form3email"
                          class="form-control form-control-md"
                          placeholder="email"
                          required="true"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="formusername"
                          class="form-control form-control-md"
                          placeholder="username"
                          required="true"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="formpassword"
                          class="form-control form-control-md"
                          placeholder="password"
                          required="true"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3FirstName"
                          class="form-control form-control-md"
                          placeholder="first name"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3LastName"
                          class="form-control form-control-md"
                          placeholder="last name"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Address"
                          class="form-control form-control-md"
                          placeholder="address"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Github"
                          class="form-control form-control-md"
                          placeholder="github"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Linkedin"
                          class="form-control form-control-md"
                          placeholder="linkedin"
                        />
                      </div>

                      <div class="form-outline mb-4 ">
                        <div class="col-auto my-1">
                          <label
                            class="mr-sm-2 mx-2"
                            for="inlineFormCustomSelect"
                          >
                            Stack Preference
                          </label>
                          <select
                            class="custom-select mr-sm-2"
                            id="inlineFormCustomSelect"
                          >
                            <option selected>Choose...</option>
                            <option value="1">Ruby on Rails</option>
                            <option value="2">Python</option>
                            <option value="3">Java</option>
                            <option value="3">ASP.NET</option>
                          </select>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mb-3">
                        <button
                          class="btn btn-primary  btn-block btn-lg gradient-custom-4 text-body"
                          type="submit"
                        >
                          Sign up
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
