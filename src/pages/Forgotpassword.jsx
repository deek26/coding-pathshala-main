import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  setDoc,
  getDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../Firebase";

import { async } from "@firebase/util";
import { type } from "@testing-library/user-event/dist/type";

export default function Forgotpassword() {
  const [email, setemail] = useState("");
  const navigate = useNavigate("");

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("you got a mail on junk");
    } catch (error) {
      toast.error("invalid email");
    }
    async function Authentication() {
      console.log("hello");
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const userCredentials = await signInWithPopup(auth, provider);
        const user = userCredentials.user;
        console.log(user);

        const docSnap = await getDoc(doc(db, "users", user.uid));
        if (!docSnap.exists()) {
          await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            name: user.displayName,
            timestamp: serverTimestamp(),
          });
        }
        navigate("/");

        toast.success("That's the spirit");
      } catch (error) {
        toast.error("getting trouble in login");
      }
    }
  }
  async function Authentication() {
    console.log("hello");
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      console.log(user);

      const docSnap = await getDoc(doc(db, "users", user.uid));
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          name: user.displayName,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");

      toast.success("That's the spirit");
    } catch (error) {
      toast.error("getting trouble in login");
    }
  }
  return (
    <section>
      <h1 className=" font-bold text-center py-10 text-[2rem]">
        Forgot Password
      </h1>
      <div className="flex flex-wrap justify-center max-w-6xl mx-6 items-center">
        <div className="md:w-[67%] lg:w-[50%] md:mb-8 lg:mb-4 sm:mb-10">
          <img src="signin.jpg" alt="image" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-10">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="w-full rounded-lg px-4 py-2  my-2 border-4 focus:border-blue-500 focus:outline-none  "
              placeholder="E-mail Address"
              onChange={(e) => setemail(e.target.value)}
            />
            <div className="flex justify-between mb-4">
              <p className="text-sm">
                Already Have An Account?{" "}
                <Link to="/Signup" className="font-bold text-red-500">
                  Register
                </Link>
              </p>
              <p>
                <Link to="/Signin" className="text-blue-600 font-bold font-sm">
                  {" "}
                  SignIn instead
                </Link>
              </p>
            </div>

            <button
              title="Reset password"
              back={"bg-blue-600"}
              className="bg-blue-600 text-center font-semibold w-full text-white h-[50px] rounded"
            >
              Reset password
            </button>

            <div className="flex  items-center my-4 before:border-t before:flex-1 before:border-gray-300  after:border-t after:flex-1 after:border-gray-300">
              <p className="mx-3 font-bold text-sm">OR</p>
            </div>
            <button
              type="button"
              click={true}
              title="Continue With Google"
              pic="FcGoogle"
              back={"bg-red-600"}
              className="bg-red-600 text-center font-semibold w-full text-white h-[50px] rounded"
              onClick={Authentication}
            >
              Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
