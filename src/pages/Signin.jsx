import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Signin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Authentication() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      console.log(user);
      navigate("/");

      const docSnap = await getDoc(doc(db, "users", user.uid));

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          name: user.displayName,
          timestamp: serverTimestamp(),
        });
      }

      toast.success("Logged in successfully");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  }

  return (
    <div className="xm:my-[50px]">
      <div className="flex flex-col justify-center items-center space-y-9 ">
        <h1 className="text-3xl font-semibold  mt-6">Customer Login</h1>

        <button
          className="flex relative  text-black font-bold text-[15px] py-1 px-4 rounded m-[10px] shadow-md"
          onClick={Authentication}
        >
          <FcGoogle className="h-5 w-5 mr-[8px] " />
          SIGN IN WITH GOOGLE
        </button>
      </div>

      <div className="md:flex md:justify-around md:my-20 md:mx-0    ">
        <form
          onSubmit={onSubmit}
          className=" border-2 border-gray-200 shadow-md md:w-[30%] sm:w-[60%] md:p-8 p-4 m-auto sm:mt-[40px] "
        >
          <h1 className="font-semibold md:text-3xl text-md">
            Registerd Customers
          </h1>
          <p className="text-gray-400 text-sm py-2">
            If You Have An Account, Signin With Email Address
          </p>
          <p>
            Email
            <span className="text-red-600">*</span>
          </p>
          <input
            type="email"
            className="border-2 border-gray-100 w-full h-10 my-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>
            Password
            <span className="text-red-600">*</span>
          </p>
          <input
            type="password"
            className="border-2 border-gray-100 w-full h-10 my-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <input type="checkbox" /> showpassword
          </div>

          <p className="text-gray-400 text-sm py-2">
            {" "}
            Please type the letters and numbers below{" "}
            <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            className="border-2 border-gray-100 w-full h-10 my-2"
          />

          <div className="flex w-full h-10 ">
            <div className="w-[50%]">IMAGE</div>
            <button className="bg-yellow-300 w-[50%] font-semibold text-sm rounded">
              RELOAD CAPTCHA
            </button>
          </div>
          <p className="font-semibold text-sm my-2">
            ^ Attention:{" "}
            <span className="text-gray-400 text-sm py-2">
              Captcha is case sensitive .
            </span>{" "}
          </p>

          <div className="float-right text-gray-800 my-4 ">
            <Link to={"/Forgotpassword"}> forgot your password ?</Link>
          </div>

          <button
            className="bg-yellow-300 w-full h-10 my-2 font-semibold rounded"
            onClick={onSubmit}
          >
            SignIn
          </button>
          <p className="text-red-600 text-[10px]">
            <span>*</span> Required fields
          </p>
        </form>

        <div className="w-[40%] m-auto md:mt-0 sm:mt-4  p-4">
          <h1 className="font-semibold md:text-2xl text-md">New Customers</h1>
          <p className="text-gray-400 text-sm py-2">
            Creating an account has many benifits:check out faster,keep more
            <br />
            than one address , track orders and more
          </p>

          <div className="w-full my-3">
            <button className="bg-yellow-300 md:w-[40%] sm:w-full py-3 font-semibold rounded ">
              <Link to={"/Signup"} className="md:text-inherit sm:text-sm">
                {" "}
                CREATE AN ACCOUNT
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
