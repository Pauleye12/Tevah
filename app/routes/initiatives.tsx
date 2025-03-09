import Initiative from "~/components/Initiatives/Initiative";
import KeyProgram from "~/components/Initiatives/KeyProgram";
import Involved from "~/components/Homepage/Involved";
import Footer from "~/components/Footer";
const initiatives = () => {
  return (
    <div>
      <Initiative />
      <KeyProgram />
      <Involved />
      <Footer bgColor="#ffffff" />
    </div>
  );
};

export default initiatives;
