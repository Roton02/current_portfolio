import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import redux from "../assets/skill-icon/redux.png";
import nextImg from "../assets/skill-icon/next.png";
import typescript from "../assets/skill-icon/typescript.png";
import mongoose from "../assets/skill-icon/mongoose.png";
import reactRouter from "../assets/skill-icon/react-router.svg";
import expressImg from "../assets/skill-icon/express.png";
import githubImg from "../assets/skill-icon/github-logo.png";
import dividerImg from "../assets/divider.png";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import communicationHacks from "../assets/communication-hacks-certificate.pdf";
import ProgrammingHero from "../assets/Programming hero_certificate.pdf";
import roton from "../assets/roton.png";
import {
  FaCheckCircle,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="text-white pt-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-5 md:mb-12 flex flex-col items-center">
          <h1 className="text-center font-bold text-3xl md:text-5xl pb-2">
            About Me
          </h1>
          <img src={dividerImg} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap- justify-between  text-center md:mt-16">
          <div>
            <div className="lg:-mt-10 ">
              <div className="md:px-20   md:py-10  md:ml-14 ">
                <img className="w-56 text-center  rounded-3xl md:ml-5 ml-10" src={roton} alt="" />
                <h1 className="md:text-3xl text-xl text-nowrap font-bold  md:mt-5  ">Sana Ullah Roton</h1>
                <h1 className="text-sm  md:ml-4">sanaullahroton01@gmail.com</h1>
                <button className="md:mt-4 mt-2 md:px-16">
                  <a
                    href="#_"
                    class="inline-flex items-center justify-center h-8 px-2 md:h-12 md:px-5 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                  >
                    Resume
                  </a>

                  <div>
                    <h1 className=" md:my-4 text-divider "> Social Links</h1>
                    <div className="space-x-4">
                      <a href="https://www.linkedin.com/in/md-sana-ullah12/">
                        <button className="text-2xl">
                          <FaLinkedin />
                        </button>
                      </a>
                      <a href="https://github.com/Roton02">
                        <button className="text-2xl">
                          <FaGithub />
                        </button>
                      </a>
                      <a href="https://web.facebook.com/roton.chodiry/">
                        <button className="text-2xl">
                          <FaFacebook />
                        </button>
                      </a>
                      <a href="https://wa.me/01569140343">
                        <button className="text-2xl">
                          <FaWhatsapp />
                        </button>
                      </a>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Tabs>
              <div className="about-tab px-0 text-nowrap mt-3 md:mt-3">
                <TabList>
                  <Tab>About</Tab>
                  <Tab>Skills</Tab>
                  <Tab>Education</Tab>
                </TabList>
              </div>
              <TabPanel>
                <div className="text-start">
                  <div className="space-y-3">
                    <p className="text-sm space-y-3 mt-7">
                      <h1 className="text-3xl font-bold">Who I Am:</h1>

                      <p className="text-green-600 flex gap-2  items-center">
                        <FaCheckCircle /> Open to Work
                      </p>
                      <p>
                        I’m Md Sanaullah Roton, a dedicated MERN Stack Developer
                        with expertise in React.js, Node.js, Express.js,
                        MongoDB, TypeScript, and Mongoose. I specialize in
                        building dynamic, scalable web applications and
                        delivering high-performance, user-friendly interfaces.
                      </p>
                    </p>
                    <p className="text-sm space-y-3 mt-8">
                      <h1 className="text-3xl font-bold">My Goal:</h1>
                      <p>
                        My goal is to continuously enhance my skills and become
                        a proficient Software Engineer in the next 5 years. I
                        aim to contribute to innovative projects and collaborate
                        with other professionals to push the boundaries of web
                        development.
                      </p>
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-3 gap-5 mt-10">
                  <div>
                    <h3 className="text-xl font-bold text-[#d94ce0] pb-3">
                      Frontend
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">HTML</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">CSS</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">Tailwind</h4>
                      </li>

                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://daisyui.com/favicon.ico"
                          alt=""
                        />
                        <h4 className="font-semibold">DaisyUI</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">Javascript</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">React</h4>
                      </li>
                      <li className="flex gap-2">
                        <img className="w-5" src={reactRouter} alt="" />
                        <h4 className="font-semibold text-nowrap">R. Router</h4>
                      </li>
                      <li className="flex gap-2">
                        <img className="w-5" src={nextImg} alt="" />
                        <h4 className="font-semibold">Nextjs</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5 rounded-full"
                          src={typescript}
                          alt=""
                        />
                        <h4 className="font-semibold">TypeScript</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5 rounded-full"
                          src={redux}
                          alt=""
                        />
                        <h4 className="font-semibold">Redux </h4>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#d94ce0] pb-3">
                      Backend
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">Firebase</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">Node.js</h4>
                      </li>
                      <li className="flex gap-2">
                        <img className="w-5" src={expressImg} alt="" />
                        <h4 className="font-semibold">Expressjs</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5 rounded-full"
                          src={typescript}
                          alt=""
                        />
                        <h4 className="font-semibold">Typescript</h4>
                      </li>

                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">MongoDB</h4>
                      </li>
                      <li className="flex gap-2">
                        <img className="w-5 rounded-full" src={mongoose} alt="" />
                        <h4 className="font-semibold">Mongoose</h4>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#d94ce0] pb-3">
                      Tools
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">Git</h4>
                      </li>
                      <li className="flex gap-2">
                        <img
                          className="w-5"
                          src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                          alt=""
                        />
                        <h4 className="font-semibold">Figma</h4>
                      </li>
                      <li className="flex gap-2">
                        <img className="w-5 rounded-full" src={githubImg} alt="" />
                        <h4 className="font-semibold">Github</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="text-start">
                <ul className="ml-5 mt-10">
                  <li className="list-disc ">
                    Computer science and Engineering <br />
                    <span className="text-sm">
                      Shariatpur polytechnic Institue
                    </span>{" "}
                    <br />
                    <span className="text-sm">2021 to current</span>
                  </li>
                  <li className="list-disc mt-2 ">
                    Web development Mentor <br />
                    <span className="text-sm"> IT Consultation Club</span>{" "}
                    <br />
                    <span className="text-sm">
                      Shariatpur polytechnic Institue
                    </span>
                  </li>
                </ul>
                <ul className="ml-0 md:ml-5 mt-5">
                  <li className="list-disc flex text-nowrap">
                    Web development Course
                    <a
                      href={ProgrammingHero}
                      target="_blank"
                      download
                      className="flex gap-2 items-center ml-1 md:ml-7"
                    >
                      - Certificate <HiMiniArrowUpTray />
                    </a>
                  </li>
                  <li className="list-disc flex text-nowrap">
                    Communication hacks
                    <span className="flex gap-2 items-center ml-1 md:ml-7">
                      <a
                        className="flex items-center gap-2"
                        href={communicationHacks}
                        download
                        target="_blank"
                      >
                        - Certificate <HiMiniArrowUpTray />
                      </a>
                    </span>
                  </li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// <div className='mt-20 flex flex-wrap gap-10'>
//   {services.map((service, index) => (
//     <ServiceCard key={service.title} index={index} {...service} />
//   ))}
// </div>
