import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import Tech from "./Tech";

//once i get experience those packages will be used to add it

const Experience = ({index}) => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I learned so far</p>
                <h2 className={styles.sectionHeadText}>Skills.</h2>
            </motion.div>
            <motion.div variants={fadeIn("down", "spring", 0.3, 1.5)}>
                <Tech />
            </motion.div>
        </>
    )
}

export default SectionWrapper(Experience, 'work')