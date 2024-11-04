import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";
import { Menu, X, User, LogOut, Home, Leaf } from "lucide-react";

const Header = ({ hideLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children, icon: Icon }) => (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive(to)
          ? "bg-green-700 text-white"
          : "text-white hover:bg-green-700/50"
      }`}
    >
      <Icon size={18} />
      <span>{children}</span>
    </Link>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-900/95 backdrop-blur-sm shadow-lg"
          : "bg-green-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="VeggieHealth Logo"
              className="h-10 w-auto hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-white text-xl md:text-2xl font-bold hidden sm:block">
              VeggieHealth
            </h1>
          </Link>

          {/* Desktop Navigation */}
          {!hideLinks && (
            <div className="hidden md:flex items-center space-x-2">
              <NavLink to="/" icon={Home}>
                Home
              </NavLink>
              <NavLink to="/veggetablelist" icon={Leaf}>
                Vegetable
              </NavLink>
              <NavLink to="/profile" icon={User}>
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-red-600 rounded-lg transition-colors duration-300"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!hideLinks && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-green-800 rounded-lg transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Welcome Message for Login/Register pages */}
          {hideLinks && (
            <div className="text-white text-sm md:text-base font-medium">
              Welcome to VeggieHealth App!
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {!hideLinks && (
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-64" : "max-h-0"
            }`}
          >
            <div className="space-y-2 pb-4">
              <NavLink to="/" icon={Home}>
                Home
              </NavLink>
              <NavLink to="/veggetablelist" icon={Leaf}>
                Vegetable
              </NavLink>
              <NavLink to="/profile" icon={User}>
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full px-4 py-2 text-white hover:bg-red-600 rounded-lg transition-colors duration-300"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
