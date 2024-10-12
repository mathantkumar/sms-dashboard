import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendSms } from "../utils/api";

const SmsForm = ({ onSmsSent, totalSmsToday }) => {
  const [phone, setPhone] = useState("");

  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^\d{10}$/; // Check for a 10-digit number
    return phoneRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!isValidPhoneNumber(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (totalSmsToday >= 10) {
      toast.error("Daily limit reached. Please try after next 24 hours.");
      return;
    }

    try {
      await sendSms(phone);
      toast.success("SMS sent successfully!");
      onSmsSent(); // Refresh statistics
      setPhone(""); // Clear the input field
    } catch (error) {
      const message = error.response
        ? error.response.data
        : "Failed to send SMS.";
      toast.error(message);
    }
  };

  return (
    <div className="w-1/2 p-5 border rounded shadow-md bg-gray-100">
      <h2 className="text-2xl font-bold">Get Started!</h2>
      <p className="mb-4 text-md">
        Try out our trial version to get familiar with our product.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="border p-2 rounded mb-2 mr-5 w-full"
        />
        <button
          type="submit" // Change to type="submit" for form submission
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send SMS
        </button>
      </form>
    </div>
  );
};

export default SmsForm;
