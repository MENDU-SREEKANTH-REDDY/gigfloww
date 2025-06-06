import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerImg from '../images/register.jpg';
import logoImg from '../images/logo.png';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.password.trim()) newErrors.password = 'Password is required';
    if (!form.confirmPassword.trim()) newErrors.confirmPassword = 'Confirm password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Navigate to dashboard after successful registration
      navigate('/dashboard');
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* leftside */}
      <div className="col-span-6">
        <img src={registerImg} alt="Register" className="w-full h-full object-cover" />
      </div>

      {/* rightside */}
      <div className="col-span-6 bg-gradient-to-br from-gray-300 via-sky-200 to-blue-500 flex flex-col items-center justify-start py-10 px-4">
        <div className="text-center mb-10">
          <img src={logoImg} alt="Logo" className="w-[200px] mx-auto" />
          <h3 className="text-xl mt-2 font-semibold text-gray-800">Welcome to Gigfloww</h3>
          <h1 className="text-3xl mt-6">Register</h1>
          <p className="opacity-50">Seamless HR operations start now!</p>
          <p className="opacity-50 mb-4">Sign Up</p>
        </div>

        {/* form */}
        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit} noValidate>
          {[ 
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
            { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Your email' },
            { label: 'Password', name: 'password', type: 'password', placeholder: 'Your password' },
            { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Re confirm your password' },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label>
              <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-full bg-white placeholder-gray-400 focus:outline-none ${
                  errors[name] ? 'border border-red-400' : ''
                }`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-sky-400 to-blue-700 text-white font-semibold transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-700">
            Already on Gigfloww?{' '}
            <a href="/login" className="underline font-medium">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
