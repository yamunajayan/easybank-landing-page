const BankArticles = () => {
  return (
    <article className="bank-articles">
      <div className="px-6 py-16 max-w-[1110px] w-full sm:px-0 sm:mx-auto">
        <h2 className="text-[#2D314D] text-[32px] leading-9 font-light sm:text-[40px] sm:leading-[64px] text-center">
          Latest Articles
        </h2>
        <div className="articles"></div>
      </div>
    </article>
  );
};

export default BankArticles;
