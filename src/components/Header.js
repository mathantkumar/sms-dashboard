import React from "react";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TextsmsOutlinedIcon />
          <h1 className="text-2xl font-bold">SMSense</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#company" className="hover:underline">
                Company
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#ourblog" className="hover:underline">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
