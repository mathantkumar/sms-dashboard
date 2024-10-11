import axios from "axios";

//const API_BASE_URL = "https://smsense.vercel.app";

export const fetchStatistics = async () => {
  const response = await axios.get(`/stats`);
  return response.data;
};

export const fetchRateLimitViolations = async () => {
  const response = await axios.get(`/violations`);
  return response.data;
};

export const sendSms = async (phone) => {
  const response = await axios.post(`/send-sms`, { phone });
  return response.data;
};
