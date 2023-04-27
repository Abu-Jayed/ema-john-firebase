import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        setSuccess("user login successfully");
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <div className="shadow-orange-400 shadow-inner form-container">
      <h2 className="form-title mt-2">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input className="bg-gray-50" type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input className="bg-gray-50"
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          {/* <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span>: <span>Show Password</span>
                        }
                        </small></p> */}
        </div>
        <input className="hover:cursor-pointer btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-john?{" "}
          <Link className="text-green-700 font-semibold" to="/signup">
            Create New Account
          </Link>
        </small>
      </p>
      <p className="text-red-700">{error}</p>
      <p className="text-green-600">{success}</p>
    </div>
  );
};

export default Login;
