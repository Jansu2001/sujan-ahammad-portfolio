import Lottie from "lottie-react";
import message from "../../../public/Message (3).json";

// EMAIL JS
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygghrwb",
        "template_kibrdlm",
        form.current,
        "RdUs37G30jTIoA0Lj"
      )
      .then(
        (result) => {
          console.log(result.text);

          Swal.fire(
            'Thank You!',
            'Your Message has been Sent.',
            'success'
          )

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="pt-14">

      <div className="hero min-h-screen text-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center invisible lg:visible w-1/2 lg:text-left">
            <Lottie animationData={message} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2  shadow-2xl text-white">
            <form  className="card-body" ref={form} onSubmit={sendEmail}>
              <h1 className=" text-2xl">Get in Touch</h1>
              <div className="form-control bg-none">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text "
                  placeholder="Name"
                  name="user_name"
                  className="input rounded-none input-bordered bg-transparent border-sky-400 "
                />
              </div>
              <div className="form-control bg-none">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email "
                  placeholder="email"
                  name="user_email"
                  className="input rounded-none input-bordered bg-transparent border-sky-400 "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="20"
                  rows="10"
                  placeholder="Message"
                  
                  className=" input-bordered bg-transparent border p-5 border-sky-400"
                ></textarea>
              </div>
              <div className="form-control mt-6 shadow-lg shadow-gray-600/50">
                <input className="btn btn-primary" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
