import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendSms } from "../utils/api";

const SmsForm = ({ onSmsSent }) => {
  const [phone, setPhone] = useState("");

  const isValidPhoneNumber = (number) => {
    const phoneRegex = /^\d{10}$/; //to check for 10-digit numbers
    return phoneRegex.test(number);
  };

  const handleSubmit = async () => {
    if (!isValidPhoneNumber(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      await sendSms(phone);
      toast.success("SMS sent successfully!");
      onSmsSent();
      setPhone("");
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
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
        className="border p-2 rounded mb-2 mr-5"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send SMS
      </button>
    </div>
  );
};

export default SmsForm;
