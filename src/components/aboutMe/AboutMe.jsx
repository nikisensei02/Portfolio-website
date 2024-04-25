import { motion } from 'framer-motion'
export default function AboutMe() {
  return (
    <div className="flex flex-col items-center mt-[10vh]">
      <div className="main text-3xl font-bold">
        About Me
      </div>
      <motion.div className="content text-lg w-[80vw] border-2 border-black p-2"
        initial={{scaleX:0}}
        animate={{scaleX:1}}
        transition={{
          delay: 0.2,
          duration: 0.5
        }}
      >
        <p>
          Hello, I am Nikshep, a passionate and driven B.Tech student currently studying at Delhi Technological University in Delhi.
          At 22 years old, I have a keen interest in web development and specialize in MongoDB, Express, React, and Node.js (MERN stack).
          I am also currently honing my skills in Next.js to create even more powerful and efficient web applications.
        </p>
        <p>
          Throughout my academic journey, I have been dedicated to mastering various aspects of full-stack development, with a focus on creating robust and user-friendly applications.
          I thrive on challenges and enjoy diving into complex problems, leveraging my knowledge and skills to find innovative solutions.
        </p>
        <p>
          I believe in continuous learning and growth, and I am always eager to explore new technologies and methodologies to stay at the forefront of the ever-evolving field of web development.
          With a strong foundation in both front-end and back-end technologies, I am committed to delivering high-quality, scalable, and maintainable solutions for any project I undertake.
          Outside of coding, I enjoy exploring new places, engaging in outdoor activities, and connecting with like-minded individuals who share my passion for technology and innovation.
        </p>
        <p>
          Feel free to browse through my portfolio to see some of my projects and get in touch if you would like to collaborate or discuss any opportunities!
        </p>
      </motion.div>
    </div>
  )
}
