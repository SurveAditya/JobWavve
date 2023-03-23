import React from 'react'

const AdminDashboardData = () => {
  return (
    <div className="p-4">
    <h2 className="text-center text-3xl font-semibold mt-10">
      Welcome to {"Employee"} Dashboard
    </h2>
    <div className="mt-12 grid grid-cols-4 gap-5">
      <div className="bg-gray-100 hover:bg-gray-200 stat-card">
        <h3 className="stat-title">5</h3>
        <p>Total Jobs</p>
      </div>
      <div className="bg-gray-100 hover:bg-gray-200 stat-card">
        <h3 className="stat-title">0</h3>
        <p>My Application</p>
      </div>
      <div className="bg-gray-100 hover:bg-gray-200 stat-card">
        <h3 className="stat-title">7</h3>
        <p>Total Employee</p>
      </div>
      <div className="bg-gray-100 hover:bg-gray-200 stat-card">
        <h3 className="stat-title">4</h3>
        <p>Total Candidates</p>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardData