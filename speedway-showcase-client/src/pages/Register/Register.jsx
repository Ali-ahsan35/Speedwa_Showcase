import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo_url");
    const name = form.get("name");
    console.log(photo, name, email, password);

    //  reset error and success
    setRegisterError("");
    setRegisterSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Upper case character!"
      );
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Special character!"
      );
      return;
    }

    // create user
    createUser(email, password, name)
      .then((result) => {
        console.log(result.user);
        setRegisterSuccess("User Created Successfully !");
        const user = {email, name};
        fetch('https://speedway-showcase-server-nkh5usuur-ahsans-projects-b426b9be.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then( res=> res.json())
          .then( data => {
            console.log(data);
          })
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-success">REgister</button>
            </div>
          </form>
          {
              registerError && <p className="text-sm text-center text-red-700">{registerError}</p>
            }
            {
              registerSuccess && <p className="text-sm text-center text-green-700">{registerSuccess}</p>
            }
          <p className="text-center text-red-800 text-sm mb-6">
            Already have an account?
            <Link to="/login">
              <span className="text-blue-700 font-bold ml-2">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
