import React from "react";

const sizes = {
  textxs: "text-[12px] font-normal not-italic",
  texts: "text-[12px] font-normal not-italic",
  textmd: "text-[14px] font-normal not-italic",
  textlg: "text-[15px] font-normal not-italic",
  textxl: "text-[16px] font-normal sm:text-[13px]",
};

const Text = ({ children, className = "", as, size = "textxs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-ubuntu ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
