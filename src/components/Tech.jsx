import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'from-purple-500 to-pink-500',
    skills: [
      {
        name: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Redux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
      },
      {
        name: 'Shadcn UI',
        icon: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
      },
      {
        name: 'Firebase Auth',
        icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      },
    ],
  },
  {
    title: 'Backend Development',
    color: 'from-purple-500 to-pink-500',
    skills: [
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Mongoose',
        icon: 'https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png',
      },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-purple-500 to-pink-500',
    skills: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Vercel',
        icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg',
      },
    ],
  },
]

const Tech = () => {
  return (
    <div className=' bg-primary'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='px-6  max-w-7xl mx-auto relative z-0'
      >
        {/* Header with improved spacing */}
        <div className='text-center sm:text-left mb-16'>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={`${styles.sectionSubText} mb-2`}
          >
            My Technical Skills
          </motion.p>
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={`${styles.sectionHeadText}`}
          >
            Technologies.
          </motion.h2>
        </div>

        {/* Skills Categories with improved layout */}
        <div className='mt-12 flex flex-col gap-16'>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className='backdrop-blur-sm bg-tertiary/30 rounded-2xl p-6 sm:p-8 hover:bg-tertiary/40 transition-colors duration-300'
            >
              {/* Category Header with improved design */}
              <div className='flex items-center gap-4 mb-10'>
                <h3
                  className={`text-2xl sm:text-3xl font-bold whitespace-nowrap
                             bg-gradient-to-r ${category.color} bg-clip-text text-transparent
                             drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                >
                  {category.title}
                </h3>
                <div
                  className={`h-[2px] w-full bg-gradient-to-r ${category.color} opacity-50 
                              shadow-[0_0_5px_rgba(255,255,255,0.2)]`}
                />
              </div>

              {/* Skills Grid with improved card design */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className='relative group'
                  >
                    <div
                      className='bg-black-200/50 backdrop-blur-sm rounded-xl p-4 sm:p-6
                                  transform transition-all duration-300 
                                  hover:bg-black-100/50 hover:-translate-y-2
                                  hover:shadow-lg hover:shadow-[#915eff]/20
                                  border border-transparent hover:border-[#915eff]/30'
                    >
                      <div className='flex flex-col items-center gap-3'>
                        <div
                          className='w-12 h-12 sm:w-16 sm:h-16 
                                      flex items-center justify-center 
                                      bg-tertiary/50 rounded-full 
                                      group-hover:ring-2 ring-offset-2 ring-offset-black-100
                                      ring-[#915eff]/50 transition-all duration-300'
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className='w-8 h-8 bg-white rounded-xl sm:w-10 sm:h-10 object-contain
                                     transition-transform duration-300 group-hover:scale-110'
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src =
                                'https://via.placeholder.com/40?text=' +
                                skill.name[0]
                            }}
                          />
                        </div>
                        <p
                          className='text-sm sm:text-base font-medium text-center
                                    text-white/70 group-hover:text-white transition-colors'
                        >
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Bar with improved design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-20 bg-black-100/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10'
        >
          <h3
            className='text-center text-xl sm:text-2xl font-bold mb-8 
                       bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'
          >
            Professional Experience
          </h3>
          <div className='relative h-4 bg-black-200 rounded-full overflow-hidden'>
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '14%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className='absolute h-full bg-gradient-to-r from-[#915eff] to-pink-500 rounded-full
                        shadow-[0_0_10px_rgba(145,94,255,0.5)]'
            />
          </div>
          <div className='flex justify-between mt-4 text-sm sm:text-base text-secondary'>
            <span>Entry Level</span>
            <span className='text-[#915eff] font-medium'>5 months</span>
            <span>Professional</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')
