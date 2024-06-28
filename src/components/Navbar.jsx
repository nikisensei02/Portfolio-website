import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Navbar() {
  const location = useLocation();
  return (
    <div className='flex justify-center'>
      <motion.div className="fixed flex justify-center bg-[#1e1e1e] w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: .5,
          ease: "linear"
        }}
      >
        <div className="z-[1] navbar bg-[#1e1e1e] text-gray-400 flex justify-between items-center md:w-[75vw] h-[7.5vh]">
          <div className="title mx-1 px-2 cursor-pointer hover:text-gray-400 hidden md:flex">
            <div className="logo w-[100px]">
              
            </div>
            <div className="name text-white flex">
              <p className='text-purple-500 mx-2'>{"{ / }"}</p>
              <Link to="/">NIKSHEP</Link>
            </div>
          </div>
          <div className="pages">
            <ul className="pagesName flex ">
              <li className={`home px-2 mx-1 cursor-pointer hover:text-white ${location.pathname === '/' ? 'text-white' : ''}`}>
                #<Link to="/">Home</Link>
              </li>
              <li className={`projects px-2 mx-1 cursor-pointer hover:text-white ${location.pathname === '/projects' ? 'text-white' : ''}`}>
                #<Link to="/projects">Projects</Link>
              </li>
              <li className={`aboutMe px-2 mx-1 cursor-pointer hover:text-white ${location.pathname === '/aboutMe' ? 'text-white' : ''}`}>
                #<Link to="/aboutMe">About Me</Link>
              </li>
              <li className={`contacts px-2 mx-1 cursor-pointer hover:text-white `}>
                #
                <a href="https://docs.google.com/document/d/1UHd8nwdQ0rDBz0hJYYsOHc7juDHPCHTfTpwWRrNr0PI/edit?usp=drive_link" target='blank'>
                  Resume
                </a>
              </li>
            </ul>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
