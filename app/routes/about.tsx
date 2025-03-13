import ToBeHeard from "~/components/About/ToBeHeard";
import Values from "~/components/About/Values";
import Footer from "~/components/Footer";
import Involved from "~/components/Homepage/Involved";
import Team from "~/components/About/Team";

const about = () => {
  return (
    <div className="overflow-x-hidden">
      <ToBeHeard />
      <Values />
      <Team />
      <Involved />
      <Footer bgColor="#ffffff" />
    </div>
  );
};

export default about;
