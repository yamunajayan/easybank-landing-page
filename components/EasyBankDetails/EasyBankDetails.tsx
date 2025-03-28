"use client";
import { useState, useEffect } from "react";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const EasyBankDetails = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  console.log(features);

  return (
    <article className="bg-[#F4F5F7]">
      <div className="px-6 py-16 max-w-[1110px] w-full xl:px-0 sm:mx-auto ">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-0 sm:justify-between">
          <section className="text-center w-[327px] sm:pb-[72px] sm:w-[635px] sm:text-left ">
            <h2 className="text-[#2D314D] text-[32px] leading-9 font-light sm:text-[40px] sm:leading-[64px]">
              Why choose Easybank?
            </h2>
            <p className="text-[#9597A5] text-sm leading-6 py-4 sm:text-[24px] sm:leading-[28px]">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </section>
        </div>
        <ul className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-0 sm:justify-between ">
          {features.map((feature, index) => (
            <li
              key={index}
              className="w-[327px] h-[215px] flex flex-col items-center justify-between gap-4 sm:h-[278px] sm:w-[255px] sm:items-start sm:gap-8"
            >
              <img src={feature.image} alt={feature.title} />
              <h2 className="text-lg leading-[28px] font-light">
                {feature.title}
              </h2>
              <p className="text-[#9597A5] text-center text-[15px] leading-[25px] font-normal sm:text-start">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default EasyBankDetails;
