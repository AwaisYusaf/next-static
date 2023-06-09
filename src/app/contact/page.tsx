"use client";
import Header from "@/components/Header";
import { useState } from "react";

import { SiPhonepe, SiGooglemaps } from "react-icons/si";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
type FormType = {
  name: string;
  email: string;
  number: string;
  message: string;
};

export default function Page() {
  const [isSubmitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormType>();

  function handleForm(e: FormType) {
    console.log(e);
    setSubmitted(true);
  }

  return (
    <>
      <main>
        <Header selected="contact" />
        <div className="w-[85%] mx-auto grid grid-cols-3 gap-x-6 gap-y-4 py-12">
          <div
            className="py-4 flex flex-col space-y-2 rounded-md items-center text-center
         bg-[#4E244D] text-white col-span-3 lg:col-span-1"
          >
            <HiPhone size={70} color="white" />
            <h2 className="text-2xl font-semibold">Call Us</h2>
            <p>(123) 456-7890</p>
          </div>
          <div
            className="py-4 flex flex-col space-y-2 rounded-md items-center text-center
         bg-[#4E244D] text-white col-span-3 lg:col-span-1"
          >
            <HiMail size={70} color="white" />
            <h2 className="text-2xl font-semibold">Email Us</h2>
            <p>info@domain.com</p>
          </div>
          <div
            className="py-4 flex flex-col space-y-2 rounded-md items-center text-center
         bg-[#4E244D] text-white col-span-3 lg:col-span-1"
          >
            <MdLocationOn size={70} color="white" />
            <h2 className="text-2xl font-semibold">Address</h2>
            <p>Dummy Address</p>
          </div>
        </div>
        <div className="flex w-[85%] mx-auto flex-col lg:flex-row">
          <div className="basis-1/2">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/d/embed?mid=1ASMKulrsDXA4M4STShhx4HauVDs&hl=en&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </div>
          {isSubmitted ? (
            <div className="basis-1/2 bg-[#4E244D91] flex flex-col justify-center py-6 px-4 lg:space-y-0 space-y-4">
              <p className="text-white text-lg text-center w-full py-3 border border-white">
                Thanks for contacting us!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(handleForm)}
              className="basis-1/2 bg-[#4E244D91] flex flex-col justify-between py-6 px-4 lg:space-y-0 space-y-4"
            >
              <input
                {...register("name")}
                placeholder="Name"
                type="text"
                className="p-3 focus:outline-none text-sm"
              />
              <input
                {...register("email")}
                placeholder="Email"
                type="text"
                className="p-3 focus:outline-none text-sm"
              />
              <input
                {...register("number")}
                placeholder="Number"
                type="text"
                className="p-3 focus:outline-none text-sm"
              />
              <textarea
                {...register("message")}
                placeholder="Message"
                className="p-3 focus:outline-none min-h-[150px] text-sm"
              />
              <button
                type="submit"
                className="w-full uppercase bg-black text-white font-bold text-sm py-4"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
