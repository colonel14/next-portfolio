"use client";

import SocialMedia from "@/components/SocialMedia";
import urlFor from "@/lib/urlFor";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Github, Globe, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

function ProjectPage({ project }) {
  const [toggleSlider, setToggleSlider] = useState(false);
  const [activeThumb, setActiveThumb] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="app__portfolio app__flex">
      <SocialMedia />
      <div className="app__portfolio-inner app__padding app__flex">
        {toggleSlider && (
          <AnimatePresence>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="portfolio__slider"
              exit={{ scale: 0 }}
            >
              <X onClick={() => setToggleSlider(false)} />
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
                thumbs={{ swiper: activeThumb }}
                spaceBetween={50}
                loop={true}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {project.gallery.map((image, index) => (
                  <SwiperSlide key={index} className="relative">
                    <Image
                      src={urlFor(image).url()}
                      fill
                      className="img-responsive"
                      alt="gallery image"
                      unoptimized
                      onClick={() => setToggleSlider(false)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        )}
        <div className="app__portfolio-info">
          <h1 className="head-text">{project.title}</h1>
          <span>{project.type}</span>
          <h3 className="info-label">Desc:</h3>
          <p className="p-text">{project.description}</p>
          <h3 className="info-label">Technologies:</h3>
          <div className="app__portfolio-info-tags">
            {project.technologies.map((tech, index) => (
              <div
                key={tech + index}
                className="portfolio_tag"
                style={{ background: tech.bgColor }}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <h3 className="info-label">Links:</h3>
          <div className="app__portfolio-info-links">
            {project.githubLink && (
              <Link href={project.githubLink} target="blank">
                <Github />
              </Link>
            )}
            {project.projectLink && (
              <Link href={project.projectLink} target="blank">
                <Globe />
              </Link>
            )}
          </div>
        </div>
        <div className="app__portfolio-gallery">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, FreeMode, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            className="app__portfolio-gallery-thumbnail"
          >
            {project.gallery.map((image, index) => (
              <SwiperSlide key={image} className="relative">
                <div>
                  <Eye onClick={() => setToggleSlider(true)} />
                </div>
                <Image
                  src={urlFor(image).url()}
                  fill
                  className="img-responsive"
                  alt="gallery image"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="app__portfolio-gallery-images mySwiper"
          >
            {project.gallery.map((image, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Eye onClick={() => setToggleSlider(true)} />
                </div>
                <Image
                  src={urlFor(image).url()}
                  width={100}
                  height={100}
                  className="img-responsive"
                  alt="gallery image"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
