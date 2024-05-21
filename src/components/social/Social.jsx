import { useLocation } from 'react-router-dom'
export default function Social() {
    const location = useLocation();
    return (
        <div className={`fixed z-10 ${location.pathname === '/projects' ? 'text-black' : 'text-white'} `}>
            <div className={`vertical_line w-[1px]  h-[30vh] ml-[1.2vw] hidden md:block ${location.pathname === '/projects' ? 'bg-black' : 'bg-white'}`}>
                {/* line */}
            </div>
            <div className="logo ml-[2vw] md:ml-[0.7vw] mt-[80vh] md:mt-[0vh]">
                <div className={`flex rounded-3xl w-[20px] my-4 cursor-pointer `}>
                    <a href="https://www.instagram.com/niki.sensei.02/" target='blank'><i className="fa-brands fa-instagram md:fa-lg fa-xl"></i></a>
                </div>
                <div className='flex rounded-3xl w-[20px] my-4 cursor-pointer '>
                    <a href="https://github.com/nikisensei02" target='blank'><i className="fa-brands fa-github md:fa-lg fa-xl"></i></a>
                </div>
                <div className='flex rounded-3xl w-[20px] my-4 cursor-pointer '>
                    <a href="https://www.linkedin.com/in/nikshep-a65539223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmDU0GmcHSG%2B4eUAke%2BZyeA%3D%3D" target='blank'>
                        <i className="fa-brands fa-linkedin-in md:fa-lg fa-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
