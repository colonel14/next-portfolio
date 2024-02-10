"use client";
import "@/styles/footer.css";

import { useState } from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  const [isFormSubmitted] = useState(false);
  const [loading] = useState(false);

  return (
    <SectionLayout idName="contact">
      <>
        <h2 className="head-text">Take a coffee & chat with me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <Image
              src="/email.png"
              width={20}
              height={20}
              alt="whatsapp icon"
              className="object-cover"
            />
            <a
              href="mailto:abdallah.mohamed.conan@gmail.com"
              className="p-text"
            >
              abdallah.mohamed.conan@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <Image
              src="/whatsapp.png"
              width={10}
              height={10}
              alt="whatsapp icon"
              className="object-cover"
            />
            <Link
              aria-label="mobile phone"
              href="https://wa.me/+2001012234592"
              className="p-text"
            >
              +20 01012234592
            </Link>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
              />
            </div>
            <button type="button" className="p-text" aria-label="Send Message">
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </>
    </SectionLayout>
  );
}

export default Contact;
