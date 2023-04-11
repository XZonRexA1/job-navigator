import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <JobCategoryList></JobCategoryList>
    </div>
  );
};

export default Main;
