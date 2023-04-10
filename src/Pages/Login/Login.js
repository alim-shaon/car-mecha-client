import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signInEmail, googleSignIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInEmail(email, password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    // console.log("handelling google sign in");
    const provider = new GoogleAuthProvider();
    googleSignIn(provider)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFacebookSignIn = () => {
    console.log("Facebook Sign In Comming UP");
  };
  return (
    <div className="hero w-full my-16">
      <div className="hero-content grid grid-col-1 md:grid-cols-2 justify-items-center gap-20">
        <div className="text-center lg:text-left w-3/4">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Car Mecha{" "}
            <Link className="text-orange-600 font-bold" to={"/signup"}>
              Sign Up
            </Link>
          </p>
          <div className="text-center my-5 flex justify-evenly">
            <button className="" onClick={handleGoogleSignIn}>
              <FcGoogle className="w-8 h-8" />
            </button>
            <button className="" onClick={handleFacebookSignIn}>
              <FaFacebook className="w-8 h-8 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
