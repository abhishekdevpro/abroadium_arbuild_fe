import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Input({
  placeholder = "",
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        "rounded-full px-4 py-2 w-full text-sm focus:outline-none",
        "shadow-md border border-gray-300 focus:ring-2 focus:ring-primary",
        className
      )}
      {...props}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
