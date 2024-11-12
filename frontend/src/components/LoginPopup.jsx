import React, { useContext, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";
import axios from 'axios'


function LoginPopup({ setShowLogin }) {

    const { url, setToken } = useContext(ShopContext)
 
  const [state, setState] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if(state === "Login"){
        newUrl += "/api/user/login"
    } else {
        newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        setShowLogin(false)
    } else {
        alert(response.data.message)
    }
  }

  return (
    <div className="fixed h-full w-full bg-black/40 z-50 flexCenter">
      <form onSubmit={onLogin} className="bg-white w-[366px] p-7 rounded-lg shadow-md">
        <div className="flex justify-between items-baseline">
          <h4 className="bold-28">{state}</h4>
          <FaXmark
            onClick={() => setShowLogin(false)}
            className="medium-20 text-slate-900/70 cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-4 my-6">
          {state === "Sign Up" && (
            <input
              value={data.name}
              name="name"
              onChange={onChangeHandler}
              type="text"
              placeholder="Name"
              required
              className="border border-slate-900/20 p-2 pl-4 rounded-md outline-none"
            />
          )}
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={onChangeHandler}
            placeholder="Email"
            required
            className="border border-slate-900/20 p-2 pl-4 rounded-md outline-none"
          />
          <input
            type="password"
            value={data.password}
            name="password"
            onChange={onChangeHandler}
            placeholder="Password"
            required
            className="border border-slate-900/20 p-2 pl-4 rounded-md outline-none"
          />
        </div>
        <button type="submit" className="btn-secondary rounded-md w-full">
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-baseline gap-x-3 mt-6 mb-4 ">
          <input type="checkbox" required/>
          <p className="relative bottom-1 ">
            By continuing you agree to our <span>Terms of Service</span> and{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-secondary cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-secondary cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
