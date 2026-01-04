import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        About Our Pet Service Platform
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10">
        We are a trusted platform connecting pet lovers with reliable pet
        services including pet care, grooming, training, and adoption support.
        Our mission is to make pet care easy, safe, and accessible for everyone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🐾 Our Mission</h3>
          <p className="text-gray-600">
            To improve the lives of pets by connecting owners with quality and
            trusted service providers.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🤝 Our Values</h3>
          <p className="text-gray-600">
            Trust, transparency, compassion, and customer satisfaction are at
            the heart of everything we do.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">🚀 Our Vision</h3>
          <p className="text-gray-600">
            To become the leading pet service marketplace with reliable services
            across the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
