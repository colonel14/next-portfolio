"use client";
import "@/styles/work.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, Github, Globe } from "lucide-react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import SectionLayout from "../SectionLayout";

function Work({ works }) {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter((work) =>
            work.technologies[0].name.toLowerCase().includes(item.toLowerCase())
          )
        );
      }
    }, 500);
  };
  useEffect(() => {
    setFilterWork(works);
  }, []);

  return (
    <SectionLayout idName="work">
      <div></div>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["Next js", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(work.coverImage).url()}
                alt={work.coverImage?.alt}
                fill
                loading="lazy"
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <Link
                  href={`/portfolio/${work.slug.current}`}
                  aria-label="project link"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <Eye />
                  </motion.div>
                </Link>
                {work.projectLink && (
                  <Link
                    href={work.projectLink}
                    target="_blank"
                    aria-label="project link"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <Globe />
                    </motion.div>
                  </Link>
                )}

                {work?.githubLink && (
                  <Link
                    href={work.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github link"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <Github />
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.technologies[0].name}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </SectionLayout>
  );
}

export default Work;
