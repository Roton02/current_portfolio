import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/roton-hero.png";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="">
      <ScrollToTop className="bg-[#090325] , flex justify-center  items-center rounded-full" smooth />

      <div className="">
        <div className="flex justify-center items-center py-5">
          <div className="text-white text-center w-full pt-5 space-y-5">
           
            <ul className="flex justify-center">
              <li>
                <a
                  href="#banner"
                  className="border-r border-white text-white px-3 md:px-4 text-sm lg:text-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="border-r border-white text-white px-3 md:px-4 text-sm lg:text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="border-r border-white text-white px-3 md:px-4 text-sm lg:text-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white px-3 md:px-4 text-sm lg:text-lg"
                >
                  Work
                </a>
              </li>
            </ul>
            <div className="flex gap-3 justify-center">
              {/* <a target="_blank" href="" className="text-2xl ml-2"><FaFacebookSquare className="text-[#159CF8]" /></a> */}
              <a
                target="_blank"
                href="https://github.com/Roton02"
                className="text-3xl ml-2 social-icon text-gray-200 bg-primary"
              >
                <FaGithubSquare />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/fatemachowdhury318"
                className="text-3xl ml-2 social-icon"
              >
                <FaLinkedin className="text-gray-200 bg-primary" />
              </a>
            </div>
            <p className="text-sm md:text-lg">Created by Sana ullah Roton</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
