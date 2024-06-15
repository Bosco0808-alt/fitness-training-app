const Signup = () => {
  return (
    <form>
      <div className="form-group">
        <label className="m-2">Username: </label>
        <input className="form-control m-2" autoComplete="username"></input>
        <label className="m-2">Password: </label>
        <input
          className="form-control m-2"
          type="password"
          autoComplete="new-password"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary m-2">
        Sign In
      </button>
    </form>
  );
};

export default Signup;
