import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/features/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: any) => state.theme.mode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  console.log(themeMode);
  return (
    <div className="text-white max-w-[1440px] mx-auto justify-between flex items-center py-4 w-[90vw]">
      <div className="">test</div>

      <div className="gap-2 flex ">
        <button
          type="button"
          className="border-green border py-2 rounded-full px-4 text-sm font-bold text-green"
        >
          Log In
        </button>
        <button
          type="button"
          className="bg-green text-blueDark px-4 rounded-full font-bold w-[100px] text-sm py-2"
        >
          Register
        </button>

        <button onClick={handleToggleTheme} className="text-white">
          {themeMode === "dark" ? (
            <MdLightMode className="text-2xl" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
