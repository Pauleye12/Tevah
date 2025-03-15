import { useState } from "react";
import { Close } from "../SVGs/RightArrow";
import { motion, type Variants } from "motion/react";

const textVariants: Variants = {
  initial: { opacity: 0.6, y: 90 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
const Donate = ({ setDonate }: { setDonate: (value: boolean) => void }) => {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  return (
    <div className="bg-[#1e1e1e99] w-full h-screen fixed top-0 left-0 z-50 font-DMSans flex justify-center items-end ">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="bg-white text-[#1E1E1E] relative w-full max-w-[890px] rounded-t-[36px]  flex flex-col gap-3  "
      >
        <button
          onClick={() => setDonate(false)}
          className="p-2 grid place-items-center rounded-full border border-solid bg-white border-[#5C5C5C] cursor-pointer absolute top-10 right-10"
        >
          <Close />
        </button>
        <div className="w-full rounded-t-[36px] h-[244px] checkerBg2 md:hidden"></div>
        <div className="rounded-t-[36px] w-full px-5 md:px-[50px] flex flex-col gap-3 py-8 bg-white checkerBg ">
          <h1 className="text-[#1E1E1E] font-DarkerGrotesque text-[36px] leading-[36px] max-w-[450px] w-full text-left font-black ">
            Make a Difference – Every Contribution Counts!
          </h1>
          <p className="mt-2">Choose Your Impact:</p>
          <div className="flex gap-5 flex-wrap  items-center ">
            <button
              onClick={() => setAmount(10)}
              className={`w-[68px] h-[68px] grid place-items-center rounded-full  border border-solid border-[#1E1E1E] ${
                amount === 10
                  ? "bg-[#1E1E1E] text-white"
                  : " bg-white text-[#1E1E1E] "
              } `}
            >
              $10
            </button>
            <button
              onClick={() => setAmount(25)}
              className={`w-[68px] h-[68px] grid place-items-center rounded-full  border border-solid border-[#1E1E1E] ${
                amount === 25
                  ? "bg-[#1E1E1E] text-white"
                  : " bg-white text-[#1E1E1E] "
              } `}
            >
              $25
            </button>
            <button
              onClick={() => setAmount(50)}
              className={`w-[68px] h-[68px] grid place-items-center rounded-full  border border-solid border-[#1E1E1E] ${
                amount === 50
                  ? "bg-[#1E1E1E] text-white"
                  : " bg-white text-[#1E1E1E] "
              } `}
            >
              $50
            </button>
            <button
              onClick={() => setAmount(100)}
              className={`w-[68px] h-[68px] grid place-items-center rounded-full  border border-solid border-[#1E1E1E] ${
                amount === 100
                  ? "bg-[#1E1E1E] text-white"
                  : " bg-white text-[#1E1E1E] "
              } `}
            >
              $100
            </button>
            <input
              className="outline-none border border-solid border-[#1E1E1E] rounded-full py-5 px-3 "
              placeholder="Enter desired amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              type="number"
              name="amount"
              id="amount"
            />
          </div>
          <button
            disabled={!amount || amount <= 0}
            className={`${
              !amount || amount <= 0
                ? "bg-[#1E1E1E] opacity-50 mt-5    text-white py-4 px-5 rounded-md blackBG cursor-not-allowed w-fit font-medium"
                : "bg-[#1E1E1E] mt-5 text-white py-4 px-5 rounded-md blackBG w-fit cursor-pointer font-medium"
            }`}
          >
            Complete Donation
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Donate;
