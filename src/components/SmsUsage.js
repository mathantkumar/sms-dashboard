import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { toast } from "react-toastify";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const SmsUsage = ({ smsCountLastMinute, totalSmsToday, fetchViolations }) => {
  const maxSmsPerMinute = 3;
  const maxSmsPerDay = 10;
  const [canSendSms, setCanSendSms] = useState(true);

  const validSmsCount = Math.min(smsCountLastMinute, maxSmsPerMinute);

  // Mock data for the past 6 days
  const pastSmsCounts = [5, 7, 4, 6, 3, 8];

  const today = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const labels = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    labels.push(weekdays[date.getDay()]);
  }

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Total SMS Sent",
        data: [...pastSmsCounts, totalSmsToday],
        backgroundColor: "#36A2EB",
        barThickness: 26,
      },
    ],
  };

  const gaugeData = {
    labels: ["Sent SMS", "Remaining"],
    datasets: [
      {
        label: "SMS Sent",
        data: [validSmsCount, maxSmsPerMinute - validSmsCount],
        backgroundColor: ["#36A2EB", "#D3D3D3"],
        borderWidth: 0,
      },
    ],
  };

  const gaugeOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      legend: { display: true },
    },
  };

  useEffect(() => {
    if (totalSmsToday >= maxSmsPerDay) {
      setCanSendSms(false);
      toast.error("Daily limit reached. Please try after next 24 hours.");
    } else {
      setCanSendSms(true);
    }
  }, [totalSmsToday]);

  return (
    <div className="flex flex-col w-full p-4 border rounded shadow-md bg-gray-100">
      <h2 className="text-xl font-bold">Current SMS Usage</h2>

      <div className="flex justify-between mt-4">
        <div className="flex flex-col w-1/2 p-4 border rounded-lg shadow bg-white">
          <h3 className="text-lg font-semibold">SMS Sent in Last Minute</h3>
          <div style={{ height: "200px", width: "100%" }}>
            <Doughnut data={gaugeData} options={gaugeOptions} />
          </div>
          <p className="mt-2">
            SMS Sent: {validSmsCount} / {maxSmsPerMinute}
          </p>
          {smsCountLastMinute > maxSmsPerMinute && (
            <p className="text-red-600">
              Alert: You have exceeded the maximum SMS limit of{" "}
              {maxSmsPerMinute} in the last minute!
            </p>
          )}
        </div>

        <div className="flex flex-col w-1/2 p-4 border ml-5 rounded-lg shadow bg-white">
          <h3 className="text-lg font-semibold">
            Total SMS Sent (Past 7 Days)
          </h3>
          <div style={{ height: "200px", width: "100%" }}>
            <Bar data={barData} options={barOptions} />
          </div>
          <p className="mt-2">
            Total SMS Sent Today: {totalSmsToday} / {maxSmsPerDay}
          </p>
          {!canSendSms && (
            <p className="text-red-600">
              Alert: You have reached the maximum daily SMS limit of{" "}
              {maxSmsPerDay}!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmsUsage;
