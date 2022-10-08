import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex justify-evenly py-2 font-semibold text-xl">
        <Link to="/home" className="text-white no-underline">Home</Link>
        <Link to="/about" className="text-white no-underline">About</Link>
        <Link to="/contact" className="text-white no-underline">Contact</Link>
        <Link to="/contact2" className="text-white no-underline">Contact2</Link>
        <Link to="/contact3" className="text-white no-underline">Contact3</Link>
        <Link to="/childdata" className="text-white no-underline">ChildData</Link>
        <Link to="/parentdata" className="text-white no-underline">ParentData</Link>
        <Link to="/todo" className="text-white no-underline">ToDo App</Link>
      </ul>
    </div>
  );
};

export default Header;
