"use client";
import { useState, useEffect } from "react";

type Feature = {
  author: string;
  title: string;
  description: string;
  image: string;
};
const BankArticles = () => {
  const [article, setArticle] = useState<Feature[]>([]);

  useEffect(() => {
    fetch("/articles-data.json")
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);
  return (
    <article className="bank-articles bg-[#FAFAFA]">
      <div className="px-6 py-16 max-w-[1110px] w-full sm:mx-auto xl:px-0">
        <h2 className="text-[#2D314D] text-[32px] leading-9 font-light pb-8 sm:text-[40px] sm:leading-[64px] text-center sm:text-left">
          Latest Articles
        </h2>
        <ul className="articles flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-0 sm:justify-between">
          {article.map((article, index) => (
            <li
              key={index}
              className="bg-white shadow-md flex flex-col justify-between gap-4 sm:h-[395px] sm:w-[255px] sm:items-start sm:gap-8 "
            >
              <img
                src={article.image}
                alt={article.title}
                className="rounded-t-md h-[200px] w-full min-h-[200px] object-cover"
              />
              <div className="px-[30px] pb-6">
                <p className="text-[#9597A5] text-start text-[10px] leading-[16px] font-normal pb-2">
                  {article.author}
                </p>
                <h2 className="text-[15px] leading-[20px] font-light text-[#2D314D] pb-2 hover:text-[#30C88F] hover:cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-[#9597A5] text-[13px] leading-[18px] font-normal sm:text-start">
                  {article.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default BankArticles;
