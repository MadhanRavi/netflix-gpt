import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { languages, LOGO_URL } from "../utils/constants";
import { addGptMovies, toggleSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

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

  const handleGptSearch = () => {
    dispatch(toggleSearch());
  };

  const handleClearSearch = () => {
    dispatch(toggleSearch());
    dispatch(addGptMovies({}));
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute px-4 z-10 bg-gradient-to-b from-black w-screen flex flex-col md:flex-row justify-between">
      <Link to="/">
        <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="Logo" />
      </Link>
      {user && (
        <div className="flex justify-between">
          {showGptSearch && (
            <select
              className="bg-gray-300 my-4 px-2 md:py-2 md:px-4 md:m-4"
              onChange={handleLangChange}>
              {languages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div className="flex">
            <button
              onClick={showGptSearch ? handleGptSearch : handleClearSearch}
              className="bg-yellow-400 py-2 px-4 mx-2 my-4 md:m-4 rounded-lg font-bold hover:bg-yellow-600">
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
          </div>
          <div className="flex items-center p-2 md:p-4">
            <img
              className="w-12 h-12 mr-4 rounded-lg border-red-700 border-2"
              src={user.photoURL}
              alt="User"
            />
            <div className="text-center">
              <h1 className="font-bold text-white text-xl">
                {user.displayName}
              </h1>
              <button
                onClick={handleSignOut}
                className="font-bold text-white italic text-sm">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
