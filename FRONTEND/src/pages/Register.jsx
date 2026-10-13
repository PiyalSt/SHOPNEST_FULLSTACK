import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Link } from "react-router";

const Register = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (!username) {
      toast.error("Please enter your full name!");
      setUsernameError(true);
      return;
    }
    if (!email) {
      toast.error("Please enter your email address!");
      setEmailError(true);
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      setEmailError(true);
      return;
    }
    if (!password) {
      toast.error("Please enter your password!");
      setPasswordError(true);
      return;
    }
    if (!confirmPassword) {
      toast.error("Please enter your confirmPassword!");
      setConfirmPasswordError(true);
      return;
    }
    if (confirmPassword !== password) {
      toast.error("Please type same password!");
      setConfirmPasswordError(true);
      return;
    }

    toast.success("Registration successfully complete.");
  };

  return (
    <div className="w-full min-h-screen bg-blue-100 flex items-center justify-center px-10">
      <div className="w-2xl py-4 px-8 bg-white shadow-2xl shadow-blue-400 rounded-md">
        <h2 className="text-center text-3xl font-semibold uppercase text-slate-800 py-8">
          Create your Shopnest account
        </h2>
        <div>
          <div className="space-y-2">
            <div className="w-full flex flex-col gap-1">
              <h4
                className={`text-base font-medium ${usernameError ? "text-red-400" : "text-slate-800"}`}
              >
                Full Name
              </h4>
              <div
                className={`relative border-2 py-2 px-4 rounded-md ${usernameError ? "border-red-400" : "border-blue-200"}`}
              >
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError(false);
                  }}
                  className={`w-full outline-0 font-medium pr-12 ${usernameError ? "text-red-400" : "text-slate-700"}`}
                  type="text"
                  placeholder="Enter your full name"
                />
                <FiUser
                  className={`absolute top-1/2 -translate-y-1/2 right-4 text-xl ${usernameError ? "text-red-400" : "text-blue-400"}`}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h4
                className={`text-base font-medium ${emailError ? "text-red-400" : "text-slate-800"}`}
              >
                Email Address
              </h4>
              <div
                className={`relative border-2 py-2 px-4 rounded-md ${emailError ? "border-red-400" : "border-blue-200"}`}
              >
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  className={`w-full outline-0 font-medium pr-12 ${emailError ? "text-red-400" : "text-slate-700"}`}
                  type="emai       l"
                  placeholder="Enter your email address"
                />
                <HiOutlineMail
                  className={`absolute top-1/2 -translate-y-1/2 right-4 text-xl ${emailError ? "text-red-400" : "text-blue-400"}`}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h4
                className={`text-base font-medium ${passwordError ? "text-red-400" : "text-slate-800"}`}
              >
                Password
              </h4>
              <div
                className={`relative border-2 py-2 px-4 rounded-md ${passwordError ? "border-red-400" : "border-blue-200"}`}
              >
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                  className={`w-full outline-0 font-medium pr-12 ${passwordError ? "text-red-400" : "text-slate-700"}`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                {showPassword ? (
                  <FaRegEye
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute top-1/2 -translate-y-1/2 right-4 text-xl ${passwordError ? "text-red-400" : "text-blue-400"}`}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute top-1/2 -translate-y-1/2 right-4 text-xl ${passwordError ? "text-red-400" : "text-blue-400"}`}
                  />
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <h4
                className={`text-base font-medium ${confirmPasswordError ? "text-red-400" : "text-slate-800"}`}
              >
                Confirm Password
              </h4>
              <div
                className={`relative border-2 py-2 px-4 rounded-md ${confirmPasswordError ? "border-red-400" : "border-blue-200"}`}
              >
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setConfirmPasswordError(false);
                  }}
                  className={`w-full outline-0 font-medium pr-12 ${confirmPasswordError ? "text-red-400" : "text-slate-700"}`}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your confirm password"
                />
                {showConfirmPassword ? (
                  <FaRegEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute top-1/2 -translate-y-1/2 right-4 text-xl ${confirmPasswordError ? "text-red-400" : "text-blue-400"}`}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute top-1/2 -translate-y-1/2 right-4 text-xl ${confirmPasswordError ? "text-red-400" : "text-blue-400"}`}
                  />
                )}
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <label htmlFor="agree" className="flex items-center gap-2">
                <input className="accent-blue-400" id="agree" type="checkbox" />
                <p className="text-sm text-slate-800 font-medium cursor-pointer">
                  I agree ot the{" "}
                  <span className="text-blue-400">Terms & Privecy Policy</span>
                </p>
              </label>
              <div className="space-y-1">
                <button
                  onClick={handleSignup}
                  className="w-full py-2 bg-blue-400 text-white text-sm font-medium rounded-md active:scale-95 duration-200 transition-all hover:bg-blue-500 cursor-pointer"
                >
                  Create Account
                </button>
                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <Link to={'/login'} className="text-blue-400 cursor-pointer hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 py-2 border-2 border-blue-300 text-slate-800 hover:text-white text-sm font-medium rounded-md active:scale-95 duration-200 transition-all hover:bg-blue-500 cursor-pointer">
                <FcGoogle /> Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
