import { getShoppingCart } from "../utilities/fakedb";

const appliedJobsLoader = async () => {
  const storedJobJSON = localStorage.getItem("jobData");
  const storedJobs = JSON.parse(storedJobJSON);
  console.log(storedJobs);
  return storedJobs;
};

export default appliedJobsLoader;
