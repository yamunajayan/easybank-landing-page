import Button from "../Button";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[640px]">
      <article className="max-w-5xl w-full mx-auto sm:flex relative">
        <section className="relative sm:hidden">
          <img
            src="bg-intro-mobile.svg"
            alt="mockups"
            className="w-full h-[398px] z-0"
          />
          <img
            src="image-mockups.png"
            alt="mobile images"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[280px] h-[540px] object-contain"
          />
        </section>
        <section className="px-6 text-center flex flex-col items-center justify-center sm:w-[480px] sm:items-start sm:text-left ">
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

      <div className="hidden sm:block absolute top-0 right-[-40px] w-1/2">
        <section className="relative overflow-hidden w-full">
          <img
            src="bg-intro-desktop.svg"
            alt="mockups"
            className="w-full h-[656px] z-0"
          />
          <img
            src="image-mockups.png"
            alt="mobile images"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[732px] h-[900px] object-contain overflow-hidden"
          />
        </section>
      </div>
    </div>
  );
};
export default Hero;
