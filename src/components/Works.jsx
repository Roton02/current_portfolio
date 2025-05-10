import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { FaArrowRight } from 'react-icons/fa'
import { fadeIn } from '../utils/motion'

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-25px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] transition-all'>
          <img
            src={project.image}
            alt='project_image'
            className='w-full h-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(project?.github, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
        </div>

        <div className='mt-4 flex flex-nowrap justify-between gap-2'>
          <div className='inline-flex gap-1'>
            {project.tags.map((tag) => (
              <p
                key={`${project.name}-${tag.name}`}
                className={`text-[14px] ${tag.color} text-nowrap`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <div className='flex gap-2'>
            <a href={project.Live} className='flex'>
              <span className='flex items-center gap-1 bg-slate-100 rounded-xl text-black px-2 hover:bg-slate-300'>
                Live
                <FaArrowRight />
              </span>
            </a>
            <button onClick={() => handleProjectClick(project)} className='flex'>
              <span className='flex items-center gap-1 bg-slate-100 rounded-xl text-black px-2 hover:bg-slate-300'>
                Details
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-7 lg:gap-x-7'
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, '')