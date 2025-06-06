import Navbar from "./Navbar";
import Aiwrite from '../images/aiwrite.webp';

export default function Hiring() {
  return (
    <div className="mt-[3px] w-full">
      <Navbar />

      <div className="bg-gray-50 min-h-screen w-full">
        <div className="grid md:grid-cols-3 gap-6 w-full px-6 py-6">
          {/* Job Posting Form */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow border border-gray-200 space-y-5 w-full">
            <div>
              <h2 className="text-[22px] font-semibold text-gray-800">Job Posting</h2>
              <p className="text-sm text-gray-500">Post job for free. Add details for your job post</p>
            </div>

            <h3 className="text-lg font-semibold text-blue-600">Fill in Job Details</h3>

            <FormField label="Role" id="role" type="text" placeholder="e.g. Web Developer" />
            <FormField label="Skill(s) Required" id="skills" type="text" placeholder="Enter Required Skill(s)" />
            <FormField label="Years of Experience / Level" id="experience" type="text" placeholder="e.g. 0–2 years" />
            <SelectField label="Employment Type" id="employment">
              <option value="">Select type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
            </SelectField>
            <SelectField label="Workplace Type" id="workplace">
              <option value="">Select workplace</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </SelectField>
            <FormField label="Stipend" id="stipend" type="text" placeholder="Amount expecting per year" />
            <FormField label="No. of Openings" id="openings" type="number" placeholder="e.g. 3 openings" />
            <TextAreaField label="Job Description" id="description" />
            <FormField label="Relevant Link(s)" id="links" type="text" placeholder="Enter link" />

            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-sm">
              Post Job
            </button>
          </div>

          {/* Manage Posting + AI Panel */}
          <div className="space-y-6 w-full">
            {/* Manage Posting */}
            <div className="bg-white p-5 rounded-xl shadow border border-gray-200 min-h-[400px]">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-800">Manage Posting</h4>
                <button className="px-3 py-1 text-sm font-medium text-white  border-transparent bg-gradient-to-r from-blue-500 to-sky-400 rounded hover:from-blue-600 hover:to-sky-500">
                  See all
                </button>
              </div>

              {[1, 2].map((_, i) => (
                <div key={i} className="p-3 border border-gray-200 rounded-md mb-3">
                  <h5 className="font-semibold text-sm text-gray-800">UI Designer Intern (Remote)</h5>
                  <p className="text-xs text-gray-500">Artistic Studio, Bangalore</p>
                  <p className="text-xs text-gray-400">Ends on: 12/03/2024</p>
                  <div className="flex justify-between mt-2 text-xs text-gray-600">
                    <span>2k Views</span>
                    <span>102 Applications</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Writing Panel */}
            <div className="bg-white p-5 rounded-xl shadow border border-gray-200 text-center">
              <img
                src={Aiwrite}
                alt="AI help"
                className="w-100 mx-auto mb-3"
              />
              <h4 className="font-semibold text-gray-800 mb-2">Use AI to write</h4>
              <p className="text-sm text-gray-500 mb-4">
                Write perfectly crafted job titles. AI will help with job description and other fields, as well as suggest for you.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-sky-400  text-white px-4 py-2 rounded  text-sm">
                Write with AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Input field with external label
function FormField({ label, id, type, placeholder }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full h-14 border border-gray-300 rounded px-4 text-sm placeholder-opacity-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
}

// Select field with external label
function SelectField({ label, id, children }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={id}
        className="w-full h-14 border border-gray-300 rounded px-4 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {children}
      </select>
    </div>
  );
}

// Textarea with external label
function TextAreaField({ label, id }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full h-32 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
      ></textarea>
    </div>
  );
}
