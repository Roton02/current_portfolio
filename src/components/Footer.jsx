import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-to-top'

const Footer = () => {
  return (
    <div className='bg-[#090325] text-white'>
      {/* Scroll To Top Button */}
      <ScrollToTop
        smooth
        className='flex mb-16 justify-center items-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white'
      />

      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col items-center space-y-5'>
          {/* Navigation Links */}
          <ul className='flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm md:text-base'>
            <li>
              <a href='#hero' className='hover:text-indigo-400 transition-all'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-indigo-400 transition-all'>
                About
              </a>
            </li>
            <li>
              <a
                href='#Projects'
                className='hover:text-indigo-400 transition-all'
              >
                Projects
              </a>
            </li>
            <li>
              <a href='#work' className='hover:text-indigo-400 transition-all'>
                Work
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className='flex space-x-4 text-3xl'>
            <a
              href='https://github.com/Roton02'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-indigo-400 transition-all'
            >
              <FaGithubSquare />
            </a>
            <a
              href='https://www.linkedin.com/in/md-sana-ullah12/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-indigo-400 transition-all'
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Footer Text */}
          <p className='text-sm md:text-base text-center'>
            © {new Date().getFullYear()} Created by{' '}
            <span className='text-indigo-400 font-medium'>
              Sana Ullah Roton
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
