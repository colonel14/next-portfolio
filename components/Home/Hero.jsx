"use client";
import "@/styles/hero.css";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionLayout from "../SectionLayout";
// import SectionLayout from "../SectionLayout";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Hero() {
  const circles = ["javascript.svg", "nextjs.svg", "nodejs.svg"];
  return (
    <SectionLayout idName="home">
      <div className="app__header app__flex">
        <motion.div
          initial={false}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Abdallah</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Nextjs Developer</p>
              <p className="p-text">Freelancer</p>
            </div>
            <div className="hire-cmp app__flex">
              <Link href="/contact" aria-label="hire me">
                Hire Me
              </Link>
            </div>
          </div>
          <blockquote className="blockquote">
            <p className="blockquote__text">
              Start Where your are.
              <br />
              Use What you have. <br />
              Do what you can.
            </p>
            <p className="blockquote__author">Arthur Ashe</p>
          </blockquote>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <Image
            fill
            src="/profile.png"
            alt="profile_bg"
            unoptimized
            priority
          />
          <motion.div
            initial={false}
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            alt="profile_circle"
            className="relative overlay_circle"
          >
            <Image src="/circle.svg" fill alt="circle" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={false}
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {circles.map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <Image
                width={100}
                height={100}
                src={`/${circle}`}
                alt="profile_bg"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
}

export default Hero;
