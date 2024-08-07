import { ReactElement } from "react";
import { IoMoonOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="flex px-14 py-5 justify-between shadow-md">
      <h1 className="font-bold text-2xl">Where in the world?</h1>
      <button className="flex gap-1 items-center">
        <IoMoonOutline />
        Dark mode
      </button>
    </header>
  );
};
