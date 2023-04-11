import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Main;
