import React from "react";

const sizes = {
  headingxs: "text-[16px] font-bold sm:text-[13px]",
  headings: "text-[20px] font-bold sm:text-[17px]",
  headingmd: "text-[24px] font-bold md:text-[22px] sm:text-[20px]",
  headinglg: "text-[24px] font-bold md:text-[22px] sm:text-[20px]",
  textxs: "text-[10px] font-medium",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-ubuntu ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
