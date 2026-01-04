import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-gray-700">
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our platform.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Information We Collect
          </h3>
          <p>
            We collect basic information such as name, email address, and service
            details to provide better user experience.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h3>
          <p>
            Your data is used only to improve our services, manage accounts, and
            ensure platform security.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Data Protection
          </h3>
          <p>
            We do not sell or share your personal data with third parties without
            your consent.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Policy Updates
          </h3>
          <p>
            This policy may be updated occasionally. Continued use of the
            platform means you accept these changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
