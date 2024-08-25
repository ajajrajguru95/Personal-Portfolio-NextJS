"use client";
import { motion } from "framer-motion";

const FadeInWrapper = ({children, initialY = "100px", duration = 1}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: initialY }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: duration, ease: "easeOut", }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default FadeInWrapper