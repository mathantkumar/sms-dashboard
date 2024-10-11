import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6">
        <div className="mt-6 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="mt-2">
              <li>About Us</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg">Customer Support</h3>
            <p>Email: care@smsense.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg">Business Enquiries</h3>
            <p>UK: 0-808-189-1305</p>
            <p>AUS: 1-800-823-175</p>
            <p>Email: sales@smsense.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-lg">Social Connect</h3>
            <ul className="flex space-x-4 mt-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
