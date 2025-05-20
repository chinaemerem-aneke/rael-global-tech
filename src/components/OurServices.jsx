import React from 'react';
import solarPTZ from '../assets/solarPTZ.png';

const OurServices = () => {
  return (
    <section className="bg-rael-blue py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-lg text-gray-100">
          We design, sell, and install a wide range of solar systems, including:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center">
          <img src={solarPTZ}  alt="Solar PTZ" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Solar PTZ</h3>
          <p className="text-gray-700">
            A high-performance solar-powered pan-tilt-zoom (PTZ) camera ideal for remote surveillance.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center">
          <img src={solarPTZ} alt="IP Camera" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600 mb-2">IP Camera (Live View)</h3>
          <p className="text-gray-700">
            An internet-enabled camera system that provides real-time live video feeds from anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center">
          <img src={solarPTZ} alt="LiFePO4 Battery" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600 mb-2">LiFePO₄ Lithium-Ion Battery</h3>
          <p className="text-gray-700">
            A long-lasting, safe, and efficient lithium battery technology for solar energy storage.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition flex flex-col items-center">
          <img src={solarPTZ} alt="Tubular Battery" className="w-20 h-20 mb-4" />
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Tubular Battery</h3>
          <p className="text-gray-700">
            A robust lead-acid battery designed for deep-cycle usage and extended backup support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
