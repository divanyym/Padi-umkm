import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700 text-gray-600",
  },
};

const sizes = {
  xs: "h-[36px] px-4 text-[12px]",
  sm: "h-[40px] px-2 text-[14px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <label className={`${className} flex items-center justify-center cursor-text border-gray-300_01 border border-solid bg-white-a700 rounded ${shape && shapes[shape]}`}>
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Input };
