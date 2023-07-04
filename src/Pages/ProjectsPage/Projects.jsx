import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="pt-24">

      <div className="grid grid-cols-1 gap-5">

        <div className="card card-side flex-col lg:flex-row h-96 text-white ">
          <div className="lg:w-1/2">
            <figure className="h-full">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/P1Hkzcm/play-kids-1.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/BgM3v30/play-kids-2.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/9wxBzhw/play-kids-3.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/QMWz91b/play-kids-4.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/BT0LKVC/play-kids-5.png"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </figure>
          </div>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl lg:text-4xl lg:mb-4">
              This is a full-stack Ecommerce Toy website.
            </h2>
            <div className="space-y-2">
              <p className="">
                ● User Can login via GitHub or Google (also can create new
                Account)
              </p>
              <p className="">
                ● Technology: React.js, Tailwind, MongoDB, Express.js, Node.js,
                Firebase Authentication
              </p>
              <p className="">● Duration: 4 Days</p>
            </div>
            <div className="relative lg:top-24 justify-between">
              <button className="btn btn-outline rounded-none ml-5    hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link to="https://backend-database-11.web.app/" target="blank">
                  Live Preview
                </Link>
              </button>
              <button className="btn btn-outline rounded-none ml-5    hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link to='https://github.com/Jansu2001/play-kids-zone-client'>Client Code</Link>
              </button>
              <button className="btn btn-outline rounded-none mt-3 ml-5  hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link to='https://github.com/Jansu2001/play-kids-zone-server'>Server Code</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side flex-col lg:flex-row-reverse h-96 text-white ">
          <div className="lg:w-1/2">
            <figure className="h-full">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/9Wq79px/speak-academy-1.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/WtC6jFS/speak-academy-2.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/1zwRnxL/speak-academy-3.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/5sG5vLP/speak-academy-4.png"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </figure>
          </div>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl lg:text-4xl lg:mb-4">
            This is a full-stack Education website. with Admin Dashboard & Payment System
            </h2>
            <div className="space-y-2">
              <p className="">
                ● Dashboard: Admin Dashboard, Student Dashboard, Instructor Dashboard.
              </p>
              <p className="">
                ● Users can Login with ( Google, Github) And Create Account . After selecting classes, users have to pay for enrolled classes.
              </p>
              <p className="">
                ● Technology: React, Bootstrap, React Router, MongoDB, Express js, Node js, Firebase Authentication and Stripe Payment System.
              </p>
              <p className="">● Duration: 6-8 Days</p>
            </div>
            <div className="relative lg:top-24 justify-between">
              <button className="btn btn-outline rounded-none ml-5    hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link to="https://backend-database-11.web.app/" target="blank">
                  Live Preview
                </Link>
              </button>
              <button className="btn btn-outline rounded-none ml-5    hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link to='https://github.com/Jansu2001/you-speak-academy-client'>Client Code</Link>
              </button>
              <button className="btn btn-outline rounded-none mt-3 ml-5  hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link to='https://github.com/Jansu2001/you-speak-academy-server'>Server Code</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side flex-col lg:flex-row h-96 text-white ">
          <div className="lg:w-1/2">
            <figure className="h-full">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/BCB8cG8/hunting-jobs-1-1.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/68cqZnt/hunting-jobs-1-2.png"
                    alt=""
                  />
                </SwiperSlide>
               
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/bvRWd36/hunting-jobs-3.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/Bq2WTfy/hunting-jobs-4.png"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-full w-full"
                    src="https://i.ibb.co/y5DX7Jw/hunting-jobs-5.png"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </figure>
          </div>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl lg:text-4xl lg:mb-4">
              This is a full-stack Job Hunting website.
            </h2>
            <div className="space-y-2">
              <p className="">
                ● User Can login via GitHub or Google (also can create new
                Account)
              </p>
              <p className="">
                ● Technology: React.js, Tailwind, MongoDB, Express.js, Node.js,
                Firebase Authentication
              </p>
              <p className="">● Duration: 4 Days</p>
            </div>
            <div className="relative lg:top-24 justify-between">
              <button className="btn btn-outline rounded-none ml-5    hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link to="https://backend-database-11.web.app/" target="blank">
                  Live Preview
                </Link>
              </button>
              <button className="btn btn-outline rounded-none ml-5    hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link>Client Code</Link>
              </button>
              <button className="btn btn-outline rounded-none mt-3 ml-5  hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
                <Link>Server Code</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
