import styles from "./styles";
import Button from "../Button";
const Footer = () => {
  return (
    <footer className="bg-[#2D314D]">
      <div className="max-w-[1110px] w-full px-6 py-16 sm:mx-auto xl:px-0 text-white flex flex-col items-center justify-center sm:flex-row sm:gap-[5%] ">
        <div className="flex flex-col items-center justify-between sm:h-[95px] sm:items-start sm:w-[25%]">
          <div className="footer__logo pb-6">
            <img src="logo-white.svg" alt="easybank logo" />
          </div>
          <div className="footer__social pb-8 sm:pb-0">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a href="#" className="relative inline-block group">
                  <img
                    src="icon-facebook.svg"
                    alt="Default Instagram Icon"
                    className=" h-6 w-6 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="icon-facebook-green.svg"
                    alt="Hover Instagram Icon"
                    className="absolute top-0 hover:inline h-6 w-6 opacity-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="relative inline-block group">
                  <img
                    src="icon-youtube.svg"
                    alt="Default Instagram Icon"
                    className=" h-6 w-6 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="icon-youtube-green.svg"
                    alt="Hover Instagram Icon"
                    className="absolute top-0 hover:inline h-6 w-6 opacity-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="relative inline-block group">
                  <img
                    src="icon-twitter.svg"
                    alt="Default Instagram Icon"
                    className=" h-6 w-6 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="icon-twitter-green.svg"
                    alt="Hover Instagram Icon"
                    className="absolute top-0 hover:inline h-6 w-6 opacity-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="relative inline-block group">
                  <img
                    src="icon-pinterest.svg"
                    alt="Default Instagram Icon"
                    className=" h-6 w-6 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="icon-pinterest-green.svg"
                    alt="Hover Instagram Icon"
                    className="absolute top-0 hover:inline h-6 w-6 opacity-0 group-hover:opacity-100"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="relative inline-block group">
                  <img
                    src="icon-instagram.svg"
                    alt="Default Instagram Icon"
                    className=" h-6 w-6 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src="icon-instagram-green.svg"
                    alt="Hover Instagram Icon"
                    className="absolute top-0 hover:inline h-6 w-6 opacity-0 group-hover:opacity-100"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links pb-6 sm:pb-0 sm:w-[25%]">
          <ul className="flex flex-col items-center justify-center gap-4 text-[15px] leading-[26px] font-normal sm:flex-row sm:h-[95px] hover:cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-4 sm:items-start sm:w-[160px]">
              <li>
                <a href="#" className="hover:text-[#30C88F]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#30C88F]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#30C88F]">
                  Blog
                </a>
              </li>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:items-start sm:w-[160px]">
              <li>
                <a href="#" className="hover:text-[#30C88F]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#30C88F]">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#30C88F]">
                  Privacy Policy
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center sm:items-end sm:flex-1">
          <Button></Button>
          <div className="pt-8 text-[15px] leading-[26px] font-normal opacity-50">
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
