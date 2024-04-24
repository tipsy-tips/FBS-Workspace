import React from "react";
import Header from "../../Partials/Header";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // Show & Hide Password Visibility
  const navigate = useNavigate();
  const [hasValue, setHasValue] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [getEmail, setGetEmail] = React.useState("");
  const [getPassword, setGetPassword] = React.useState("");

  let email = "tipsy.tips@gmail.com";
  let password = "1234";

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setHasValue(true);
      setGetPassword(e.target.value);
    } else {
      setHasValue(false);
    }
  };

  const handleGetEmail = (e) => {
    setGetEmail(e.target.value);
  };

  const handleCheckLogin = () => {
    if (getEmail === email && getPassword === password) {
      navigate("/home");
    } else {
      console.log("Accent not granted");
    }
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="bg-[url('/public/images/home/banner-bg.jpeg')] h-screen w-full bg-cover isolate">
      <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/50 z-[-1]"></div>
      <Header isLogin={true} />
      <div className="form">
        <div className="w-[450px] bg-black/70 min-h-[800px] h-full rounded-md mx-auto p-16">
          <h1 className="text-white text-3xl mb-5 ">Sign In</h1>

          <form action="" className="text-white">
            <div className="input__wrapper">
              <input
                type="text"
                name="email"
                required
                onChange={(e) => handleGetEmail(e)}
              />
              <label htmlFor="email">Email or Mobile Number</label>
            </div>
            <div className="input__wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="password">Password</label>
              {hasValue && (
                <button
                  type="button"
                  className="text-white absolute top-5 right-4 text-lg"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
                </button>
              )}
            </div>
            <button
              type="button"
              className="w-full p-2 rounded-md bg-accent text-white"
              onClick={handleCheckLogin}
            >
              Sign In
            </button>
            <span className="block text-center my-5 uppercase opacity-60">
              or
            </span>
            <button
              type="submit"
              className="w-full p-2 rounded-md bg-white/20 text-white"
            >
              Use a Sign-in Code
            </button>
            <Link className="block text-center my-4 hover:underline">
              Forgot Password?
            </Link>
            <div className="flex mb-3 gap-2">
              <input type="checkbox" name="" id="" className="outline-none" />
              Remember Me
            </div>
            <p className="mb-5 ">
              <span className="opacity-70 mr-2">New to Netflix?</span>
              <Link to="#" className="font-Regular">
                Sign up now.
              </Link>
            </p>
            <p className="opacity-70 text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <Link className="text-blue-600 hover:underline">Learn More</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
