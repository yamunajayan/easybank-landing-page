const HeaderPopUp = () => {
  return (
    <div
      className="fixed top-[64px] w-full h-full bg-black bg-opacity-50 text-white p-8 flex justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <ul className="flex flex-col gap-4 text-lg text-black text-center bg-white p-4 w-full rounded h-[265px]">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
    </div>
  );
};

export default HeaderPopUp;
