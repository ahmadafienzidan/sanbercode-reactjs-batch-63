const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-[#6149C3] to-[#B65BC2] py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Success Stories from Our Talents</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#B65BC2] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">📢</span>
            </div>
            <p className="text-gray-600 mb-6 italic">"I found my dream job in less than a week through NextStep. The process was quick and effortless!"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-[#6149C3] font-bold">FJ</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Farrah J.</h4>
                <p className="text-sm text-gray-500">Marketing Specialist</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#6149C3] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">📢</span>
            </div>
            <p className="text-gray-600 mb-6 italic">"NextStep helped me land a position that perfectly matches my skills and passion. Highly recommended!"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-[#6149C3] font-bold">DP</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Dimas P.</h4>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all">
            <div className="absolute -top-6 left-6 w-12 h-12 bg-[#B65BC2] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">📢</span>
            </div>
            <p className="text-gray-600 mb-6 italic">"The personalized job recommendations helped me discover opportunities I never would have found otherwise!"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-[#6149C3] font-bold">AM</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Aisha M.</h4>
                <p className="text-sm text-gray-500">UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
