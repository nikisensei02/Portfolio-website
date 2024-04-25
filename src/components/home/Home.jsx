import mainPhoto from './mainPhoto.jpg'
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import cpp_logo from './cpp.png'
import html_logo from './html_logo.png'
import css_logo from './css_logo.png'
import javascript_logo from './javascript_logo.jpg'
import python_logo from './python_logo.png'
import react_logo from './react_logo.png'
import node_logo from './node_logo.png'
import mongo_logo from './mongo_logo.png'
import express_logo from './express_logo.png'
import canva_logo from './canva_logo.jpeg'
import gmail_logo from './gmail.jpg'


import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'



export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();


  useEffect(() => {
    if (isInView1) {
      mainControls1.start("visible");
      console.log("hello");
    }
  });
  useEffect(() => {
    if (isInView2) {
      mainControls2.start("visible");
      console.log("hello");
    }
  });
  useEffect(() => {
    if (isInView3) {
      mainControls3.start("visible");
      console.log("hello");
    }
  });


  return (
    <div >
      {/* gmail logo */}
      <div className='fixed p-2 z-20  md:mt-[86vh] mt-[87vh] ml-[85vw] md:ml-2 w-fit h-fit flex justify-center items-end cursor-pointer '>
        <a href="mailto:nikshepch2001@gmail.com"><img src={gmail_logo} alt="" className='w-[8vw] md:w-[3vw] rounded-full md:hover:w-[3.5vw]' /></a>
      </div>


      {/* home content */}
      <div className="flex justify-center items-center bg-cover bg-center md:h-screen h-[70vh] w-full"
        style={{
          backgroundImage: `url(${one})`
        }}>


        <motion.div className="flex-col-reverse md:flex-row md:h-[70vh] md:w-[75vw] my-[5vh] flex items-center justify-between"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.5
          }}
          exit={{ scaleX: 1, border: 'none' }}
        >
          <motion.div className="content flex flex-col items-center md:items-start text-white text-3xl mx-[5vw] mt-[10vh]   w-[80vw] md:w-[30vw]"
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 4
            }}
          >
            <div className="text-3xl text-purple-500">Welcome aboard!!</div>
            <div className="flex">I am <p className="text-purple-500 mx-1">Nikshep</p></div>
            <div className="text-xl text-center md:text-start">Explore the world of coding and designing through my projects,</div>
            <div className='flex items-center'>
              <div className='text-xl border-2 w-fit my-2 px-2 rounded-md hover:text-purple-500 cursor-pointer'><Link to="/contact">Contact me!!!</Link></div>
            </div>

          </motion.div>
          <motion.div className=" photo text-white mx-[5vw] mt-[10vh] md:border-none border-[0.5px] p-2 rounded-full w-[50vw] md:w-[23vw]"
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 4
            }}>
            <img src={mainPhoto} alt="" className="rounded-[200px]" />
          </motion.div>
        </motion.div>
      </div>

      


      {/* about me content */}
      <div className=' text-white pt-[10vh] md:pt-[0] ' style={{
        backgroundImage: `url(${two})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the div covers the entire viewport height
        width: '100%',  // Ensures the div covers the entire viewport width
      }}>
        <motion.div className="aboutMe flex flex-col"
          variants={{
            hidden: { opacity: 0, y: 100, },
            visible: { opacity: 1, y: 0, },
          }}
          initial="hidden"
          animate={mainControls1}
          transition={{
            delay: 0.2,
            duration: 0.5
          }}
        >
          <div className='ml-[10vw] mb-2 border-b-[1px] w-[80vw] md:w-[50vw]'>
            <div className=" mt-[8vh] mb-[1vh] heading border-2 border-purple-500 rounded-tl-2xl rounded-br-2xl w-fit p-2 text-lg ">
              #About Me!!
            </div>
          </div>
          <div className="content ml-[10vw] w-[80vw] md:w-[50vw] p-2 h-[] border-2 rounded-lg">
            <p ref={ref1}>
              Hello, I am Nikhsep, a passionate and driven B.Tech student currently studying at Delhi Technological University in Delhi.
              At 22 years old, I have a keen interest in web development and specialize in MongoDB, Express, React, and Node.js (MERN stack).
              I am also currently honing my skills in Next.js to create even more powerful and efficient web applications.
            </p>
            <p className='text-purple-500 hover:text-white cursor-pointer w-fit'>
              <Link to="/aboutMe">read more...</Link>
            </p>
          </div>
        </motion.div>
      </div>


      {/* project content */}
      <div className="" style={{
        backgroundImage: `url(${three})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the div covers the entire viewport height
        width: '100%',  // Ensures the div covers the entire viewport width
      }}>
        <motion.div className="projects text-white w-full md:w-[40vw]"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls2}
          transition={{
            delay: 0.2,
            duration: 0.5
          }}
        >
          <div className="top flex justify-between items-end ">
            <div className="ml-[40vw] mb-[3vh]  heading border-2 border-purple-500 rounded-tl-2xl rounded-br-2xl w-fit p-2 text-lg ">
              #Projects
            </div>
          </div>

          <div ref={ref2} className="md:ml-[40vw] px-[25vw] md:pl-[0] content md:border-t-[1px] flex items-center md:w-[50vw] py-2 overflow-scroll md:overflow-visible">
            
            <motion.div className="card1 mx-1 border-2 rounded-md min-w-[50vw] md:min-w-[12vw] h-[70vw] md:h-[16vw]"
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls2}
              transition={{
                delay: 0.2,
                duration: 0.5
              }}
            >
              project1
            </motion.div>

            <motion.div className="card2 mx-1 border-2 rounded-md min-w-[50vw] md:min-w-[12vw] h-[70vw] md:h-[16vw]"
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls2}
              transition={{
                delay: 0.4,
                duration: 0.5
              }}
            >
              project2
            </motion.div>

            <motion.div className="card3 mx-1 border-2 rounded-md min-w-[50vw] md:min-w-[12vw] h-[70vw] md:h-[16vw]"
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls2}
              transition={{
                delay: 0.6,
                duration: 0.5
              }}
            >
              project3
            </motion.div>

            <motion.div className="card3 mx-1 border-2 rounded-md min-w-[50vw] md:min-w-[12vw] h-[70vw] md:h-[16vw]"
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls2}
              transition={{
                delay: 0.7,
                duration: 0.5
              }}
            >
              project4
            </motion.div>


          </div>
        </motion.div>
      </div>



      {/* skills content */}
      <div className='' style={{
        backgroundImage: `url(${two})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the div covers the entire viewport height
        width: '100%',  // Ensures the div covers the entire viewport width
      }}>
        <div ref={ref3} className="skills text-white">
          <div className=''>
            <div className="ml-[10vw] mb-[1vh] heading border-2 border-purple-500 rounded-tl-2xl rounded-br-2xl w-fit p-2 text-lg ">
              #Skills
            </div>
          </div>

          <div className="content ml-[10vw]">
            <div className="language">
              <div className="heading w-[28vw] mb-[1vw] text-purple-500 border-b-[1px] ">
                Languages:
              </div>
              <div className="items flex">
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.2,
                    duration: 0.5
                  }}>
                  <img src={cpp_logo} alt="" className='rounded-full' />
                  <p>C++</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.3,
                    duration: 0.5
                  }}>
                  <img src={javascript_logo} alt="" className='rounded-full' />
                  <p>Javascript</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.4,
                    duration: 0.5
                  }}>
                  <img src={python_logo} alt="" className='rounded-full' />
                  <p>Python</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.5,
                    duration: 0.5
                  }}>
                  <img src={html_logo} alt="" className='rounded-full' />
                  <p>HTML</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.6,
                    duration: 0.5
                  }}>
                  <img src={css_logo} alt="" className='rounded-full' />
                  <p>CSS</p>

                </motion.div>
              </div>
            </div>
            <div className="technologies mt-[10vh]">
              <div className="heading w-[28vw] mb-[1vw] text-purple-500 border-b-[1px] ">
                Technologies
              </div>
              <div className="items flex">
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.2,
                    duration: 0.5
                  }}>
                  <img src={mongo_logo} alt="" className='rounded-full' />
                  <p>MongodB</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.3,
                    duration: 0.5
                  }}>
                  <img src={express_logo} alt="" className='rounded-full' />
                  <p>ExpressJs</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.4,
                    duration: 0.5
                  }}>
                  <img src={react_logo} alt="" className='rounded-full' />
                  <p>ReactJs</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.5,
                    duration: 0.5
                  }}>
                  <img src={node_logo} alt="" className='rounded-full' />
                  <p>NodeJs</p>

                </motion.div>
                <motion.div className='w-[60px] h-[50px] mr-4 flex flex-col items-center'
                  variants={{
                    hidden: { opacity: 0, x: -100, },
                    visible: { opacity: 1, x: 0, },
                  }}
                  initial="hidden"
                  animate={mainControls3}
                  transition={{
                    delay: 0.6,
                    duration: 0.5
                  }}>
                  <img src={canva_logo} alt="" className='rounded-full' />
                  <p>Canva</p>

                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
