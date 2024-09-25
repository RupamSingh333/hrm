// pages/contact.js
import FrontendHeader from '../components/frontend/FrontendHeader';
import FrontendFooter from '../components/frontend/FrontendFooter';

const ContactPage = () => {
  return (
    <div>
      <FrontendHeader />
      <main className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Contact Us</h1>
          <p className="text-lg text-center mb-8 animate-fadeIn delay-1">
            We’d love to hear from you! Whether you have a question about our services, need support, or just want to
            say hello, feel free to get in touch.
          </p>
          <div className="max-w-lg mx-auto">
            <form className="bg-white p-6 rounded-lg shadow-lg animate-fadeIn delay-2">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <FrontendFooter />
    </div>
  );
};

export default ContactPage;
