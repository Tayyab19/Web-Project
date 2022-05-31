import "./Login.css";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const {token} = useParams();

  const passwordReset = (password) => {
      axios.post(`http://localhost:5000/users/resetPassword`,{headers: {
        'Authorization': token 
      }},{data:{password:password}})
      .then((response) => {
        if (response.status == 200) {
            navigate("/");
          }
      })
      .catch((err) => {
        toast.error('Internal Error Occured', {
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
        passwordReset(e.target.formpassword.value);
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
                      Reset Password
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="formpassword"
                          className="form-control form-control-md"
                          placeholder="Enter New Password"
                          required="true"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="formpassword2"
                          className="form-control form-control-md"
                          placeholder="Re-Type New Password"
                          required="true"
                        />
                      </div>

                      <div className="d-flex justify-content-center mb-3">
                        <button
                          className="btn btn-primary  btn-block btn-lg gradient-custom-4 text-body"
                          type="submit"
                        >
                          Reset Password
                        </button>
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

export default ResetPassword;
