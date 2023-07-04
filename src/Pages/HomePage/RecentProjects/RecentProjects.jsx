
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";



const RecentProjects = () => {
  return (
    <div className="px-5">
      <div className="card card-side lg:w-1/3  mx-auto text-white  ">
        <div className="card-body ">
          <h2 className="card-title mx-auto text-3xl lg:text-4xl">My Recent Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        
        <div className="card card-side flex-col lg:flex-row h-96 text-white ">
         <div className="lg:w-1/3">
         <figure className="h-full">
          <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/P1Hkzcm/play-kids-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/BgM3v30/play-kids-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/9wxBzhw/play-kids-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/QMWz91b/play-kids-4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/BT0LKVC/play-kids-5.png" alt="" /></SwiperSlide>
      </Swiper>
          </figure>
         </div>
          <div className="card-body lg:w-2/3">
            <h2 className="card-title text-2xl lg:text-4xl lg:mb-4">This is a full-stack Ecommerce Toy website.</h2>
            <div className="space-y-2">
            <p className="">● User Can login via GitHub or Google (also can create new Account)</p>
            <p className="">● Technology: React.js, Tailwind, MongoDB, Express.js, Node.js, Firebase Authentication</p>
            <p className="">● Duration: 4 Days</p>
            </div>
            <div className="relative lg:top-24">
            <button  className="btn btn-outline rounded-none ml-5 lg:w-1/5   hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"><Link to='https://backend-database-11.web.app/' target="blank">Live Preview</Link></button>
            <button  className="btn btn-outline rounded-none ml-5 lg:w-1/5   hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"><Link to='https://github.com/Jansu2001/play-kids-zone-client' target="blank">Client Code</Link></button>
            <button  className="btn btn-outline rounded-none mt-3 ml-5 lg:w-1/5 hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"><Link to='https://github.com/Jansu2001/play-kids-zone-server' target="blank">Server Code</Link></button>
            </div>
          </div>
        </div>
        <div className="card card-side mt-[350px] lg:mt-5 flex-col lg:flex-row-reverse h-96 text-white ">
         <div className="lg:w-1/3">
         <figure className="h-full">
          <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/BCB8cG8/hunting-jobs-1-1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/68cqZnt/hunting-jobs-1-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/bvRWd36/hunting-jobs-3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/Bq2WTfy/hunting-jobs-4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full" src="https://i.ibb.co/y5DX7Jw/hunting-jobs-5.png" alt="" /></SwiperSlide>
      </Swiper>
          </figure>
         </div>
          <div className="card-body  lg:w-2/3">
            <h2 className="card-title text-2xl lg:text-4xl lg:mb-4">This is a full-stack Job Hunting website.</h2>
            <div className="space-y-2">
            <p className="">● User Can login via GitHub or Google (also can create new Account)</p>
            <p className="">● Technology: React.js, Tailwind, MongoDB, Express.js, Node.js, Firebase Authentication</p>
            <p className="">● Duration: 4 Days</p>
            </div>
            <div className="relative lg:top-24">
            <button  className="btn btn-outline rounded-none ml-5 lg:w-1/5   hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"><Link to='https://bejewelled-lebkuchen-1fafb0.netlify.app/' target="blank">Live Preview</Link></button>
            <button  className="btn btn-outline rounded-none ml-5 lg:w-1/5   hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"><Link>Client Code</Link></button>
            <button  className="btn btn-outline rounded-none mt-3 ml-5 lg:w-1/5 hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"><Link>Server Code</Link></button>
            </div>
          </div>
        </div>
       
      </div>
      <div className="card card-side relative -bottom-80 lg:top-1 lg:w-1/2  pt-5 mx-auto text-white  ">
        <div className="card-body ">
        <button  className="btn btn-outline w-full rounded-none mx-auto hover:bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white lg:w-1/2"><Link to='/projects'>All Projects</Link></button>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
