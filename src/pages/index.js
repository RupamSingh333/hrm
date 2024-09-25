"use client"
import React from 'react'
import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaMoneyBillWave, FaChartBar } from "react-icons/fa";
import FrontendLayout from '../components/layout/FrontendLayout';

const HomePage = () => {

  const FeatureCard = ({ icon, title, description }) => (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-4xl text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );

  return (
    <FrontendLayout>
      <section className="mb-12 mt-28"> {/* Increased margin-top from mt-20 to mt-28 */}
        <h2 className="text-3xl font-bold mb-6 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<FaUser />}
            title="Employee Profiles"
            description="Manage comprehensive employee information in one place."
          />
          <FeatureCard
            icon={<FaCalendarAlt />}
            title="Attendance Tracking"
            description="Monitor employee attendance and time-off requests easily."
          />
          <FeatureCard
            icon={<FaMoneyBillWave />}
            title="Payroll Processing"
            description="Automate payroll calculations and tax deductions."
          />
          <FeatureCard
            icon={<FaChartBar />}
            title="Financial Reports"
            description="Generate detailed financial reports and analytics."
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-lg text-white">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              "User-friendly interface",
              "Customizable solutions",
              "24/7 customer support",
              "Regular updates and new features",
              "Secure data management"
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mb-2 flex items-center"
              >
                <span className="mr-2">✓</span> {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Get Started Today</h2>
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg"
          >
            Request a Demo
          </motion.button>
        </div>
      </section>
    </FrontendLayout>
  )
}

export default HomePage