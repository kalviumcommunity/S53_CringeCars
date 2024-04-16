import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", data);
      console.log(response.data.message);

      if (response.data.message === "Login successful") {
        alert("You have been logged in!");
        document.cookie = `access_token=${response.data.accessToken}`;
        navigation("/landingpage");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && (
          <div className="error-message">Enter a valid email address</div>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <div className="error-message">Password is required</div>
        )}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
