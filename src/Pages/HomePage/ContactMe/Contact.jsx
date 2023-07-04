import Lottie from "lottie-react";
import message from '../../../../public/Message (3).json'
const Contact = () => {
    return (
        <div className="pt-20 lg:pt-0">
            <div className="hero min-h-screen text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center invisible lg:visible w-1/2 lg:text-left">
    <Lottie animationData={message} loop={true} />
    </div>
    <div className="card flex-shrink-0 w-full lg:w-1/2  shadow-2xl text-white">
      <div className="card-body ">
        <h1 className=" text-2xl">Get in Touch</h1>
        <div className="form-control bg-none">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="text " placeholder="email" className="input rounded-none input-bordered bg-transparent border-sky-400 " />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Message</span>
          </label>
          <textarea  name="" id="" cols="20" rows="10" placeholder="Message" className=" input-bordered bg-transparent border p-5 border-sky-400"></textarea>
          
        </div>
        <div className="form-control mt-6 shadow-lg shadow-gray-600/50">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;