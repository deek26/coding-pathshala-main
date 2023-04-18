import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { FcHome } from "react-icons/fc";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);
  const [edit, setEdit] = useState(false);

  function SignOut() {
    auth.signOut();
    navigate("/");

    toast.info("logout successfull");
  }
  function onChange(e) {
    setName(e.target.value);
  }
  async function onSubmit() {
    if (auth.currentUser.displayName !== name) {
      // updating user profile inauthentication and firebase
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        name,
      });

      toast.success("profile updated");
    }
  }
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col items-center xm:w-[80%]">
        <h1 className="font-bold text-[1.5rem] mt-6">My Profile</h1>
        <div className=" ">
          <form>
            <input
              type="text"
              value={name}
              onChange={onChange}
              disabled={!edit}
              className={`w-full border-[2px] border-gray-600 mb-6 mt-6 xm:text-xs md:text-lg  px-2 h-9 text-center hover:border-black transition duration-300 ease-in-out cursor-pointer  ${
                edit && "bg-red-200 focus:bg-red-400"
              }`}
            />
            <input
              type="email"
              value={email}
              disabled
              className="w-full border-[2px] border-gray-600 mb-6 h-9 text-center xm:text-xs md:text-lg px-2   hover:border-black transition duration-300 ease-in-out cursor-pointer rounded"
            />
          </form>
          <div className="flex justify-between mb-4   ">
            <p>
              Do want to Rename the text ?
              <span
                onClick={() => {
                  edit && onSubmit();
                  setEdit((prevState) => !prevState);
                }}
                className="text-red-700  hover:text-red-900 transition duration-300 ease-in-out cursor-pointer"
              >
                {edit ? "Apply Changes" : "Edit"}
              </span>
            </p>
            <p onClick={SignOut} className="text-blue-700 cursor-pointer">
              Signout
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
