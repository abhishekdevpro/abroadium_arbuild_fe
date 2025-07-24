import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../../UI/Button";
import Navbar from "../../UI/Navbar";
import Footer from "../../UI/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedSubject, setSelectedSubject] = useState("Support");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const subjects = ["Support", "Billing", "Feedback", "Other"];

  const validate = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is not valid.";
    } else if (email.length > 50) {
      newErrors.email = "Email must be less than 50 characters.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{7,15}$/.test(phone)) {
      newErrors.phone = "Phone number must be 7-15 digits (numbers only).";
    }

    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const response = await axios.post(
        "https://api.abroadium.com/api/jobseeker/support-form",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          category: selectedSubject,
          subject: selectedSubject,
          description: message,
          phone,
          lang: navigator.language || "en",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 && response.data?.status === "success") {
        toast.success(response.data?.message || "Form submitted successfully");
        // Reset form
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setMessage("");
        setSelectedSubject("Support");
        setErrors({});
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact us!</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Do you have comments, questions, or feedback to share? Our team
            would love to hear from you.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-100 py-12">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
          {/* Subject */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Subject</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  type="button"
                  className={`px-4 py-2 rounded-md border ${
                    selectedSubject === subject
                      ? "bg-primary text-white"
                      : "border-gray-400"
                  }`}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={phone}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, ""); // remove non-numbers
                setPhone(input);
              }}
              placeholder="Enter phone number (digits only)"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            className="w-full bg-primary text-white font-semibold py-2 rounded-full hover:bg-primary/90"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>

        {/* Connect With Us */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl mt-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold">Connect With Us</h2>
            <p className="mt-2">
              Have questions about our work or feedback on our website? Send us
              a message below, and our team will get back to you as soon as
              possible.
            </p>
            <p className="mt-2">
              📧 Email:{" "}
              <a
                href="mailto:careers@abroadium.com"
                className="text-primary hover:underline"
              >
                careers@abroadium.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
