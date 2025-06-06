import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings, FiBell } from 'react-icons/fi';
import classNames from 'classnames';

const navItems = ['Dashboard', 'People', 'Hiring', 'Salary', 'Reviews'];

const bgGradients = {
  Dashboard: 'bg-gradient-to-br from-gray-100 via-skyblue-100 to-blue-500',
  People: 'bg-gradient-to-br from-white-100 via-skyblue-200 to-blue-600',
  Hiring: 'bg-gradient-to-br from-white-100 via-skyblue-100 to-blue-600',
  Salary: 'bg-gradient-to-br from-white-200 via-skyblue-200 to-blue-700',
  Reviews: 'bg-gradient-to-br from-white-200 via-skyblue-300 to-blue-700',
};

const navStyles = {
  Dashboard: 'bg-white text-blue-600',
  People: 'bg-white text-blue-700',
  Hiring: 'bg-white text-blue-600',
  Salary: 'bg-white text-blue-700',
  Reviews: 'bg-white text-blue-700',
};

export default function Navbar() {
  const location = useLocation();
  const [hasAvatar, setHasAvatar] = useState(true);

  const active = navItems.find((item) =>
    location.pathname.toLowerCase().includes(item.toLowerCase())
  ) || 'Dashboard';

  return (
    <div
      className={classNames(
        'flex items-center justify-between px-10 py-4 rounded-full w-full max-w-7xl mx-auto shadow-lg mb-2',
        bgGradients[active]
      )}
    >
      {/* Logo */}
      <div className="text-white font-bold text-2xl tracking-wider">
        <span className="text-[#006CFF]">GIGFLOWW</span>
      </div>

      {/* Nav Items */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className={classNames(
              'text-base px-6 py-2 rounded-full transition-all duration-300 font-semibold',
              active === item
                ? navStyles[item]
                : 'text-white hover:bg-white hover:text-blue-600'
            )}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Icons: Settings, Bell, Avatar */}
      <div className="flex items-center gap-5">
        <button className="text-white hover:text-gray-200 text-2xl">
          <FiSettings />
        </button>
        <button className="text-white hover:text-gray-200 text-2xl">
          <FiBell />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-white">
          {hasAvatar ? (
            <img
              src="https://i.pravatar.cc/350"
              alt="avatar"
              className="w-full h-full object-cover"
              onError={() => setHasAvatar(false)}
            />
          ) : (
            <FaUserCircle className="text-blue-600 w-full h-full" />
          )}
        </div>
      </div>
    </div>
  );
}
