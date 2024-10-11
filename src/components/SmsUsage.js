import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const SmsUsage = ({ smsCountLastMinute, totalSmsToday }) => {
  const gaugeData = {
    labels: ["Sent SMS", "Remaining"],
    datasets: [
      {
        label: "SMS Sent",
        data: [smsCountLastMinute, 100 - smsCountLastMinute],
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
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="w-1/2 p-4 border rounded shadow-md bg-gray-100 mr-5">
      <h2 className="text-xl font-bold">Current SMS Usage</h2>
      <div style={{ height: "200px" }}>
        <Doughnut data={gaugeData} options={gaugeOptions} />
      </div>
      <p>SMS Sent in Last Minute: {smsCountLastMinute}</p>
      <p>Total SMS Sent Today: {totalSmsToday}</p>
    </div>
  );
};

export default SmsUsage;
