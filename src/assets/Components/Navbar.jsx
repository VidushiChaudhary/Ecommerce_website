import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <nav className="w-full bg-slate-200 shadow-md px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">Shopping Point</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="border rounded-md px-3 py-1 w-60"
                    />
                    <Link to="/" className="hover:text-blue-300">Home</Link>
                    <Link to="/Women" className="hover:text-blue-600">Women</Link>
                    <Link to="/Men" className="hover:text-blue-600">Men</Link>
                    <Link to="/Kids" className="hover:text-blue-600">Kids</Link>
                    <Link to="/Cart" className="hover:text-blue-600 flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-1" /> Cart
                    </Link>

                    {/* Create Account Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="hover:text-blue-600 flex items-center focus:outline-none"
                        >
                            Create Account <ChevronDown className="w-4 h-4 ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 bg-slate-200 shadow-md py-2 w-32 z-50">
                                <Link to="/Signup" className="block px-4 py-2 ">Signup</Link>
                                <Link to="/Login" className="block px-4 py-2 ">Login</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="md:hidden mt-3 space-y-3">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="border rounded-md px-3 py-1 w-full"
                    />
                    <Link to="/" className="block hover:text-blue-600">Home</Link>
                    <Link to="/Women" className="block hover:text-blue-600">Women</Link>
                    <Link to="/Men" className="block hover:text-blue-600">Men</Link>
                    <Link to="/Kids" className="block hover:text-blue-600">Kids</Link>
                    <Link to="/Cart" className="block hover:text-blue-600  items-center">
                        <ShoppingCart className="w-5 h-5 mr-1" /> Cart
                    </Link>

                    {/* Mobile Create Account Dropdown (simple, not collapsible) */}
                    <div className="space-y-2">
                        <p className="font-semibold text-gray-600">Create Account</p>
                        <Link to="/Signup" className="block hover:text-blue-600 ml-4">Signup</Link>
                        <Link to="/Login" className="block hover:text-blue-600 ml-4">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;


