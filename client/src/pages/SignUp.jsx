import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex mx-auto max-w-4xl p-4 flex-col md:flex-row md:items-center gap-4">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              View
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is demo project. You can SignUp with your email and password or
            with google
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-600">
              {" "}
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
