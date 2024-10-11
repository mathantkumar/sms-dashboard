import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import SmsForm from "./SmsForm";
import SmsUsage from "./SmsUsage";
import RateLimitViolations from "./RateLimitViolations";
import { fetchStatistics, fetchRateLimitViolations } from "../utils/api";
import Footer from "./Footer";

const Dashboard = () => {
  const [smsCountLastMinute, setSmsCountLastMinute] = useState(0);
  const [totalSmsToday, setTotalSmsToday] = useState(0);
  const [rateLimitViolations, setRateLimitViolations] = useState([]);

  useEffect(() => {
    fetchStatisticsData();
    fetchViolationsData();
  }, []);

  const fetchStatisticsData = async () => {
    try {
      const data = await fetchStatistics();
      setSmsCountLastMinute(data.lastMinute);
      setTotalSmsToday(data.totalToday);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  const fetchViolationsData = async () => {
    try {
      const violations = await fetchRateLimitViolations();
      setRateLimitViolations(violations);
    } catch (error) {
      console.error("Error fetching violations:", error);
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between mb-6 p-4">
          <div className="w-1/2 p-5">
            <h1 className="text-4xl font-bold">Messaging Insights Dashboard</h1>
            <p className="text-xl mb-5">
              Visualize and analyze messaging activities, identify and debug
              issues, optimize delivery, and enhance user engagement.
            </p>
          </div>
          <SmsForm onSmsSent={fetchStatisticsData} />
        </div>

        <div className="flex justify-between mb-6 p-4">
          <SmsUsage
            smsCountLastMinute={smsCountLastMinute}
            totalSmsToday={totalSmsToday}
          />
          <RateLimitViolations violations={rateLimitViolations} />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          draggable
          pauseOnHover
        />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
