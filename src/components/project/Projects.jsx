import gmail_logo from '../home/gmail.jpg'
import project1 from './project1.png'
import project2 from './project2.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function Projects() {
  return (
    <div className="">


      <div className='fixed p-2 z-20 mt-[450px] ml-0 w-fit h-fit flex justify-center items-end cursor-pointer '>
        <a href="mailto:nikshepch2001@gmail.com"><img src={gmail_logo} alt="" className='w-[3vw] rounded-full hover:w-[3.5vw]' /></a>
      </div>

      <div className=' flex flex-col items-center mt-[10vh] text-2xl'>
        <div className="heading font-bold">
          WELCOME TO THE PROJECTS
        </div>
        <div className="item">
          <div className="project1 flex my-4 border-b-[1px] border-black pb-4">
            <motion.div className="image w-[15vw] h-[16vw]  mx-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.5
              }}
              exit={{ scaleX: 1, border: 'none' }}
            >
              <img src={project1} alt="" />
              <img src={project2} alt="" />
            </motion.div>
            <motion.div className="description flex text-sm w-[40vw] mx-4"
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
                <div className="flex justify-center mt-2 p-[2px] w-[8vw] text-lg text-black mx-2 border-2 border-black rounded-2xl cursor-pointer hover:bg-black hover:text-white">
                  <Link to="/"><p>Visit</p></Link>
                </div>
              </div>

            </motion.div>
          </div>
          <div className="project2 flex my-4 border-b-[1px] border-black pb-4">
            <motion.div className="image w-[15vw] h-[17vw] border-2 border-black mx-4"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.5
              }}
              exit={{ scaleX: 1, border: 'none' }}
            >
            </motion.div>
            <motion.div className="description flex text-sm w-[40vw] mx-4"
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
                <div className="flex justify-center mt-2 p-[2px] w-[8vw] text-lg text-black mx-2 border-2 border-black rounded-2xl cursor-pointer hover:bg-black hover:text-white">
                  <p>Visit</p>
                </div>
              </div>

            </motion.div>
          </div>
          <div className="project3 flex my-4 border-b-[1px] border-black pb-4">
            <motion.div className="image w-[15vw] h-[17vw] border-2 border-black mx-4"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.5
              }}
              exit={{ scaleX: 1, border: 'none' }}
            >
            </motion.div>
            <motion.div className="description flex text-sm w-[40vw] mx-4"
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
                <div className="flex justify-center mt-2 p-[2px] w-[8vw] text-lg text-black mx-2 border-2 border-black rounded-2xl cursor-pointer hover:bg-black hover:text-white">
                  <p>Visit</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>



    </div>
  )
}
