const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link Sent");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group mt-5">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <button type="submit" class="btn btn-primary">
            Send the reset password link
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
