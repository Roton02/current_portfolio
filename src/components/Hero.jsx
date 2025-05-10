import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import roton_hero from "../assets/roton-hero.png";
import { Typewriter } from "react-simple-typewriter";
// import resume from "../assets/Resume.pdf"

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div
      id="hero"
      className="max-w-6xl mx-auto px-7 md:px-16 md:p-10 pt-10 md:pt-0  mt-14 md:mt-28 "
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#050816",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              opacity: 1,
              color: {
                value: "",
              },
            },
            enable: false,
          },
          clear: true,
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: [],
              },
              onDiv: {
                selectors: [],
                enable: false,
                mode: [],
                type: "circle",
              },
              onHover: {
                enable: true,
                mode: "trail",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: {
                delay: 0.5,
                enable: true,
              },
            },
            modes: {
              trail: {
                delay: 0.005,
                pauseOnStop: true,
                quantity: 5,
                particles: {
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: true,
                      speed: 400,
                      sync: true,
                    },
                  },
                  collisions: {
                    enable: false,
                  },
                  links: {
                    enable: false,
                  },
                  move: {
                    outModes: {
                      default: "destroy",
                    },
                    speed: 2,
                  },
                  size: {
                    value: {
                      min: 1,
                      max: 5,
                    },
                    animation: {
                      enable: true,
                      speed: 5,
                      sync: true,
                      startValue: "min",
                      destroy: "max",
                    },
                  },
                },
              },
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
                mix: false,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 100,
                links: {
                  blink: false,
                  consent: false,
                  opacity: 1,
                },
              },
              push: {
                default: true,
                groups: [],
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: {
                factor: 3,
                radius: 200,
              },
              particle: {
                replaceCursor: false,
                pauseOnStop: false,
                stopDelay: 0,
              },
              light: {
                area: {
                  gradient: {
                    start: {
                      value: "#ffffff",
                    },
                    stop: {
                      value: "#000000",
                    },
                  },
                  radius: 1000,
                },
                shadow: {
                  color: {
                    value: "#000000",
                  },
                  length: 2000,
                },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                value: 1,
              },
              vertical: {
                value: 1,
              },
            },
            collisions: {
              absorb: {
                speed: 2,
              },
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              enable: false,
              maxSpeed: 50,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
              },
            },
            color: {
              value: "#ff0000",
              animation: {
                h: {
                  count: 0,
                  enable: true,
                  speed: 50,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  offset: 0,
                },
                s: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                l: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
              },
            },
            effect: {
              close: true,
              fill: true,
              options: {},
              type: [],
            },
            groups: {},
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0,
              },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: {
                  value: 0,
                },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 2,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fill: {},
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              limit: {
                mode: "delete",
                value: 0,
              },
              value: 100,
            },
            opacity: {
              value: {
                min: 0.3,
                max: 0.8,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 0.5,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: "#000",
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              close: true,
              fill: true,
              options: {},
              type: "circle",
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 3,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: {
              width: 0,
            },
            zIndex: {
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  value: 3,
                },
                rate: {
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
                particles: {},
              },
            },
            roll: {
              darken: {
                enable: false,
                value: 0,
              },
              enable: false,
              enlighten: {
                enable: false,
                value: 0,
              },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
              particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1,
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: {
                angle: 50,
                move: 10,
              },
            },
            life: {
              count: 0,
              delay: {
                value: 0,
                sync: false,
              },
              duration: {
                value: 0,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: {
                value: "random",
              },
              consent: false,
              distance: 100,
              enable: true,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: "#000",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            repulse: {
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          emitters: [],
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
        }}
      />
      <div className="md:flex justify-between">
        <div className="lg:w-2/3 md:mr-10 md:mt-6">
          <h1 className="text-3xl md:mb-4  text-gray-300">
            {" "}
            Hi There 👋, <br />{" "}
          </h1>
          <div className="content  relative md:left-[292px] left-[144px] ">
            <h1 className="md:text-5xl text-2xl text-nowrap font-bold mt-4 ">
              I'm Md sana Ullah Roton
            </h1>
            <h1 className="md:text-5xl text-2xl text-nowrap font-bold mt-4 ">
              I'm Md sana Ullah Roton
            </h1>
          </div>

          <p className=" text-2xl md:text-4xl text-purple-300 md:mt-16 mt-10">
            {" "}
            A {"  "}
            <Typewriter
              loop={true}
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Mern Stack Developer",
                "Full stack developer",
                "web developer ",
              ]}
            />
          </p>
          <p className="md:mt-2  md:text-xl lg:mr-6">
            With a passion for crafting intuitive and user-friendly web
            applications, I'm dedicated to delivering seamless user experiences
            through clean, maintainable, and optimized code.
          </p>
          <div className=" mt-3   items-center">
            <a
              href="https://drive.google.com/file/d/1OtCLUE5mtWWAN_n_aNiKbf3ZjjI5F_n1/view?usp=drive_link"
              target="_blank"
              class="inline-flex items-center justify-center h-8 px-2 md:h-12 md:px-5 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Resume
            </a>

            {/* <div>
              <h1 className=" my-4 text-divider "> Social Links</h1>
              <div className="space-x-4">
                <a href="/">
                  <button className="text-2xl">
                    <FaLinkedin />
                  </button>
                </a>
                <a href="/">
                  <button className="text-2xl">
                    <FaGithub />
                  </button>
                </a>
                <a href="/">
                  <button className="text-2xl">
                    <FaFacebook />
                  </button>
                </a>
                <a href="/">
                  <button className="text-2xl">
                    <FaWhatsapp />
                  </button>
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="image-container  md:mt-0">
          <img
            className="w-[380px] h-[350px]  lg:block hidden rounded-full main-image"
            src={roton_hero}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
