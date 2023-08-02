import { motion } from "framer-motion";

const AnimatedDiv = ({
  children,
  x,
  y,
  initial,
  duration,
  delay,
  scale,
  rotation,
  initialOpacity,
  animateOpacity,
  animateX,
  animateY,
  animateScale,
  animateRotation,
}) => (
  <motion.div
    style={{height:"fit-content"}}
    initial={"initialState"}
    whileInView={"animateState"} // Using whileInView instead of animate
    viewport={{ once: true, amount: .3 }}
    transition={{ duration: duration || 0.5, delay: delay || 0, ease: "easeInOut" }}
    variants={{
      initialState: {
        opacity: initialOpacity || 0,
        x: x || 0,
        y: y || 0,
        scale: scale || 1,
        rotate: rotation || 0,
      },
      animateState: {
        opacity: animateOpacity || 1,
        x: animateX || 0,
        y: animateY || 0,
        scale: animateScale || 1,
        rotate: animateRotation || 0,
      },
    }}
  >
    {children}
  </motion.div>
);

export default AnimatedDiv;
