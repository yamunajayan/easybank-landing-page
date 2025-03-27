import styles from "./styles";
import Button from "../Button";
const Footer = () => {
  return (
    <footer className="bg-[#2D314D]">
      <div className="max-w-[1110px] w-full px-6 py-16 sm:mx-auto xl:px-0 text-white flex flex-col items-center justify-center sm:flex-row sm:gap-[5%]">
        <div className="flex flex-col items-center justify-between sm:h-[95px] sm:items-start sm:w-[25%]">
          <div className="footer__logo pb-6">
            <img src="logo-white.svg" alt="easybank logo" />
          </div>
          <div className="footer__social pb-8 sm:pb-0">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a href="#">
                  <img
                    src="icon-facebook.svg"
                    alt="facebook icon"
                    className="h-6 w-6"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="icon-youtube.svg"
                    alt="youtube icon"
                    className="h-6 w-6"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="icon-twitter.svg"
                    alt="twitter icon"
                    className="h-6 w-6"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="icon-pinterest.svg"
                    alt="pinterest icon"
                    className="h-6 w-6"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="icon-instagram.svg" alt="instagram icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links pb-6 sm:pb-0 sm:w-[25%]">
          <ul className="flex flex-col items-center justify-center gap-4 text-[15px] leading-[26px] font-normal sm:flex-row sm:h-[95px] ">
            <div className="flex flex-col items-center justify-center gap-4 sm:items-start sm:w-[160px]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:items-start sm:w-[160px]">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
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
