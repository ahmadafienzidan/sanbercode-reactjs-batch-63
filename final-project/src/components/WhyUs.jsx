const WhyUs = () => {
  const Services = "/img/Services.png";
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#6149C3] to-[#B65BC2] text-transparent bg-clip-text">Services</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto">We provide a range of services to help your career grow</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img src={Services} alt="Our Services" className="rounded-lg ransform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid gap-8">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#6149C3] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
                  <p className="text-gray-600">Job recommendation system based on your skills and preferences</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#B65BC2] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Consultation</h3>
                  <p className="text-gray-600">Consultation session with HR professionals</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#6149C3] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Online Training</h3>
                  <p className="text-gray-600">Professional skill development course</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#6149C3] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CV Analysis</h3>
                  <p className="text-gray-600">Expert review and improvement of CV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
