import React from "react";

const RateLimitViolations = ({ violations = [] }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 p-4 border ml-5 rounded-lg bg-gray-100">
      <h2 className="text-xl font-bold mb-5">
        Rate Limit Violations (Last Hour)
      </h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              IP
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Violation
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(violations) && violations.length > 0 ? (
            violations.map((violation, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {violation.ip}
                </td>
                <td className="px-6 py-4">{violation.phone}</td>
                <td className="px-6 py-4 text-red-500">
                  {violation.violation_type}
                </td>
                <td className="px-6 py-4">
                  {formatTimestamp(violation.timestamp)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center">
                No violations recorded.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RateLimitViolations;
