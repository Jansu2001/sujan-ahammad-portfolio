
const resumeUrl='SUJAN_AHAMMAD_RESUME.pdf'

import {  FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {


  const DownloadResume=(url)=>{

    const fileName=url.split('/').pop()
    const aTag=document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
    

  }

  return (
    <div className='pt-24'>
      <div className="card lg:card-side  rounded-b-none   text-white ">
        <div className="card-body lg;w-3/6">
          <div className="flex gap-5 lg:gap-10 justify-center items-center my-auto">
            <div className="">
              <ul className="space-y-4">
                <li>
                  <button className="btn-sm hover btn-circle"><Link  to='https://www.facebook.com/JANSU2001' target='blank' title='Facebook'><FaFacebook className='text-4xl'></FaFacebook></Link></button>
                </li>
                <li>
                <button className="btn-sm hover btn-circle"><Link to='https://www.instagram.com/mr__jansu' target='blank' title='Instagram'><FaInstagram className='text-4xl'></FaInstagram></Link></button>
                </li>
                <li>
                <button className="btn-sm hover btn-circle"><Link to='https://www.linkedin.com/in/mr-jansu/' target='blank' title='LinkedIN'><FaLinkedin className='text-4xl'></FaLinkedin></Link></button>
                </li>
                <li>
                <button className="btn-sm hover btn-circle"><Link to='https://api.whatsapp.com/message/4MUZFYBTAQOIJ1?autoload=1&app_absent=0' target='blank' title='WhatsApp'><FaWhatsapp className='text-4xl'></FaWhatsapp></Link></button>
                </li>
              </ul>
            </div>
            <div className=" lg:space-y-3">
              <h2 className="card-title uppercase text-[#0E7537] text-2xl lg:text-5xl">
                Sujan Ahammad 
              </h2>
              <h2 className="card-title uppercase text-[#D42A46] lg:text-5xl">
                MERN stack developer
              </h2>
              <p>Highly motivated MERN stack developer seeking employment, bringing a strong passion for
              crafting exceptional web applications and contributing to the success of dynamic development
              teams
              </p>
           <div className='mt-5 '>
             <button onClick={()=>DownloadResume(resumeUrl)} className="btn btn-outline rounded-none btn-success lg:w-1/4">Download Resume</button>
            <button  className="btn btn-outline btn-success ml-2 lg:w-1/4">HIRE ME</button>
           </div>
            </div>
          </div>
        </div>
        <div className="card-actions lg:visible justify-end lg:w-3/6 shadow-2xl shadow-sky-500/100 rounded-full">
          <figure>
            <img 
              className='rounded-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200'
              src='https://i.ibb.co/FwFV2Cp/SUJAN-AHAMMAD.png'
              alt="Album"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
