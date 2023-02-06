"use client"
import React, { useRef } from 'react';
import emailjs, { Result } from '@emailjs/browser';
import { Button } from "../button";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hxahj05', 'template_0iml0oq', form.current, 'vl2f_of4I5rPfY7AE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contáctenos</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="user_email" className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg border border-[#2d2e3e] shadow-sm focus:ring-primary-500 focus:border-[#2d2e3e]" required />
            </div>
            <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
                <input type="text" id="subject" name="user_name" className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg border border-[#2d2e3e] shadow-sm focus:ring-primary-500 focus:border-[#2d2e3e]" required />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label>
                <textarea id="message" name="message" rows={6} className="block p-3 w-full text-sm text-gray-900 bg-[#1b1d2c] rounded-lg shadow-sm border border-[#2d2e3e] focus:ring-primary-500 focus:border-[#2d2e3e]" />
            </div>
            <Button type="submit" href="#">Enviar</Button>
        </form>
      </div>
    </>
  );
};
