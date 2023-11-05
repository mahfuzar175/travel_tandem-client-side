
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const {createUser} =  useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, photo, password);
    
    // Check password criteria
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
  if (!passwordRegex.test(password)) {
    toast.error("Password must be at least 6 characters long, contain a capital letter, and a special character.", {
      position: toast.POSITION.TOP_CENTER,
    });
    return; // Stop execution if password doesn't meet criteria
  }

  try{
    // create user
    const result = await createUser(email, password)
    console.log(result.user);

    // update profile
    updateProfile(result.user, {
      displayName: name,
      photoURL: photo
    } )

    
    .then(() => console.log('profile updated'))
    .catch((err) => {
      console.log(err);
    });

    toast.success("Registration successful!", {
      position: toast.POSITION.TOP_CENTER,
    });
    
  } catch (error) {
    console.error(error);
    toast.error("Registration failed. Please try again later.", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
};


  return (
    <div>
      <ToastContainer />
      <div className="mb-8 p-2">
        <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <form
          onSubmit={handleRegister}
          className="md:w-2/4 lg:w-1/3 mx-auto mt-4"
        >
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
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="URL"
              className="input input-bordered"
              required
              id=""
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
            <button className="btn btn-primary normal-case text-base font-semibold">
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? Go to{" "}
          <Link className="text-blue-700 font-medium underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
