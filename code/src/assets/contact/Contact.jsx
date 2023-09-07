import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7odboqr', 'template_437n2ab', form.current, 'bWR76YyejWXUJ1FxE')
      .then(
        (result) => {
          console.log(result.text);
          console.log('msg sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="my-5" id='contact'>
        <h1 className=' text-center text-primary'>Contact Me</h1>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <form ref={form} onSubmit={sendEmail} className="p-4 border rounded">
                  <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" required id="user_name" name="user_name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_email" className="form-label">
                      Email
                    </label>
                    <input type="email" required className="form-control" id="user_email" name="user_email" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="user_phone" className="form-label">
                      phone
                    </label>
                    <input type="phone" required className="form-control" id="user_phone" name="user_phone" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea className="form-control" required id="message" name="message" rows="5" />
                  </div>
                  <div className="d-flex justify-content-center my-5">
                  <button type="submit" className="btn btn-primary  btn-lg ">
                    Send
                  </button>
                  </div>

                </form>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center m-top-50 mb-4">
        <button
          className="btn line-btn-dark btn btn-light btn-icon btn-radius"
          href="cv.pdf"
          title=""
          download='cv.pdf'
        >
          Download Resume
        </button>
      </div>

    </>
  );
};

export default Contact;
