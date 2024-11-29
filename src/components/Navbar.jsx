import logo from "../assets/rajathlogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="bm-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <a href="https://rajathadiga.vercel.app/" aria-label="Home">
        <img className='mx-2 w-10'src={logo} alt="logo" />
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/rajathadiga/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <a href="https://github.com/rajathadiga" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="https://x.com/_rajath_adiga_" target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/rajath.adiga/?next=%2F" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
    </div>
  </nav> 
};

export default Navbar;

