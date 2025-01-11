import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  Live,
}) => {
  return (
    <motion.div
      id="Projects"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div  className="relative w-full h-[230px] transition-all">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain overflow-y-scroll "
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-nowrap justify-between gap-2">
          <div className="inline-flex gap-1">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} text-nowrap`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="">
            <a href={Live} target="_blank" className="flex">
              <span className="flex items-center gap-1 bg-slate-100 rounded-xl text-black px-2 hover:bg-slate-300">
                Live
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
