// src/components/layout/FrontendLayout.js
import FrontendHeader from '../frontend/FrontendHeader';
import FrontendFooter from '../frontend/FrontendFooter';

const FrontendLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <FrontendHeader />
      <main className="flex-grow">
        {children}
      </main>
      <FrontendFooter />
    </div>
  );
};

export default FrontendLayout;