
export default function Contact() {
  return (
    <div className="flex h-[70vh] justify-center items-center ">
      <div className="flex flex-col items-center mt-10 border-2 border-black w-[70vw] h-[30vh] md:w-[30vw] md:h-[40vh] bg-[#1e1e1e] rounded-lg">
        <div className="information text-white w-full mb-4 p-4">
          <div className="email flex justify-between ">
            <p>Email:</p>
            <a href="mailto:nikshepch2001@gmail.com" className="text-blue-500">nikshepch2001@gmail.com</a>
          </div>
          <div className="email2 flex justify-between">
            <p>Alternate:</p>
            <a href="mailto:nikisensei02@gmail.com" className="text-blue-500">nikisensei02@gmail.com</a>
          </div>
          <div className="phone flex justify-between">
            <p>Phone No:</p>
            <p>+918882001271</p>
          </div>
        </div>
        <p className="text-white p-4">
          ``Feel free to reach out for inquiries, collaborations, or just to say hello!
          I will get back to you as soon as possible.``
        </p>
      </div>
    </div>
  );
}
