import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Contact & Support
      </h1>

      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10">
        Have questions or need help? Our support team is here to assist you.
        Reach out to us anytime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">📞 Contact Information</h3>
          <p><strong>Email:</strong> support@petservice.com</p>
          <p><strong>Phone:</strong> +880 1234-567890</p>
          <p><strong>Address:</strong> Dhaka, Bangladesh</p>
          <p className="text-gray-600">
            Our team usually responds within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold">✉️ Send a Message</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
