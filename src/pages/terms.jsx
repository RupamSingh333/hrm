// pages/terms.js
import FrontendHeader from '../components/frontend/FrontendHeader';
import FrontendFooter from '../components/frontend/FrontendFooter';

const TermsPage = () => {
  return (
    <div>
      <FrontendHeader />
      
      <main className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">Terms & Conditions</h1>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto animate-fadeIn delay-1">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to CodeLabs India. These terms and conditions outline the rules and regulations for the use of our
              website and services.
            </p>
            <h2 className="text-2xl font-bold mb-4">User Agreement</h2>
            <p className="mb-4">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use CodeLabs
              India if you do not agree to all the terms and conditions stated on this page.
            </p>
            <h2 className="text-2xl font-bold mb-4">License</h2>
            <p className="mb-4">
              Unless otherwise stated, CodeLabs India owns the intellectual property rights for all material on this
              website. All intellectual property rights are reserved. You may access this from CodeLabs India for your
              own personal use subjected to restrictions set in these terms and conditions.
            </p>
            {/* Additional terms content goes here */}
          </div>
        </div>
      </main>

      <FrontendFooter />
      
    </div>
  );
};

export default TermsPage;
