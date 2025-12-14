import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/");
      });
  };

  const user = useSelector((store) => store.user);
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <Link to="/">
        <img
          className="w-44 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
      </Link>
      {user && (
        <div className="flex items-center p-4">
          <img
            className="w-12 h-12 mr-4 rounded-lg border border-red-700 border-2"
            src={user.photoURL}
            alt="User"
          />
          <div className="text-center">
            <h1 className="font-bold text-white text-xl">{user.displayName}</h1>
            <button
              onClick={handleSignOut}
              className="font-bold text-white italic text-sm">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
