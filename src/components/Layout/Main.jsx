import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HeroSection from "../HeroSection/HeroSection";

const Main = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs></FeaturedJobs>

    </div>
  );
};

export default Main;
