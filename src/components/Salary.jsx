import Navbar from "./Navbar";
import { FaFilter, FaSearch, FaCalendarAlt } from "react-icons/fa";

export default function Salary() {
  return (
    <div className="mt-[3px]">
      <Navbar />

      <div className="px-8 py-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Salary Activities</h2>
          </div>

          <div className="flex items-center gap-5">
            {/* Calendar */}
            <div className="flex items-center gap-2 text-base text-gray-600 border border-gray-300/60 px-3 py-1 rounded">
              <FaCalendarAlt />
              <span>June 6, 2025</span>
            </div>

            {/* Monthly Salary */}
            <div className="text-right border border-gray-300/60 px-4 py-2 rounded">
              <p className="text-sm text-gray-500">Monthly Salary</p>
              <p className="text-2xl font-semibold text-gray-800">$3500</p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Table */}
          <div className="col-span-8">
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-300/60">
              {/* Search + Filter */}
              <div className="flex gap-4 mb-4 items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300/60 rounded pl-10 pr-4 py-2 text-base w-60"
                  />
                  <FaSearch className="absolute top-3 left-3 text-gray-500 text-sm" />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300/60 rounded bg-white text-base hover:bg-gray-100">
                  <FaFilter />
                  Filter
                </button>
              </div>

              {/* Table */}
              <table className="w-full text-base text-left border-collapse">
                <thead className="bg-gray-100 text-gray-600 uppercase text-sm border-b border-gray-300/60">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Job Title</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Net Salary</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Alicia Shankur", title: "Software Engineer", dept: "Engineering", salary: "$2,500", status: "Paid", email: "alicia.shankur@gmail.com" },
                    { name: "James Onyikan", title: "Visual Designer", dept: "Design", salary: "$2,100", status: "Paid", email: "jamesonyikan@gmail.com" },
                    { name: "Aresen Vlamadir", title: "Sales Manger", dept: "Product", salary: "$4,700", status: "Pending", email: "darioberik@yahoo.com" },
                    { name: "Kito Ashuth", title: "Content Writer", dept: "Content", salary: "$2,000", status: "Paid", email: "astuthor@gmail.com" },
                    { name: "Diti Shreyas", title: "Backend Engineer", dept: "Engineering", salary: "$2,500", status: "Paid", email: "ditishreyas@gmail.com" },
                    { name: "Alicia Shankur", title: "Product Manager", dept: "Product", salary: "$4,000", status: "Pending", email: "alicia.shankur@gmail.com" },
                    { name: "Dario Berik", title: "Software Engineer", dept: "Engineering", salary: "$1,900", status: "Paid", email: "darioberik@yahoo.com" },
                  ].map((emp, i) => (
                    <tr key={i} className="border-t border-gray-300/60">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800">{emp.name}</span>
                          <span className="text-sm text-gray-500">{emp.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">{emp.title}</td>
                      <td className="px-6 py-4">{emp.dept}</td>
                      <td className="px-6 py-4">{emp.salary}</td>
                      <td className="px-6 py-4">
                        <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                          emp.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Profile Card */}
          <div className="col-span-4">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-300/60 text-base">
              {/* Gradient background + image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-xl opacity-80 z-0" />
                <div className="relative z-10 flex flex-col items-center p-6">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="profile"
                    className="w-24 h-24 rounded-full mb-3 border-4 border-white"
                  />
                  <h3 className="text-xl font-semibold text-white">Elizabeth James</h3>
                  <p className="text-sm text-white">UI Designer</p>
                  <hr className="w-full border-t border-gray-300/60 mt-4" />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Position:</strong> UI Lead</p>
                <p><strong>Department:</strong> Design</p>
                <p><strong>Status:</strong> Active</p>
                <p><strong>Basic Salary:</strong> $3500</p>
                <p><strong>Bonus & Overtime:</strong> $500</p>
                <p><strong>Deduction:</strong> $0.00</p>
                <p><strong>Next Salary:</strong> $3500</p>
                <p><strong>Bank Details:</strong> 234567890 - Polaris Bank</p>
                <p><strong>Currency:</strong> $USD</p>
              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white px-4 py-2 rounded hover:opacity-90 transition text-base">
                View Payroll History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
