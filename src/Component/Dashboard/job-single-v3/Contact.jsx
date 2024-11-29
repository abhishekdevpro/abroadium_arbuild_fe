import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-slate-50 p-6 rounded-lg max-w-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all duration-200 placeholder-gray-400"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all duration-200 placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;