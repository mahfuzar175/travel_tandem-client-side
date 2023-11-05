import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_CENTER,
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          toast.error("Invalid email or password. Please try again.", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          console.error(error);
          toast.error("Login failed. Please try again later.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="mb-8 p-4">
        <h1 className="text-5xl font-bold text-center">Please Login!</h1>
        <form onSubmit={handleLogin} className="md:w-2/4 lg:w-1/3 mx-auto mt-4">
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
            <button className="btn btn-primary normal-case text-base font-semibold">
              Continue with email/password
            </button>
          </div>
        </form>
        <div className="mt-4 mb-2 text-center">Or,</div>
        <div className="flex justify-center items-center">
          <button
            className="btn btn-outline normal-case"
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Login with Google
          </button>
        </div>
        <p className="text-center mt-4">
          Don't have an account? Please{" "}
          <Link className="text-blue-700 font-medium underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
