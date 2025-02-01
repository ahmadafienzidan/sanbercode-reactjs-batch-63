import { useState } from "react";

const faqData = [
  {
    question: "How does NextStep help me get a job?",
    answer: "NextStep connects job seekers with companies through an intelligent matching system, based on the user's skills and interests.",
  },
  {
    question: "Is NextStep free to use?",
    answer: "Yes! NextStep is completely free for job seekers. Companies who wish to post vacancies can opt for a paid plan for additional features.",
  },
  {
    question: "How do I apply for a job at NextStep?",
    answer: "Simply create an account, upload your CV, and search for suitable jobs. Click the 'Apply' button on the job you are interested in to submit your application.",
  },
  {
    question: "Does NextStep provide an international job search feature?",
    answer: "Yes! NextStep works with companies from various countries so that you can search for overseas job opportunities according to your skills.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mb-20">
      <h3 className="text-sm text-gray-600 font-[poppins] text-center">Frequently Asked Questions</h3>
      <h1 className="text-3xl mb-2 font-[poppins] text-center font-bold">
        Need A <span className="bg-linear-65 from-purple-500 to-[#B65BC2] inline-block text-transparent bg-clip-text">Support?</span>
      </h1>
      <div className="shadow-sm">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-5 font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <svg className={`w-4 h-4 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-5 bg-gray-50 dark:bg-gray-900">
                <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
