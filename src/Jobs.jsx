import React from 'react';
import HomepageFooter from './HomepageFooter/HomepageFooter';
import HomepageHead1 from './HomepageHeader/Homepage1';

const jobListings = [
  {
    id: 1,
    position: 'Spacecraft Systems Engineer',
    company: 'NASA Jet Propulsion Laboratory',
    location: 'Pasadena, CA',
    description: 'As a Spacecraft Systems Engineer, you will be responsible for designing and developing spacecraft systems for exploration missions. This includes conducting requirements analysis, developing system architectures, and leading integration and testing activities.',
    qualifications: [
      'Bachelor\'s degree in Aerospace Engineering, Mechanical Engineering, or related field',
      'Experience with spacecraft systems design, development, and testing',
      'Knowledge of systems engineering processes and tools',
      'Strong communication and team collaboration skills'
    ]
  },
  {
    id: 2,
    position: 'Launch Vehicle Systems Engineer',
    company: 'SpaceX',
    location: 'Hawthorne, CA',
    description: 'As a Launch Vehicle Systems Engineer, you will be responsible for the development and testing of launch vehicle systems for space exploration missions. This includes designing propulsion systems, conducting performance analyses, and leading test campaigns.',
    qualifications: [
      'Bachelor\'s degree in Aerospace Engineering, Mechanical Engineering, or related field',
      'Experience with launch vehicle systems design, development, and testing',
      'Knowledge of propulsion systems and aerodynamics',
      'Strong analytical and problem-solving skills'
    ]
  },
  {
    id: 3,
    position: 'Satellite Communications Engineer',
    company: 'Lockheed Martin',
    location: 'Denver, CO',
    description: 'As a Satellite Communications Engineer, you will be responsible for designing and developing satellite communication systems for space exploration missions. This includes conducting requirements analysis, developing system architectures, and leading integration and testing activities.',
    qualifications: [
      'Bachelor\'s degree in Electrical Engineering, Computer Engineering, or related field',
      'Experience with satellite communication systems design, development, and testing',
      'Knowledge of communication protocols and standards',
      'Strong communication and team collaboration skills'
    ]
  }
];

function JobListings() {
  return (
    <>
    <HomepageHead1 />
    <div className="p-8 justify-center pt-20 pb-20 bg-gray-900">
      <h1 className="text-2xl font-bold mb-8 text-white font-extrabold tracking-tight">Job Listings for Space Engineers</h1>
      {jobListings.map(job => (
        <div key={job.id} className="mb-8">
          <h2 className="text-lg font-bold text-white font-extrabold tracking-tight">{job.position} - {job.company}</h2>
          <h3 className="text-gray-500 text-sm text-white">{job.location}</h3>
          <p className="mt-2 text-white">{job.description}</p>
          <ul className="list-disc list-inside mt-2 text-white">
            {job.qualifications.map(qualification => (
              <li className='text-white' key={qualification}>{qualification}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <HomepageFooter />
    </>
  );
}

export default JobListings;
