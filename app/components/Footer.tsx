import { Link } from "react-router";
import { Facebook, Instagram, LinkedIn, Twitter } from "./SVGs/Socials";
import { useState } from "react";
import Donate from "./PopUps/Donate";

const Footer = ({ bgColor }: { bgColor: string }) => {
  const [donate, setDonate] = useState(false);
  return (
    <div className="w-full font-DMSans">
      {donate && <Donate setDonate={setDonate} />}
      <div
        style={{ backgroundColor: bgColor }}
        className={`w-full flex justify-center items-center py-[240px] px-10 font-DMSans ${
          !bgColor ? "bg-white" : ""
        }`}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #FF7C3F 0%, #E24700 100%)",
          }}
          className="max-w-[1000px] px-4 pt-20 md:pt-[37px] md:px-0 md:pr-[72px] py-[37px] rounded-[24px] w-full relative "
        >
          <div className="flex flex-col w-full md:flex-row items-center">
            <img
              className=" w-[161px] md:w-fit md:-translate-x-12 -translate-x-1/2 absolute md:static md:rounded-4xl shadow-xl left-1/2 -top-[50px] "
              src="/Mail2.webp"
              alt=""
            />
            <div className="flex w-full flex-col gap-4 items-start">
              <h1 className="md:text-[28px] text-[20px] w-full md:font-semibold font-medium text-white">
                Subscribe to our newsletter for the latest updates and insights.
              </h1>
              <div className="max-w-[370px] w-full bg-[#1E1E1E] rounded-[10px] p-1 flex items-center gap-2">
                <input
                  className="bg-transparent w-full px-2 py-1 outline-none border-none "
                  placeholder="@ Enter your mail"
                  type="mail"
                />
                <button className="bg-white text-black px-6 py-2 rounded-[10px] font-semibold">
                  Subscribe
                </button>
              </div>
              <p className="max-w-[370px] w-full text-white ">
                Get inspiring stories, updates, and ways to make a
                difference—straight to your inbox!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-7 flex flex-col gap-4 items-center pt-[72px] bg-white border-t border-solid border-[#1E1E1E33]">
        <div className="md:px-10 text-[#1E1E1E] w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-center md:items-start">
          <div className="flex items-center w-full md:w-fit flex-col gap-10">
            <h3 className="text-xl text-center md:text-left md:font-medium text-[#1E1E1E] md:max-w-[266px] w-full ">
              Join us in creating opportunities through education and support.
            </h3>
            <button
              onClick={() => setDonate(true)}
              className="underline cursor-pointer w-fit text-[#FF7C3F] text-lg "
            >
              Donate Now
            </button>
          </div>
          <div className="flex md:flex-col flex-wrap justify-center text-lg gap-5 gap-y-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/initiative">Initiative</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/involved">Get Involved</Link>

            <Link to="/">Contact</Link>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3 text-lg">
            <p>+234 (0) 744 4543 321</p>
            <p>+234 (0) 744 4543 321</p>
            <a href="http://info@TevahCharityfoundation.com">
              info@TevahCharityfoundation.com
            </a>
          </div>
          <div className="flex justify-between md:justify-center gap-3">
            <a
              className="border border-solid border-[#1E1E1E] rounded-xl px-4 py-3 flex items-center justify-center "
              href=""
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              className="border border-solid border-[#1E1E1E] rounded-xl px-4 py-3 flex items-center justify-center "
              href=""
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              className="border border-solid border-[#1E1E1E] rounded-xl px-4 py-3 flex items-center justify-center "
              href=""
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="border border-solid border-[#1E1E1E] rounded-xl px-4 py-3 flex items-center justify-center "
              href=""
              target="_blank"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
        <img src="./footerLogo.webp" alt="" />
        <div className="border-t border-solid border-[#1E1E1E33] flex justify-between md:items-center flex-col md:flex-row md:gap-10 py-5 md:px-10 px-1 w-full text-[#1E1E1E80] ">
          <p>TevahCharityFoundation©2025</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
