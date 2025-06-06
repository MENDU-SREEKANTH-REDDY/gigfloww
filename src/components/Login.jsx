import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../images/login.jpg';
import logoImg from '../images/logo.png';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    if (!form.password.trim()) newErrors.password = 'Required';
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
      // Navigate to dashboard after successful login
      navigate('/dashboard');
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Left Image */}
      <div className="col-span-6">
        <img src={loginImg} alt="Login" className="w-full h-[989px] object-cover" />
      </div>

      {/* Right Form */}
      <div className="col-span-6 bg-gradient-to-br from-gray-300 via-sky-200 to-blue-500 flex flex-col items-center justify-start py-10 px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <img src={logoImg} alt="Logo" className="w-[200px] mx-auto" />
          <h3 className="text-xl mt-2 font-semibold text-gray-800">Welcome Back to Gigfloww</h3>
          <h1 className="text-3xl mt-6">Login</h1>
          <p className="opacity-50">Enter your credentials to continue</p>
        </div>

        {/* Form */}
        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit} noValidate>
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
            { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Your email' },
            { label: 'Password', name: 'password', type: 'password', placeholder: 'Your password' },
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
                  errors[name] ? 'border border-red-500' : ''
                }`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-sky-400 to-blue-700 text-white font-semibold transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
