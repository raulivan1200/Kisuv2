"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "../styles/Faq.module.css"
const ExpandCollapseSection = ({ toggleText, contentText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div  className={styles.expandcont}>
      <div id='cursor-down' className={styles.buttonexpand} onClick={toggleExpanded}><h2>{toggleText}</h2> <hr className={styles.hrex}/> </div>
      <AnimatePresence >
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{duration:.2, ease:'backInOut',stiffness:300,damping:900,mass:300}}
            style={{ overflow: 'hidden' }}
            className={styles.HidenText}
          >
            <div className={styles.extxt}><p>{contentText}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandCollapseSection;
