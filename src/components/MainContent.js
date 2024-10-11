import React, { useEffect, useState } from "react";
import linechart from "../assets/Line chart.png";
import columnchart from "../assets/column chart (with shadow).png";
import { useNavigate } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import { motion } from "framer-motion";
import Footer from "./Footer";

const MainContent = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "  SMS Analytics & Dashboards";

  useEffect(() => {
    let index = 0;

    const typeWriterEffect = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typeWriterEffect);
      }
    }, 90);

    return () => clearInterval(typeWriterEffect);
  }, []);

  const handleTryItNow = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <motion.section
        className="bg-gray-100 rounded-tr-lg m-10 p-20 text-center flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 mr-20">
          <h1 className="text-5xl font-bold mb-4">{displayedText}</h1>
          <motion.p
            className="text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Track and control your SMS messaging results with out-of-the-box
            dashboards, and you’ll get the insights you need for SMS delivery.
          </motion.p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleTryItNow}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
            >
              Try It Now
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
              Book Demo
            </button>
          </div>
        </div>
        <motion.div
          className="flex-1 flex justify-end items-center ml-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={linechart} width={300} height={300} alt="Line Chart" />
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-white-100 rounded-md m-10 p-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-bold p-5 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Insights for Business
        </motion.h2>
        <div className="flex justify-around">
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DashboardRoundedIcon fontSize="large" />
            <p className="mt-2 text-lg">Overview of SMS Performance</p>
            <p className="text-gray-500 mt-1">
              Get a quick snapshot of your SMS campaigns' effectiveness.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <QueryStatsRoundedIcon fontSize="large" />
            <p className="mt-2 text-lg">Detailed Analytics</p>
            <p className="text-gray-500 mt-1">
              Dive deep into the metrics that matter for informed decisions.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <InsightsRoundedIcon fontSize="large" />
            <p className="mt-2 text-lg">Key Insights and Trends</p>
            <p className="text-gray-500 mt-1">
              Analyze trends over time to optimize future messaging.
            </p>
          </motion.div>
        </div>
      </motion.section>
      <motion.section
        className="bg-gray-100 rounded-tr-lg m-10 p-20 text-center flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 mr-20">
          <h1 className="text-5xl font-bold mb-4">
            Real Time Analytics to your Business
          </h1>
          <motion.p
            className="text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Track and control your SMS messaging results with out-of-the-box
            dashboards, and you’ll get the insights you need for SMS delivery.
          </motion.p>
        </div>
        <motion.div
          className="flex-1 flex justify-end items-center ml-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={columnchart} width={300} height={300} alt="Line Chart" />
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
};

export default MainContent;
