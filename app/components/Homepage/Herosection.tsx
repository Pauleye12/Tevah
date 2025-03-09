import { Link } from "react-router";

const Herosection = () => {
  return (
    <div className="heroBg min-h-screen pt-[150px] pb-[450px]  mt-[80px] flex flex-col justify-center items-center ">
      <div className="max-w-[560px] font-DMSans  w-full flex flex-col gap-5 items-center ">
        <h1 className="text-white text-[64px] text-center font-semibold font-DarkerGrotesque leading-[65px] ">
          Empowering <span className="text-[#E24700] ">Minds</span> and
          Transforming <span className="text-[#E24700] ">Lives</span>, One Step
          at a Time.
        </h1>
        <p className="text-white font-DMSans text-lg text-center  ">
          Through education and support, we create opportunities and change
          lives.{" "}
        </p>
        <Link className="btn-link mt-2" to="/">
          Donate Now
        </Link>
      </div>
      {/* <div className="mb-[600px]"></div> */}
    </div>
  );
};

export default Herosection;
