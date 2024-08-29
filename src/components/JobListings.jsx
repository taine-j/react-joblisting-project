import React from 'react';
import { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ jobs, isHome = false }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (jobs.length > 0) {
      setLoading(false);
    }
  }, [jobs]);

  const displayedJobs = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedJobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;