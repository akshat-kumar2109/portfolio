import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Things I am good at</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-[100px] h-[100px]" key={`tech-${index}`}>
            <img className="w-[100%] h-[100%]" src={technology.icon} />
            <p
              className="text-secondary text-[16px] font-semibold flex flex-col justify-center items-center"
              style={{ margin: 0 }}
            >
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
