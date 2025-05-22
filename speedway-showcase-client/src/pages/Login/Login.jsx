import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/undraw_Login.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../../Firebase/firebase.config";

const Login = () => {
  const [logInError, setLoginError] = useState("");
  const [logInSuccess, setLogInSuccess] = useState("");

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("location in the login page", location);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setLoginError('');

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        setLogInSuccess('Login successfull !!');
        // navigate after login
        navigate(location?.state ? location.state : '/');
        
      })
      .catch( error => {
        console.error(error);
        setLoginError(error.message)
      })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content md:flex-row flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="py-2">
            <img className="h-60 rounded-lg" src={login} alt="" />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">Login</button>
            </div>
          </form>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="btn-outline btn w-3/4 "
            >
              Google
            </button>
          </div>
          {logInError && (
            <p className="text-red-700 text-sm text-center">{logInError}</p>
          )}
          {logInSuccess && (
            <p className="text-sm text-center text-green-700">{logInSuccess}</p>
          )}
          <p className="text-center text-red-800 text-sm mb-6 mt-4">
            Do not have an account?
            <Link to="/register">
              <span className="text-blue-700 font-bold ml-2">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
