import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const user = useSelector((store) => store.user);
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <Link to="/">
        <img className="w-44 " src={LOGO_URL} alt="Logo" />
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
