// components/ui/Button.jsx
import React from "react";
import PropTypes from "prop-types";

const Button = ({
  text,
  bgColor = "bg-blue-800",
  textColor = "text-white",
  hoverColor = "hover:opacity-90",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${bgColor} ${textColor} ${hoverColor} ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
