const ToBeHeard = () => {
  return (
    <div className="heroBg h-[90vh] hideScrollbar overflow-y-scroll mt-[80px]  ">
      {/* first section */}
      <div className="w-full flex items-center justify-center pt-[72px] pb-[100px] min-h-screen bg-white">
        <div className="max-w-[1150px] w-full px-8 flex flex-col items-start gap-10  ">
          <h1 className="text-[#1E1E1E] text-[48px] font-semibold">
            We Believe Every Voice Deserves To Be Heard.
          </h1>
          <div className="flex beHeardBg rounded-xl items-center justify-end py-[170px] px-[54px] w-full">
            <div className="flex flex-col gap-4 max-w-[410px] w-full">
              <h1 className="text-[#FFFFFFBF] text-xl font-medium ">
                Empowering Lives, One Opportunity at a Time.
              </h1>
              <p className="text-xl text-white">
                Education has the power to transform lives, and we’re here to
                make sure everyone gets that chance. Through scholarships,
                school programs, and community support, we’re building a future
                where learning knows no limits.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full, h-screen bg-transparent"></div>
      {/* third section */}
      <div className="w-full py-[180px] flex items-center justify-center bg-white">
        <div className="max-w-[1200px] w-full px-8 flex flex-col items-start gap-[63px] relative text-[#1E1E1E]  ">
          <img
            className="absolute left-1/2 -translate-1/2 top-1/2  "
            src="./Vector.webp"
            alt=""
          />
          <div className="w-full flex justify-start ">
            <div className="flex flex-col gap-4 max-w-[490px] w-full">
              <h2 className="text-[32px] font-bold ">Our Mission</h2>
              <p className="text-xl ">
                “To make education accessible and empower communities through
                scholarships, school programs, and essential support, creating
                opportunities for a brighter future."
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end ">
            <div className="flex flex-col gap-4 max-w-[329px] w-full">
              <h2 className="text-[32px] font-bold ">Our Vision</h2>
              <p className="text-xl ">
                “A world where every child has access to quality education and
                the tools to reach their full potential."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToBeHeard;
