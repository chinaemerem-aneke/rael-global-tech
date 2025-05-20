import solar from "../assets/about-us.png"

const AboutUs = () => {
  return (
    <section className="py-20 bg-white" id="about-us">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1.5 bg-rael-blue mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Powering Nigeria's Future with <span className="text-rael-blue">Sustainable Energy</span>
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              At <span className="font-semibold text-rael-blue">Rael Global Tech</span>, we provide custom solar
              installations that deliver stable, round-the-clock electricity for homes and businesses across Nigeria.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Our mission is to ensure energy independence and sustainability through reliable, affordable solar
              solutions that empower communities and businesses to thrive without interruption.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-rael-blue mt-0.5 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Custom solar installations</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-rael-blue mt-0.5 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">24/7 technical support</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-rael-blue mt-0.5 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Energy storage solutions</span>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-rael-blue mt-0.5 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Maintenance services</span>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={solar || "/placeholder.svg"}
                alt="Solar Installation"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = "/placeholder.svg"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-rael-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
