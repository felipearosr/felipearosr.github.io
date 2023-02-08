"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "../button";

export const Contact = () => {
  const form = useRef();

  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hxahj05', 'template_0iml0oq', form.current, 'vl2f_of4I5rPfY7AE')
      .then((result) => {
          form.current.reset();
          console.log(result.text);
          console.log("message sent");
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 10000);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contáctenos</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                <input type="text" id="subject" name="user_name" className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg border border-[#2d2e3e] shadow-sm focus:ring-primary-500 focus:border-[#2d2e3e]" required />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" name="user_email" className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg border border-[#2d2e3e] shadow-sm focus:ring-primary-500 focus:border-[#2d2e3e]" required />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensaje</label>
                <textarea id="message" name="message" rows={6} className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg shadow-sm border border-[#2d2e3e] focus:ring-primary-500 focus:border-[#2d2e3e]" />
            </div>
            <Button onClick={() => setShowPopup(true)} type="submit" value="Send">Enviar</Button>
        </form>
      <div className="pt-[3rem]">
          {showPopup && (
        <div className="bg-[#CCFBF1] border-t-4 border-[#14B8A6] rounded-b text-[#134E4A] px-4 py-3 shadow-md" role="alert">
          <div className="flex ">
            <div className="py-1">
              <svg className="fill-current h-6 w-6 text-[#14B8A6] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold">Mensaje enviado con exito</p>
              <p className="text-sm">Nos pondremos en contacto con usted</p>
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
    </>
  );
};
