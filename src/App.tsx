import React from "react";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router";
import JobDetails from "./JobDetails";
import NewsDetails from "./NewsDetails";
import JobsPage from "./JobsPage";
import NewsPage from "./Newspage";
import ScrollToTop from "./components/ScrollToTop";
// import Features from "./components/Features";
// import HowItWorks from './components/HowItWorks';
// import CTA from './components/CTA';
// import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<JobsPage />} />
        <Route path='/job' element={<JobsPage />} />
        <Route path='/job/:id' element={<JobDetails />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<NewsDetails />} />
      </Routes>
    </div>
  );
};

export default App;
