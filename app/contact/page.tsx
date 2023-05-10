"use client";
import { ImTwitter } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputs = Array.from(e.currentTarget.elements) as HTMLFormElement[];

    const data = inputs
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {} as Record<string, string>
      );

    console.log({ inputs });
    console.log({ data });

    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  return (
    <div className="p-10">
      <h2 className="uppercase sm:text-4xl text-3xl text-center mb-9 grad">Contact Me</h2>
      <div className="flex sm:flex-row flex-col justify-between">
        {submitted ? (
          <div className="h-[5rem] my-auto api-card">
            <h1 className="text-[1.2rem] text-center">Thank You!</h1>
            <p className="text-[1rem] text-center mt-0">
              Would be in touch very soon
            </p>
          </div>
        ) : (
          <form
            className="glass w-[100%] sm:w-[70%] md:w-[60%] p-11"
            onSubmit={handleSubmit}
            method="POST"
          >
            <label htmlFor="name" className="label">
              Your Name:
            </label>
            <input type="text" name="name" id="name" className="input" />
            <label htmlFor="email" className="label">
              Your Email:
            </label>
            <input type="email" name="email" id="email" className="input" />
            <label htmlFor="text" className="label">
              Message:
            </label>
            <textarea name="message" id="message" className="input" />
            <button
              type="submit"
              className="btn hover:translate-y-3 ease-in-out duration-500 mt-5 mb-1"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="flex flex-row flex-wrap sm:flex-col mt-9 justify-center">
          <a
            href="#"
            className="hover:translate-x-[-0.75rem] mr-6 ease-in-out duration-500"
          >
            <ImTwitter className="btn-ct h-[2.5rem] w-[2.5rem] p-[.5rem] lg:p-[1rem] lg:h-[4rem] lg:w-[4rem] mb-6" />
          </a>
          <a
            href="#"
            className="hover:translate-x-[-0.75rem] mr-6 ease-in-out duration-500"
          >
            <GrLinkedin className="btn-ct h-[2.5rem] w-[2.5rem] p-[.5rem] lg:p-[1rem] lg:h-[4rem] lg:w-[4rem] mb-6" />
          </a>
          <a
            href="#"
            className="hover:translate-x-[-0.75rem] mr-6 ease-in-out duration-500"
          >
            <FaGithub className="btn-ct h-[2.5rem] w-[2.5rem] p-[.5rem] lg:p-[1rem] lg:h-[4rem] lg:w-[4rem] mb-6" />
          </a>
          <a
            href="#"
            className="hover:translate-x-[-0.75rem] mr-6 ease-in-out duration-500"
          >
            <BsWhatsapp className="btn-ct h-[2.5rem] w-[2.5rem] p-[.5rem] lg:p-[1rem] lg:h-[4rem] lg:w-[4rem] mb-6" />
          </a>
          <a
            href="#"
            className="hover:translate-x-[-0.75rem] mr-6 ease-in-out duration-500"
          >
            <MdEmail className="btn-ct h-[2.5rem] w-[2.5rem] p-[.5rem] lg:p-[1rem] lg:h-[4rem] lg:w-[4rem] " />
          </a>
        </div>
      </div>
    </div>
  );
}