import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ukflag from "./flags icons/united-kingdom-flag-icon.svg";
import usflag from "./flags icons/usa-flag.svg";
import indonasianflag from "./flags icons/indonesia-flag.svg";

const CustomDropdown = () => {
  const [selected, setSelected] = useState("USD");
  const [isOpen, setIsOpen] = useState(false); // Toggle dropdown state

  const options = [
    { value: "USD", label: "USD", icon: usflag },
    { value: "POUND", label: "POUND", icon: ukflag },
    { value: "IDR", label: "IDR", icon: indonasianflag },
  ];

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative"}}>
      {/* Dropdown Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "#1A1F37",
          color: "white",
          border: "1px solid #4a5568",
          borderRadius: "0px 5px 5px 0px",
            padding: "11px 12px 11px 12px",
          cursor: "pointer",
          fontSize: "12px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={options.find((opt) => opt.value === selected).icon}
            alt={selected}
            style={{ width: "16px", height: "16px" }}
          />
          <span>{options.find((opt) => opt.value === selected).label}</span>
        </div>
        {/* Arrow Icon */}
        <IoIosArrowDown
          style={{
            fontSize: "16px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "45px",
            left: "0",
            background: "#1A1F37",
            border: "1px solid #4a5568",
            borderRadius: "5px",
            zIndex: 1000,
            width: "100%",
            color:"white"
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              style={{
                padding: "8px 10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "12px",
              }}
            >
              <img
                src={option.icon}
                alt={option.label}
                style={{ width: "16px", height: "16px" }}
              />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;