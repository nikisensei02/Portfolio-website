import gmail_logo from '../home/gmail.jpg'
import project11 from './project1-1.png'
import project12 from './project1-2.png'
import project33 from './project3-3.png'
import project23 from './project2-3.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function Projects() {
  const reloadToHome = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className="">


      <div className='fixed p-2 z-20 mt-[450px] ml-0 w-fit h-fit flex justify-center items-end cursor-pointer '>
        <a href="mailto:nikshepch2001@gmail.com"><img src={gmail_logo} alt="" className='w-[3vw] rounded-full hover:w-[3.5vw]' /></a>
      </div>

      <div className=' flex flex-col items-center mt-[10vh] text-2xl'>
        <div className="heading font-bold">
          WELCOME TO THE PROJECTS
        </div>

        <div className="item w-[90vw] flex flex-col items-center md:w-full">
          <div className="project1 flex flex-col md:flex-row my-4 border-b-[1px] border-black pb-4">
            <div className='flex justify-center '>
              <motion.div className="image w-[40vw] h-[40vw] md:w-[15vw] md:h-[16vw]   mx-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5
                }}
                exit={{ scaleX: 1, border: 'none' }}
              >
                <img src={project11} alt="" />
                <img src={project12} alt="" />
              </motion.div>
            </div>

            <motion.div className="description flex text-sm md:w-[40vw] mx-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.5
              }}
              exit={{ scaleX: 1, border: 'none' }}
            >
              <div>
                <p className='font-semibold m-2 text-lg'>
                  Portfolio Website Project:
                </p>
                <p className='flex m-2'>
                  <p className='font-semibold mx-2'>Description:</p>
                  <p className='font-light'>
                    Developed a professional portfolio website using React, Tailwind CSS,
                    and Framer Motion, highlighting my skills and projects in web development.
                  </p>
                </p>
                <p className='mt-2'>
                  <p className='font-semibold mx-2'>Technologies Used:</p>
                  <p className='font-bold mx-2'>React, Tailwind CSS, Framer Motion, JavaScript, HTML, CSS.</p>
                </p>
                <div className='flex items-center'>
                  <div className="flex justify-center mt-2 p-[2px] w-[70vw]  md:w-[8vw] text-lg text-black mx-2 border-2 border-black rounded-2xl cursor-pointer hover:bg-black hover:text-white">
                    <Link to="/" onClick={reloadToHome}><p>Visit</p></Link>
                  </div>
                  <a href="https://github.com/nikisensei02/Portfolio-website" className='ml-4 mt-2' target='blank'>
                    <i className="fa-brands fa-github md:fa-lg fa-2xl"></i>
                  </a>
                </div>

              </div>

            </motion.div>
          </div>



          <div className="project2 flex flex-col md:flex-row my-4 border-b-[1px] border-black pb-4">
            <div className="flex justify-center">
              <motion.div className="image w-[40vw] h-[40vw] md:w-[15vw] md:h-[16vw] border-2 border-black mx-4"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5
                }}
                exit={{ scaleX: 1, border: 'none' }}
              >
                <img src={project23} alt="" />
              </motion.div>
            </div>

            <motion.div className="description flex text-sm md:w-[40vw] mx-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.5
              }}
              exit={{ scaleX: 1, border: 'none' }}
            >
              <div>
                <p className='font-semibold m-2 text-lg'>
                  GoShip(chat app)
                </p>
                <p className='flex m-2'>
                  <p className='font-semibold mx-2'>Description:</p>
                  <p className='font-light'>
                    A chatting website using React, mongodB and Socket.io.
                    Experience real-time chatting, seamless dark mode, and effortless
                    account management in our sleek React-based messaging application.
                  </p>
                </p>
                <p className='mt-2'>
                  <p className='font-semibold mx-2'>Technologies Used:</p>
                  <p className='font-bold mx-2'>React, mongodB, Socket.io, styled-components, JavaScript, HTML, CSS.</p>
                </p>
                <div className='flex items-center'>
                  <div className="flex justify-center mt-2 p-[2px] w-[70vw]  md:w-[8vw] text-lg text-black mx-2 border-2 border-black rounded-2xl cursor-pointer hover:bg-black hover:text-white">
                    <a href="https://664c255b9e6c50823bb16adf--kaleidoscopic-swan-570a57.netlify.app" target='blank'>Visit</a>
                  </div>
                  <a href="https://github.com/nikisensei02/GoShip" className='ml-4 mt-2' target='blank'>
                    <i className="fa-brands fa-github md:fa-lg fa-2xl"></i>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>


          <div className="project3 flex flex-col md:flex-row my-4 border-b-[1px] border-black pb-4">
            <div className="flex justify-center">
              <motion.div className="image w-[40vw] h-[40vw] md:w-[15vw] md:h-[16vw] border-2 border-black mx-4"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5
                }}
                exit={{ scaleX: 1, border: 'none' }}
              >
                <img src={project33} alt="" />
              </motion.div>
            </div>

            <motion.div className="description flex text-sm md:w-[40vw] mx-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                duration: 0.5
              }}
              exit={{ scaleX: 1, border: 'none' }}
            >
              <div>
                <p className='font-semibold m-2 text-lg'>
                  Wordle6(Word game)
                </p>
                <p className='flex m-2'>
                  <p className='font-semibold mx-2'>Description:</p>
                  <p className='font-light'>
                    Wordle6 is an addictive word puzzle game featuring six-letter words.
                    Race against time, earn points for each correct guess, and track your score.
                    Enjoy the challenge with added features for time management and competitive scoring.
                    Test your vocabulary and strategy as you strive for mastery
                    in this captivating frontend gaming experience.
                  </p>
                </p>
                <p className='mt-2'>
                  <p className='font-semibold mx-2'>Technologies Used:</p>
                  <p className='font-bold mx-2'>React, Tailwind CSS, JavaScript, HTML, CSS.</p>
                </p>
                <div className='flex items-center'>
                  <div className="flex justify-center mt-2 p-[2px] w-[70vw]  md:w-[8vw] text-lg text-black mx-2 border-2 border-black rounded-2xl cursor-pointer hover:bg-black hover:text-white">
                    <a href="https://6649b1663800ea82e82b9621--friendly-druid-fa289a.netlify.app/" target='blank'>Visit</a>
                  </div>
                  <a href="https://github.com/nikisensei02/wordle6" className='ml-4 mt-2' target='blank'>
                    <i className="fa-brands fa-github md:fa-lg fa-2xl"></i>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </div>


      </div>



    </div>
  )
}
