import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion.js';
import { styles } from '../styles.js';

const SectionWrapper = (Component, id) => function HOC() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="hash-span" id={id}>
        &nbsp;
      </div>
      <Component />
    </motion.section>
  )
}

export default SectionWrapper