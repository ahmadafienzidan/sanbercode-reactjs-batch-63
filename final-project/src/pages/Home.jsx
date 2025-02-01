import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import JobWeekly from "../components/JobWeekly";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Hero variant="home" />
      <WhyUs />
      <JobWeekly />
      <Testimonial />
      <FAQ />
    </>
  );
};

export default Home;
