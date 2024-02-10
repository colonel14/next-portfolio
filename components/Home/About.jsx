"use client";
import "@/styles/about.css";
import { motion } from "framer-motion";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

function About() {
  return (
    <SectionLayout idName="about">
      <div className="app__about app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__about-img"
        >
          <Image
            width={100}
            height={100}
            src="/about.png"
            alt="about_bg"
            unoptimized
          />
          <motion.div
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="overlay_circle"
          >
            <Image fill src="circle.svg" alt="circle_bg" unoptimized />
          </motion.div>
        </motion.div>
        <div className="app__about-info">
          <h2 className="head-text">Abdallah Mohamed</h2>
          <span className="p-text">Full-Stack developer/Freelancer</span>
          <p></p>
        </div>
      </div>
    </SectionLayout>
  );
}

export default About;
