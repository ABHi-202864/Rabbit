import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="bg-rabitRad text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center flex-grow font-inter">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>

        <div className="hidden md:block text-sm">
          <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors font-inter">+1 (234) 567-890</a>
        </div>
      </div>

    </div>
  )
}

export default TopBar;
