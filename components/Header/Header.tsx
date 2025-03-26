import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-16 sm:h-20 px-6 max-w-5xl w-full mx-auto">
      <div className="flex-1 flex justify-start">
        <img src="logo.svg" alt="Easybank" />
      </div>

      <nav className="hidden sm:flex flex-1 justify-center text-[#9597A5] font-normal">
        <ul className="flex gap-6 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </nav>
      <div className="flex-1 justify-end hidden sm:flex">
        <Button />
      </div>
      <div className="flex justify-end sm:hidden">
        <img src="icon-hamburger.svg" alt="Menu" />
      </div>
    </header>
  );
};
export default Header;
