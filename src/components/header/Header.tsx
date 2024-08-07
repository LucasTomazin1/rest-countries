import { ReactElement } from "react";
import { IoMoonOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button>
        <IoMoonOutline />
        Dark mode
      </button>
    </header>
  );
};
