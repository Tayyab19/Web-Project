const ForgotPassword = () => {
  return (
    <>
      <div className="container">
        <form>
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
