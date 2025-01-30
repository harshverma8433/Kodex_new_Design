// import { RiArrowDownSLine } from "react-icons/ri";
// import { FiSearch } from "react-icons/fi";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link, useLocation } from "react-router-dom";
// import "./NavBar.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { MdAccountCircle } from "react-icons/md";


// const Navbar = ({ user, setUser }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [openAccount, setopenAccount] = useState(false);

//   const handleLogout = async () => {
//     try {
//       const url = "http://localhost:4444/logout";
//       const response = await axios.post(url, {}, { withCredentials: true });

//       if (response.status === 200) {
//         toast.success(response.data.message);
//         setUser(null);
//         navigate("/");
//       } else {
//         toast.error("Error while logging out!!!");
//       }
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };


//   return (
//     <nav className="flex w-full justify-between space-x-3  pt-4 items-center font-sans">
//       <div className="flex items-center w-[60%]">
//         <Link to="/">
//           <img
//             src="../../../public/Logo2_2.png"
//             alt="logo"
//             className="w-44 pt-2 img1"
//           />
//         </Link>

//         <Link to="/">
//           <img
//             src="../../../public/logo3.png"
//             alt="logo"
//             className="w-10 img2 mr-2"
//           />
//         </Link>

//         {/* <div id="searchbar">
//           <div className="xl:flex sm:hidden xl:flex-row relative w-full">
//             <input
//               className="h-9 w-80 rounded-lg text-sm bg-zinc-800 text-white focus:outline-0 pl-8"
//               placeholder="What do you want to learn today?"
//               type="search"
//               name="search"
//               id="search"
//             />
//             <FiSearch className="absolute top-3 left-2 text-white text-bold" />
//           </div>

//           <div className="sm:ml-4 md:ml-0 xl:hidden relative sm:flex sm:flex-row sm:w-72 md:w-full">
//             <input
//               className="h-9 sm:w-80 md:w-[265px] rounded-lg bg-zinc-800 text-white focus:outline-0 px-8"
//               placeholder="Search"
//               type="text"
//               name="search"
//               id="search"
//             />
//             <FiSearch className="absolute top-3 left-2 text-white text-bold" />
//           </div>
//         </div> */}
//       </div>

//       <div className="flex bg items-center justify-end space-x-3 w-[50%]" id="services">
//         <div className="flex items-center  font-sans space-x-1 text-sm text-white">
//           {/* Add active class conditionally */}
//           <Link
//             to="/training"
//             className={`px-4 text-lg py-2 rounded-full ${location.pathname === "/training"
//               ? "bg-col-5 navbar-link-active"
//               : "bg-col-6"
//               }`}
//           >
//             Trainings
//           </Link>
//           <Link
//             to="/service"
//             className={`px-4 text-lg py-2 rounded-full ${location.pathname === "/service"
//               ? "bg-col-5 navbar-link-active"
//               : "bg-col-6"
//               }`}
//           >
//             Services
//           </Link>
//           <Link
//             to="/member"
//             className={`px-4 text-lg py-2 rounded-full ${location.pathname === "/member"
//               ? "bg-col-5 navbar-link-active"
//               : "bg-col-6"
//               }`}
//           >
//             Connected Members
//           </Link>

//           {
//   user ? (
//     <div className="relative">
//       <MdAccountCircle
//         onClick={() => setopenAccount(!openAccount)}
//         className="text-4xl cursor-pointer bg-col-7"
//       />
//       {openAccount && (
//         <div className="absolute  bg-zinc-800 rounded-xl w-36 top-full mt-2">
//           <div className="flex flex-col items-center">
//             <h1
//               className="py-3 rounded-t-xl w-full h-full hover:bg-zinc-900 cursor-pointer text-center"
//             >
//               {user.name}
//             </h1>
//             <button
//               onClick={handleLogout}
//               className="py-3 rounded-b-xl h-full cursor-pointer hover:bg-zinc-900 w-full text-center"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   ) : (
//     <Link to="/login"
//     className={`px-4 text-lg py-2 rounded-full ${
//       location.pathname === "/login" || location.pathname === "/register"
//         ? "bg-col-5 navbar-link-active"
//         : "bg-col-6"
//     }`}>
//       Log In
//     </Link>
//   )
// }


//         </div>

//         {/* <div className="w-12 h-12 bg-gray-300 rounded-full"></div> */}
//       </div>

//       <div className="flex space-x-4">
//         <div className="text-white" id="browse">
//           <h1 className="text-white flex items-center gap-x-2">
//             Browse <RiArrowDownSLine className="text-xl" />
//           </h1>
//         </div>

//         <div id="ham" className="w-[50%]">
//           <RxHamburgerMenu className="text-white text-2xl font-bold" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "./logo.png"
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black text-white  w-full z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and brand */}
          <Link to="/" className="flex  h-24 items-center">
            <div className="flex items-center ">
              <img src={logo} alt="logo.png" className='w-[60%] h-20  '  />
              <h1 className='kodev-font '>
                <span className="kode-col text-xl ">KODE</span>
                <span className="text-white text-xl ">VORTEX</span>
              </h1>

            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <div className="bg-[#985A3B] rounded-xl px-6 pb-2 flex items-center space-x-4">
                <Link to="/" className={`${isActive('/') ? ' bg-black rounded-t-2xl' : 'text-white '} hover:text-teal-500 px-5 py-2 rounded-md text-sm font-medium`}>Home</Link>
                <Link to="/internship" className={`${isActive('/internship') ? ' bg-black rounded-t-2xl' : 'text-white'} hover:text-teal-500 px-5 py-2 rounded-md text-sm font-medium`}>Internship</Link>
                <Link to="/course" className={`${isActive('/course') ? ' bg-black rounded-t-2xl' : 'text-white'} hover:text-teal-500 px-5 py-2 rounded-md text-sm font-medium`}>Courses</Link>
                <Link to="/training" className={`${isActive('/training') ? ' bg-black rounded-t-2xl' : 'text-white'} hover:text-teal-500 px-5 py-2 rounded-md text-sm font-medium`}>Trainings</Link>
                <Link to="/service" className={`${isActive('/service') ? ' bg-black rounded-t-2xl' : 'text-white'} hover:text-teal-500 px-5 py-2 rounded-md text-sm font-medium`}>Services</Link>
                <Link to="/login" className={`${isActive('/login') ? ' bg-black rounded-t-2xl' : 'text-white'} hover:text-teal-500 px-5 py-2 rounded-md text-sm font-medium`}>Log In</Link>
                <Link to="/register" className="kode-col1 text-white px-6 py-1.5 rounded-full text-sm font-medium hover:bg-teal-600 mt-1 transition-colors">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#8B5E34] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#8B5E34]">
          <Link to="/" className={`${isActive('/') ? 'text-teal-500' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-black/20`}>Home</Link>
          <Link to="/internship" className={`${isActive('/internship') ? 'text-teal-500' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-black/20`}>Internship</Link>
          <Link to="/course" className={`${isActive('/courses') ? 'text-teal-500' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-black/20`}>Courses</Link>
          <Link to="/trainings" className={`${isActive('/trainings') ? 'text-teal-500' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-black/20`}>Trainings</Link>
          <Link to="/services" className={`${isActive('/services') ? 'text-teal-500' : 'text-white'} block px-3 py-2 rounded-md text-base font-medium hover:bg-black/20`}>Services</Link>
          <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-black/20">Log In</a>
          <button className="w-full bg-teal-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-600 transition-colors mt-2">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


