import solarPTZ from "../assets/solarPTZ.png"

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Solar PTZ",
      description:
        "High-performance solar-powered pan-tilt-zoom (PTZ) camera ideal for remote surveillance and security.",
      image: solarPTZ,
      icon: "📹",
    },
    {
      id: 2,
      title: "IP Camera (Live View)",
      description: "Internet-enabled camera system that provides real-time live video feeds accessible from anywhere.",
      image: solarPTZ,
      icon: "🔍",
    },
    {
      id: 3,
      title: "LiFePO₄ Lithium-Ion Battery",
      description: "Long-lasting, safe, and efficient lithium battery technology for reliable solar energy storage.",
      image: solarPTZ,
      icon: "🔋",
    },
    {
      id: 4,
      title: "Tubular Battery",
      description: "Robust lead-acid battery designed for deep-cycle usage and extended backup power support.",
      image: solarPTZ,
      icon: "⚡",
    },
  ]

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We design, sell, and install a wide range of solar systems to meet your specific energy needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="relative h-48 w-full">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#contact-us"
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
