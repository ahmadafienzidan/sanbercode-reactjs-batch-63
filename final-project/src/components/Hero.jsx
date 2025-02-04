import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Hero = ({ variant = "home" }) => {
  let content = {
    title: "One Step Closer to Your Dream Job",
    description: "Find the best job opportunities that match your dreams and skills. With NextStep, you can move closer to your dream career. Start now!",
    showButtons: true,
  };

  if (variant === "job-vacancy") {
    content = {
      title: "Build your dream career with NextStep!",
      description: "We connect thousands of job seekers with their dream employers. With smart job search features, customized filters, and in-depth career information, NextStep is the best solution for your professional journey.",
      showButtons: false,
    };
  }

  return (
    <section id="jumbotron" className="bg-center bg-no-repeat overflow-y-scroll bg-fixed bg-[url(/public/img/Jumbotron.png)] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Next<span className="bg-linear-65 from-purple-500 to-[#B65BC2] inline-block text-transparent bg-clip-text">Step</span> <br />
          {content.title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{content.description}</p>

        {content.showButtons && (
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to="/job-vacancy"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#6149C3] hover:bg-linear-65 from-purple-500 to-pink-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Browse Vacancies
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

Hero.propTypes = {
  variant: PropTypes.oneOf(["home", "job-vacancy"]),
};

export default Hero;
