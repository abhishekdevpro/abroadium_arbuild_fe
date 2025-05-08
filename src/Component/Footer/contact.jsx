import { useState } from "react";

const Contact = () => {
  const [selectedSubject, setSelectedSubject] = useState("Other");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const subjects = ["Support", "Billing", "Feedback", "Partnerships", "Other"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Contact us!</h1>
        <p className="text-gray-600 mt-2">
          Do you have comments, questions, or feedback to share? Our team would
          love to hear from you. Use our live chat or submit a message below.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Subject</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {subjects.map((subject) => (
              <button
                key={subject}
                className={`px-4 py-2 rounded-md border ${
                  selectedSubject === subject
                    ? "bg-[#002a48] text-white"
                    : "border-gray-400"
                }`}
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002a48]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002a48]"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002a48]"
            rows="4"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-md hover:bg-yellow-600">
          Send
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl mt-4 mb-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Connect With Us</h2>
          <p>
            Have questions about our work or feedback on our website? We’d love
            to hear from you! Send us a message below, and our team will get
            back to you as soon as possible.
          </p>
          <p>
            📧 Email:{" "}
            <a
              href="mailto:airesume@abroadium.com"
              className="text-blue-500 hover:underline"
            >
              airesume@abroadium.com
            </a>{" "}
            We’re here to help! 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
