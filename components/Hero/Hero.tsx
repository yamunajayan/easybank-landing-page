const Hero = () => {
  return (
    <article>
      <section className="relative">
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
      <section className="px-6 text-center">
        <h1 className="text-[40px] font-light leading-12">
          Next generation digital banking
        </h1>
        <p className="text-[#9597A5] text-sm leading-6 py-4">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
      </section>
    </article>
  );
};
export default Hero;
