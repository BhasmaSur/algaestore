import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <div className="w-3/4 relative h-11 md:h-auto mb-10">
            <img
              src="https://img.freepik.com/premium-photo/green-art-plants-abstract-composition_443830-3554.jpg?w=1060"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h1 className="text-2xl font-bold">Contact Us</h1>
            </div>
          </div>
      <div className="flex flex-col md:flex-row w-full md:w-2/3">
        <div className="bg-white p-8 rounded-lg  mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Get in touch</h2>
          <p className="text-gray-700 mb-4">
            Looking for help or a new successful partnership? Feel free to drop us a message with some details of your question. We will be happy to help you. We answer within 1 business day.
          </p>
          <div className="text-gray-700">
            <p>Email: support@algaestore.com</p>
            <p>Phone: +91 (844) 667 5633</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg w-full md:ml-4">
          <h2 className="text-xl font-bold mb-4">Contact Form</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Contact Email"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 p-2 rounded-md resize-none"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
