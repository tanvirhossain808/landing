import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="contact-us">
      <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Have questions or want to work with us? Drop us a message and we'll get
        back to you soon!
      </p>

      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <label className="block text-gray-300 mb-1">Your Name</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500 transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Your Email</label>
          <input
            type="email"
            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500 transition-all"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            rows={4}
            className="w-full p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500 transition-all"
            placeholder="Type your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-orange-600 transition-all"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-8">
        <p className="text-gray-400">Or reach us directly at:</p>
        <p className="text-orange-500 font-semibold">info@gmail.com</p>
      </div>
    </section>
  );
};

export default ContactSection;
