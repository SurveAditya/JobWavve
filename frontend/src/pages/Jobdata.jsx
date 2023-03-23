import React from 'react'
import JobTable from '../components/JobTable'
import { useLocation } from 'react-router-dom'
const Jobdata = () => {
    const location = useLocation()
    const {jobData} = location.state || {from: {pathname: '/'}};
  return (
    <div className='w-full flex flex-col space-y-5 items-center'>
        <JobTable jobData={jobData} />
    </div>
  )
}

export default Jobdata