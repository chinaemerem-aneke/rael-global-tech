import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section
      className="relative py-16 px-6 text-center text-white"
      
    >
      <div className="bg-black bg-opacity-60 rounded-lg max-w-xl mx-auto p-10">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">
          Have questions or ready to get started? Reach out to us directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/2349042840741"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          <FaWhatsapp size={24} />
          Chat with Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
