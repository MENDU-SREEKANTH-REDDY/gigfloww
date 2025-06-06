import Navbar from "./Navbar";

export default function People() {
  return (
    <div className="mt-[3px]">
      <Navbar />

      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">List of People</h2>
            <p className="text-base text-gray-500">Wed 23, May 2025</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-sky-400  text-white px-5 py-2 text-base rounded">Add New Member</button>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300/60 flex flex-wrap items-center gap-5 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-4 py-2 text-base w-60"
          />
          <select className="border border-gray-300 rounded px-4 py-2 text-base">
            <option>Type</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2 text-base">
            <option>Role</option>
          </select>
          <select className="border border-gray-300 rounded px-4 py-2 text-base">
            <option>Advanced Filter</option>
          </select>
          <button className="ml-auto bg-white border border-gray-300 px-4 py-2 rounded text-base">Export</button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md border border-gray-300/60 overflow-x-auto">
          <table className="w-full text-base text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm border-b border-gray-300/60">
              <tr>
                <th className="px-6 py-4">
                  <input type="checkbox" />
                </th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Job Title</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Salary</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4">Life Cycle</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Alicia Shankur",
                  job: "Software Engineer",
                  dept: "Engineering",
                  salary: "$2,500",
                  date: "Mar 16, 2023",
                  life: "Hired",
                  status: "Active",
                  email: "alicia.shankur@gmail.com",
                },
                {
                  name: "James Onyikan",
                  job: "Visual Designer",
                  dept: "Design",
                  salary: "$2,000",
                  date: "Jan 16, 2023",
                  life: "Hired",
                  status: "Active",
                  email: "jamesonyikan@gmail.com",
                },
                {
                  name: "Diti Shreyas",
                  job: "Visual Designer",
                  dept: "Design",
                  salary: "$2,000",
                  date: "Dec 09, 2024",
                  life: "Employed",
                  status: "Inactive",
                  email: "diti@gmail.com",
                },
                {
                  name: "Pratik Mehra",
                  job: "DevOps Engineer",
                  dept: "Engineering",
                  salary: "$2,800",
                  date: "Apr 02, 2023",
                  life: "Hired",
                  status: "Active",
                  email: "pratik.mehra@xyz.com",
                },
                {
                  name: "Sanya Kulkarni",
                  job: "HR Manager",
                  dept: "HR",
                  salary: "$2,200",
                  date: "Feb 11, 2023",
                  life: "Onboarded",
                  status: "Active",
                  email: "sanya.hr@xyz.com",
                },
                {
                  name: "Zayed Khan",
                  job: "Backend Developer",
                  dept: "Engineering",
                  salary: "$2,600",
                  date: "May 01, 2023",
                  life: "Interviewed",
                  status: "Inactive",
                  email: "zayed.dev@xyz.com",
                },
                {
                  name: "Neha Verma",
                  job: "Content Writer",
                  dept: "Marketing",
                  salary: "$1,800",
                  date: "Mar 21, 2025",
                  life: "Hired",
                  status: "Active",
                  email: "neha.verma@xyz.com",
                },
              ].map((person, i) => (
                <tr key={i} className="border-t border-gray-300/60">
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-800">{person.name}</span>
                      <span className="text-sm text-gray-500">{person.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{person.job}</td>
                  <td className="px-6 py-4">{person.dept}</td>
                  <td className="px-6 py-4">{person.salary}</td>
                  <td className="px-6 py-4">{person.date}</td>
                  <td className="px-6 py-4">{person.life}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-sm px-3 py-1 rounded-full font-medium ${
                        person.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {person.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-5 flex justify-end gap-3 items-center">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className="border border-gray-300 px-4 py-2 text-base rounded bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:text-white transition"
              >
                {num}
              </button>
            ))}
            <button className="text-blue-500 text-base font-medium">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
