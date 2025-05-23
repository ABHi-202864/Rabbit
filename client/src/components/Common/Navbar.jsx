import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* LOGO */}
        <div>
          <Link to="/" className="text-2xl font-medium">Rabbit</Link>
        </div>

        {/* NAVIGATION MENU */}
        <div className="hidden md:flex space-x-6">
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
            Men
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
            Women
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
            Top Wear
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase transition-colors">
            Bottom Wear
          </Link>
        </div>
        {/* RIGHT ICONS */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button onClick={toggleCartDrawer} className="relative hover:text-black transition-colors cursor-pointer">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-rabitRad text-white text-xs rounded-full px-2 py-0.5">4</span>
          </button>

          {/* SEARCH */}
          <SearchBar />

          {/* HAMBURGER MENU */}
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  )
}

export default Navbar;