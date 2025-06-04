import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react"; // Lucide icons (install with `npm install lucide-react`)

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-blue-100 shadow-md px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold">Shopping Point</div>

                {/* Search Bar & Links - hidden on mobile */}
                <div className="hidden md:flex items-center space-x-6">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="border rounded-md px-3 py-1 w-60"
                    />
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/Women" className="hover:text-blue-600">Women</Link>
                    <Link to="/Men" className="hover:text-blue-600">Men</Link>
                    <Link to="/Kids" className="hover:text-blue-600">Kids</Link>
                    <Link to="/Cart" className="hover:text-blue-600 flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-1" /> Cart
                    </Link>
                    <Link to="/Signup" className="hover:text-blue-600">Signup</Link>
                    <Link to="/Login" className="hover:text-blue-600">Login</Link>
                </div>

                {/* Toggle Button - visible on mobile */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
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
                    <Link to="/Cart" className="block hover:text-blue-600 items-center">
                        <ShoppingCart className="w-5 h-5 mr-1" /> Cart
                    </Link>
                    <Link to="/Signup" className="hover:text-blue-600">Signup</Link>
                    <Link to="/Login" className="hover:text-blue-600">Login</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

