"use client";

import { useState, FormEvent } from "react";
import { signUp } from "@/actions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signUp(username, password);
    if (response === "PASSWORD_LENGTH_SHORT") {
      return Swal.fire({
        icon: "error",
        title: "Password is too short!",
        text: "Please enter a longer password",
      });
    }
    if (response === "USERNAME_LENGTH_SHORT") {
      return Swal.fire({
        icon: "error",
        title: "Username is too short!",
        text: "Please enter a longer username",
      });
    }
    if (response === "SUCCESS") {
      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Successfully created user!",
      });
      router.push("/dashboard");
      return;
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label className="m-2">
          Username:{" "}
          <input
            className="form-control m-2"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <br />
        <label className="m-2">
          Password:{" "}
          <input
            className="form-control m-2"
            type="password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
      </div>
      <button type="submit" className="btn btn-primary m-2">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
