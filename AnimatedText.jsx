import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const AnimatedText = ({ ...props }) => {

    const textRef = useRef(null)
    const isInView = useInView(textRef, { amount: 0.5, once: true })

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: 20
        },

        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
        }
    }

    return (
        <div>
            <span className="sr-only">{props.text}</span>
            <motion.span aria-hidden ref={textRef} className="font-medium text-6xl tracking-wide !leading-tight" initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ ease: "easeIn", staggerChildren: 0.125 }}>{props.text.split(" ").map((word, index) => {
                return <motion.span key={index} variants={defaultAnimations}>{word} </motion.span>
            })}</motion.span>
        </div>
    )
}