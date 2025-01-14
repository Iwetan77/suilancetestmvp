import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { Route, Routes } from "react-router";
import JobDetails from "./JobDetails";
import NewsDetails from "./NewsDetails";
import JobsPage from "./JobsPage";
// import HowItWorks from './components/HowItWorks';
// import CTA from './components/CTA';
// import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/job' element={<JobsPage />} />
        <Route path='/job/:id' element={<JobDetails />} />
        <Route path='/news' element={<NewsDetails />} />
      </Routes>

      <Features />
      {/* <HowItWorks />
      <CTA />
      <Footer /> */}
    </div>
  );
};

export default App;
