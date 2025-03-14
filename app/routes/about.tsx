import ToBeHeard from "~/components/About/ToBeHeard";
import Values from "~/components/About/Values";
import Footer from "~/components/Footer";
import Involved from "~/components/Homepage/Involved";
import Team from "~/components/About/Team";
import { motion } from "motion/react";

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0.8, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut", when: "beforeChildren" }}
      className="overflow-x-hidden"
    >
      <ToBeHeard />
      <Values />
      <Team />
      <Involved />
      <Footer bgColor="#ffffff" />
    </motion.div>
  );
};

export default about;
