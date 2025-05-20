import React from 'react';
import solar from '../assets/about-us.png';

const AboutUs = () => {
  return (
    <section className="py-16 bg-blue-100" id="about-us">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  At <span className="font-semibold text-blue-600">Rael Global Tech</span>, we provide custom solar installations 
                  that deliver stable, round-the-clock electricity for homes and businesses across Nigeria. <br /><br />
                  Our mission is to ensure energy independence and sustainability through reliable, affordable solar solutions.
                  </p>
            </div>

            <div className="flex-1">
                  <img
                  src={solar}
                  alt="Solar Installation"
                  className="w-full rounded-lg shadow-md"
                  />
            </div>
      </div>
</section>

  );
};

export default AboutUs;
