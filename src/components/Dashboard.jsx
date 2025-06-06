import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Navbar from './Navbar';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Performance',
        data: [20, 55, 30, 75, 50, 60, 40],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.1)', // Light indigo
        borderColor: '#6366F1', // Indigo-500
        tension: 0.5,
        pointRadius: 0,
        borderWidth: 2.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280', // Tailwind gray-500
          font: { size: 12 },
        },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: '#E5E7EB', // gray-200
        },
        ticks: {
          stepSize: 20,
          color: '#6B7280',
          font: { size: 12 },
          callback: value => value + '%',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#6366F1',
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: context => ` ${context.parsed.y}%`,
        },
      },
    },
  };

  return (
    <div className="mt-[3px]">
      <Navbar />

      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Top info bar */}
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
          <span className="text-sm text-gray-700">
            Optimize your experience on Gigfloww – track your job post, manage teams and streamline HR operations effortlessly today
          </span>
        </div>

        {/* Date Row */}
        <div className="flex justify-between mt-2 items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Back, Nuraj group</h2>
          <div className="flex items-center border border-gray-300 rounded px-3 py-1 gap-2 text-gray-500 text-sm">
            <FaCalendarAlt />
            <span>Wed 23, May 2025</span>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-6 grid grid-cols-12 gap-4 min-h-[24rem]">
          {/* Left side */}
          <div className="col-span-8 flex flex-col gap-4 h-full">
            {/* Cards row */}
            <div className="flex gap-4 flex-1">
              {[{ label: 'Employees', value: 24 }, { label: 'Hiring', value: 5 }, { label: 'Projects', value: 1 }].map(
                ({ label, value }, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-300/60 flex flex-col justify-between flex-1 min-h-[10rem]"
                  >
                    <div>
                      <div className="text-sm text-gray-500">{label}</div>
                      <p className="text-2xl font-semibold text-gray-800">{value}</p>
                    </div>
                    <button className="text-sm text-blue-500 mt-2 self-start">View Details →</button>
                  </div>
                )
              )}
            </div>

            {/* Performance Chart */}
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-300/60 flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Performance Report</h3>
                <select className="border border-gray-300 text-sm rounded px-2 py-1">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="mt-4 h-56">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>

          {/* Right side: Upcoming Actions */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-300/60 col-span-4 h-full overflow-auto">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">Upcoming Actions</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              {[
                '03:30 pm – Internal Meeting with Jade Sapphire – UI designer',
                '05:00 pm – Internal Meeting with Content team',
                '07:00 pm – Interview with Achuyat – UI Intern',
                '08:00 pm – Internal Meeting with HR',
              ].map((text, i) => {
                const [time, ...rest] = text.split('–');
                return (
                  <li key={i}>
                    <div className="flex items-start gap-2">
                      <span className="border-r pr-2 border-gray-400/60 min-w-[80px] text-gray-700">{time.trim()}</span>
                      <span>{rest.join('–').trim()}</span>
                    </div>
                    <hr className="mt-2 border-gray-200" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Incoming Applications */}
        <div className="mt-6 bg-white p-4 rounded-xl shadow-md border border-gray-300/60">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800 text-lg">Incoming Application</h3>
            <div className="flex gap-2">
              <button className="bg-white border border-blue-500 text-blue-500 px-3 py-1 text-sm rounded">Filter</button>
              <button className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-3 py-1 text-sm rounded">
                See all →
              </button>
            </div>
          </div>
          <p className="mb-4 text-sm text-gray-600 opacity-50">Manage job posting of your application</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Elizabeth Flade', image: 'https://i.pravatar.cc/150?img=1' },
              { name: 'Andre Suares', image: 'https://i.pravatar.cc/170?img=2' },
              { name: 'Ishita Ashuth', image: 'https://i.pravatar.cc/155?img=3' },
              { name: 'Ishita Ashuth', image: 'https://i.pravatar.cc/150?img=4' },
            ].map((applicant, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300/60 p-4 rounded-xl shadow-sm flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-3">
                  <img src={applicant.image} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                  <div className="text-gray-900 font-medium">{applicant.name}</div>
                </div>
                <p className="text-xs text-gray-600">3 years in Software Development</p>
                <p className="text-xs text-blue-600">Latest Experience</p>
                <p className="text-xs text-gray-500">
                  Tucker Inc
                  <br />
                  Dec 2021 – May 2025
                </p>
                <div className="w-full border-t border-gray-400/50 my-1" />
                <button className="text-sm text-blue-500 underline mt-1 self-start">View Resume</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
