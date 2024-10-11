import React from "react";

const RateLimitViolations = ({ violations = [] }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  console.log("Violations:", violations); // Debugging line

  return (
    <div className="w-1/2 p-4 border rounded shadow-md bg-gray-100">
      <h2 className="text-xl font-bold">Rate Limit Violations (Last Hour)</h2>
      <ul>
        {Array.isArray(violations) && violations.length > 0 ? (
          violations.map((violation, index) => (
            <li key={index} className="text-red-500">
              <div>
                <strong>IP:</strong> {violation.ip}
              </div>
              <div>
                <strong>Phone:</strong> {violation.phone}
              </div>
              <div>
                <strong>Violation:</strong> {violation.violation_type}
              </div>
              <div>
                <strong>Time:</strong> {formatTimestamp(violation.timestamp)}
              </div>
              <hr className="my-2" />
            </li>
          ))
        ) : (
          <li>No violations recorded.</li>
        )}
      </ul>
    </div>
  );
};

export default RateLimitViolations;
