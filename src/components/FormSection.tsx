import React from "react";
import { RxStitchesLogo } from "react-icons/rx";

function FormSection() {
  return (
    <div
      id="form"
      className="min-h-screen flex items-center justify-center bg-gray-900 p-5 text-white max-w-[1440px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
        {/* Text Section */}
        <div className="relative p-6 flex flex-col justify-center bg-gray-700">
          <div className="mb-6 ">
            <div className="flex justify-center">
              <RxStitchesLogo size={40} />
            </div>
            <h2 className="text-3xl font-bold text-center text-yellow-300 mb-2 mt-5">
              Angel's Dream
            </h2>
            <p className="text-center text-blue-300 mb-4">
              Advocate for compassion, positive change, & giving back to the
              community.
            </p>
            <p className="text-center text-orange-400 font-semibold text-lg mb-8">
              Monthly collection: $50
            </p>
            <ul className="space-y-3 text-gray-200">
              <li>
                • All members contribute $50 every month for the purpose of
                costumes, choreography, singing lessons, food, booking of
                studio, and relevant expenses for performance.
              </li>
              <li>
                • We hope to uplift and bring out the best of your abilities.
              </li>
              <li>
                • Let’s do our part in creating a loving environment for
                everyone.
              </li>
              <li>
                • Honor our crafts and never stop learning and creating art!
              </li>
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 w-full max-w-md mx-auto bg-gray-800">
          <h2 className="text-3xl font-bold text-yellow-300 mb-6">
            Donation Form
          </h2>
          <form className="space-y-5">
            <div>
              <label
                className="block text-sm font-medium text-gray-200 mb-1"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-700 text-white"
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-200 mb-1"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-700 text-white"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-200 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-700 text-white"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-200 mb-1"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-700 text-white"
                placeholder="Phone"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-200 mb-1"
                htmlFor="amount"
              >
                Amount
              </label>
              <input
                id="amount"
                type="number"
                className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-gray-700 text-white"
                placeholder="$ Amount"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
