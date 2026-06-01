import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Menu } from "@mantine/core";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import {
  MdOutlineBusinessCenter,
  MdOutlineDashboard,
  MdDoneAll,
} from "react-icons/md";
import { FaUserCircle, FaSave } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logOrNot } from "../actions/UserActions";
import { useNavigate } from "react-router-dom";
import { logoutClearState } from "../slices/UserSlice";
import useIsMobile from "../hooks/useIsMobile";

const NavLinks = ({ onClick }) => (
  <>
    <Link to="/" onClick={onClick} className="cool-link">
      Home
    </Link>
    <Link to="/jobs" onClick={onClick} className="cool-link">
      Jobs
    </Link>
    <Link to="/contact" onClick={onClick} className="cool-link">
      Contact
    </Link>
    <Link to="/about" onClick={onClick} className="cool-link">
      About
    </Link>
  </>
);

const UserMenu = ({ me, LogOut }) => (
  <Menu shadow="md" width={200}>
    <Menu.Target>
      <Avatar
        className="cursor-pointer"
        radius="xl"
        src={me.avatar.url}
        alt="Profile"
        size={28}
      />
    </Menu.Target>
    <Menu.Dropdown>
      <Link to="/profile">
        <Menu.Item icon={<FaUserCircle size={14} />}>My Profile</Menu.Item>
      </Link>
      {me.role === "admin" && (
        <Link to="/admin/dashboard">
          <Menu.Item icon={<MdOutlineDashboard size={14} />}>
            Dashboard
          </Menu.Item>
        </Link>
      )}
      <Link to="/applied">
        <Menu.Item icon={<MdDoneAll size={14} />}>Applied Jobs</Menu.Item>
      </Link>
      <Link to="/saved">
        <Menu.Item icon={<FaSave size={14} />}>Saved Jobs</Menu.Item>
      </Link>
      <Menu.Divider />
      <Menu.Item
        onClick={LogOut}
        color="red"
        icon={<RiLogoutBoxFill size={14} />}
      >
        Logout
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLogin, me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const LogOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("role");
    dispatch(logOrNot());
    dispatch(logoutClearState());
    navigate("/");
    toast.success("Logout Successful!");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const AuthButtons = () => (
    <div className="flex gap-2">
      <Link to="/login" className="text-sm px-3 py-1 rounded-xl blueCol">
        Login
      </Link>
      <Link to="/register" className="text-sm px-3 py-1 rounded-xl blueCol">
        Register
      </Link>
    </div>
  );

  return (
    <nav className="text-white z-50 fixed w-full bg-gray-950">
      {/* Desktop Menu */}
      {!isMobile && (
        <div className="max-w-7xl mx-auto">
          <ul className="flex justify-center items-center gap-12 pt-4 pb-3 font-semibold text-xl">
            <Link
              to="/"
              className="flex justify-center items-center titleT gap-2"
            >
              <MdOutlineBusinessCenter size={24} /> JOBLANE
            </Link>
            <NavLinks />
            {isLogin ? <UserMenu me={me} LogOut={LogOut} /> : <AuthButtons />}
          </ul>
        </div>
      )}

      {isMobile && (
        <>
          <div className="py-3 px-4 flex justify-between items-center relative">
            <Link
              to="/"
              className="text-lg titleT flex justify-center items-center gap-1"
            >
              <MdOutlineBusinessCenter size={24} /> JOBLANE
            </Link>
            <div className="flex items-center gap-4">
              {isLogin ? <UserMenu me={me} LogOut={LogOut} /> : <AuthButtons />}
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <RxCross1 size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          <div
            className={`fixed inset-0 bg-gray-950 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ top: "60px" }}
          >
            <ul className="flex flex-col gap-10 text-2xl justify-start w-full pt-20 items-center">
              <NavLinks onClick={toggleMenu} />
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};
