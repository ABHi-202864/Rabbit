import TopBar from "../Layout/TopBar";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <TopBar />
      <Navbar />
      {/* CART-DRAWER */}
    </header>
  )
}

export default Header;
