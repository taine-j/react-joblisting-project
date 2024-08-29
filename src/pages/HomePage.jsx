import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = ({ fetchJobs, jobListChanged }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobs();
      setJobs(fetchedJobs);
    };
    loadJobs();
  }, [fetchJobs, jobListChanged]); // Re-fetch jobs when jobListChanged changes

  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings jobs={jobs} isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage;