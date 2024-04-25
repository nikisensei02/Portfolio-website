import contactinfo from '../components/social/contactinfo.png'
export default function Contact() {
  return (
    <div className="flex h-[70vh] justify-center items-center ">
      <div className="flex flex-col items-center mt-10 border-2 border-black w-[70vw] md:w-[30vw] md:h-[40vh] bg-[#1e1e1e] rounded-lg">
        <img src={contactinfo} alt="contact" />
        <p className="text-white">Feel free to reach out for inquiries, collaborations, or just to say hello! I'll get back to you as soon as possible.</p>
      </div>
    </div>
  )
}
