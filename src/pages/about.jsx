// pages/about.js
import FrontendHeader from '../components/frontend/FrontendHeader';
import FrontendFooter from '../components/frontend/FrontendFooter';

const AboutPage = () => {
  return (
    <div>
      <FrontendHeader />
      <main className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">About Us</h1>
          <p className="text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto animate-fadeIn delay-1">
            Welcome to CodeLabs India! We are a passionate team of developers dedicated to building innovative software
            solutions. Our mission is to create high-quality applications that solve real-world problems while
            delivering the best user experience.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto animate-fadeIn delay-2">
            At CodeLabs India, we believe in the power of technology to transform industries and empower individuals.
            Whether you're a small business or a large enterprise, we are here to help you achieve your goals.
          </p>
        </div>
      </main>
      <FrontendFooter />
    </div>
  );
};

export default AboutPage;
