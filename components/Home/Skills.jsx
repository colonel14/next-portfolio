"use client";
import "@/styles/skills.css";
import { useState } from "react";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

import SectionLayout from "../SectionLayout";
import { GalleryHorizontalEnd, LayoutPanelLeft } from "lucide-react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

function Skills({ skills, experiences }) {
  const [skillsView, setSkillsView] = useState(true);
  const toggleSkillsView = () => {
    setSkillsView((prev) => !prev);
  };
  return (
    <SectionLayout idName="skills">
      <div className="app__skills">
        <h1 className="head-text">Skills & Expericences</h1>
        <div className="toggle_view">
          {skillsView ? (
            <LayoutPanelLeft onClick={toggleSkillsView} />
          ) : (
            <GalleryHorizontalEnd onClick={toggleSkillsView} />
          )}
        </div>
        {skillsView ? (
          <div className="app__skills-ticker">
            <Marquee speed={80} gradient={false}>
              {skills.map((skill) => (
                <div className="app__skills-item app__flex" key={skill.name}>
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <Image
                      src={urlFor(skill.icon).url()}
                      width={20}
                      height={20}
                      alt={skill.name}
                    />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </div>
              ))}
            </Marquee>
          </div>
        ) : (
          <div className="app__skills-list">
            {skills.map((skill) => (
              <div className="app__skills-item app__flex" key={skill.name}>
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <Image
                    src={urlFor(skill.icon).url()}
                    width={20}
                    height={20}
                    alt={skill.name}
                  />
                </div>
                <p className="p-text">{skill.name}</p>
              </div>
            ))}
          </div>
        )}
        <div className="app__flex roadmap-lines">
          {experiences.map((item, index) => (
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={index}
              className="app__exps-item"
            >
              <div className="app__exps-item_inner">
                <div className="app__flex">
                  <span>{item.year || "current"}</span>
                  <h1 className="head-text">{item.name}</h1>
                </div>
                <p className="p-text">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

export default Skills;
