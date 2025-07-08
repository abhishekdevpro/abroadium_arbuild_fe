import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";

// // variants: 'primary', 'secondary', 'success'
// export default function Button({ variant = "primary", children, className = "", ...props }) {
//   const baseClasses = "rounded-full px-6 py-2 text-sm font-medium transition-all duration-200";

//   const variants = {
//     primary: "bg-primary text-white hover:bg-primary/90",
//     success: "bg-success text-white hover:bg-success/90",
//     secondary: "border border-primary text-primary bg-white hover:bg-primary/10",
//   };

//   return (
//     <button
//       className={classNames(baseClasses, variants[variant], className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

// Button.propTypes = {
//   variant: PropTypes.oneOf(["primary", "secondary", "success"]),
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
// };

import PropTypes from "prop-types";
import classNames from "classnames";

// variants: 'primary', 'secondary', 'success'
// sizes: 'sm', 'md', 'lg'
export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-[18px]",
    md: "px-8 py-2 text-[21px] font-semibold", // default
    lg: "px-8 py-3 text-[24px] font-semibold",
  };

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    success: "bg-success text-white hover:bg-success/90",
    secondary: "border border-primary text-primary bg-white hover:bg-[#F4F8FF]",
  };

  const baseClasses = "rounded-full font-medium transition-all duration-200";

  return (
    <button
      className={classNames(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
