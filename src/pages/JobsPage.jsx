import { useEffect, useState } from 'react';
import JobListings from '../components/JobListings';

const JobsPage = ({ fetchJobs, jobListChanged }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobs();
      setJobs(fetchedJobs);
    };
    loadJobs();
  }, [fetchJobs, jobListChanged]); // Re-fetch jobs when jobListChanged changes

  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobListings jobs={jobs} />
    </section>
  );
};

export default JobsPage;