import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MdAccountCircle } from "react-icons/md";
import logo from "./logo.png";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAccount, setopenAccount] = useState(false);

  const handleLogout = async () => {
    try {
      const url = "http://localhost:4444/logout";
      const response = await axios.post(url, {}, { withCredentials: true });

      if (response.status === 200) {
        toast.success(response.data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error("Error while logging out!!!");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="flex w-full justify-between px-[5%] pt-4 items-center font-sans">
      <div className="flex items-center ">
        <Link to="/" className="flex  h-24 items-center">
          <div className="flex items-center ">
            <img src={logo} alt="logo.png" className="w-[60%] h-20  " />
            <h1 className="kodev-font ">
              <span className="kode-col text-xl ">KODE</span>
              <span className="text-white text-xl ">VORTEX</span>
            </h1>
          </div>
        </Link>
      </div>

      <div
        className="flex items-center  space-x-3 "
        id=""
      >
        <div className="flex items-center   font-sans space-x-1 text-sm text-white">
          {/* Add active class conditionally */}
          <hr className="w-[1px] h-8 bg-white" />
          <Link
              to="/"
              className={`px-4 text-lg py-2 rounded-full ${
                location.pathname === "/"
                  ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9]  navbar-link-active"
                  : "hover:border-b-4 hover:border-[#3da9b9] "
              }`}
            >
              Home
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/training"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/training"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9]  navbar-link-active  "
                : "hover:border-b-4 hover:border-[#3da9b9] "
            }`}
          >
            Trainings
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/internship"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/internship"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9]  navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Internship
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/about-us"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/about-us"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9]  navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            About us
          </Link>
          <hr className="w-[1px] h-8 bg-white" />

          <Link
            to="/contact-us"
            className={`px-4 text-lg py-2 rounded-full ${
              location.pathname === "/contact-us"
                ? "border-b-2 border-[#056777] hover:border-b-4 hover:border-[#3da9b9]  navbar-link-active"
                : "hover:border-b-4 hover:border-[#3da9b9]"
            }`}
          >
            Contact us
          </Link>

          {user ? (
            <div className="relative">
              <MdAccountCircle
                onClick={() => setopenAccount(!openAccount)}
                className="text-4xl cursor-pointer bg-col-7"
              />
              {openAccount && (
                <div className="absolute  bg-zinc-800 rounded-xl w-36 top-full mt-2">
                  <div className="flex flex-col items-center">
                    <h1 className="py-3 rounded-t-xl w-full h-full hover:bg-zinc-900 cursor-pointer text-center">
                      {user.name}
                    </h1>
                    <button
                      onClick={handleLogout}
                      className="py-3 rounded-b-xl h-full cursor-pointer hover:bg-zinc-900 w-full text-center"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="relative flex pr-24">
              <Link
                to="/login"
                className={`px-4 font-semibold text-lg py-2 pr-12 rounded-full ${
                  location.pathname === "/login" ||
                  location.pathname === "/login"
                    ? "bg-col-5 navbar-link-active"
                    : "bg-white text-black"
                }`}
              >
                Log In
              </Link>

              <Link
                to="/signup"
                className={`px-4 absolute right-[-50px] mr-24  top-0 bottom-0 text-lg py-5 flex items-center rounded-full ${
                  location.pathname === "/sing-up" ||
                  location.pathname === "/signup"
                    ? "bg-col-5  navbar-link-active"
                    : "bg-col-16"
                }`}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

      </div>

      
    </nav>
  );
};

export default Navbar;
