import Button from "../Button";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center sm:pt-0 sm:h-[656px]">
      <article className="max-w-[1110px] w-full mx-auto sm:flex relative">
        <section className="relative sm:hidden overflow-hidden">
          <img
            src="bg-intro-mobile.svg"
            alt="mockups"
            className="w-full h-[398px] z-0"
          />
          <img
            src="image-mockups.png"
            alt="mobile images"
            className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10   object-fit "
          />
        </section>
        <section className="px-6 text-center flex flex-col items-center justify-center sm:w-[480px] sm:items-start sm:text-left pb-28 sm:pb-0">
          <h1 className="text-[40px] font-light leading-12 sm:text-[56px] sm:leading-16">
            Next generation digital banking
          </h1>
          <p className="text-[#9597A5] text-sm leading-6 py-4 sm:text-[18px] sm:leading-8">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </section>
      </article>
      <article
        className="hidden sm:block w-full absolute top-0 h-full "
        style={{ clipPath: "inset(0 0 -100% 0)" }}
      >
        <section className="absolute w-full h-full top-0">
          <img
            src="bg-intro-desktop.svg"
            alt="mockups"
            className="w-full h-[900px] z-0 absolute right-[-40%] bottom-[-10%]"
          />
          <img
            src="image-mockups.png"
            alt="mobile images"
            className="absolute right-[-10%] h-[908px] top-[-80px] w-[60%]"
          />
        </section>
      </article>
    </div>
  );
};
export default Hero;
