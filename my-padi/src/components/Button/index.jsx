import React from "react";
import PropTypes from "prop-types";

const shapes = {
    circle: "rounded-[50%]", // Correct spelling and bracket placement
    round: "rounded",
};

const variants = {
    fill: {
        white_A700: "bg-white-a700 text-cyan-700",
        teal_100: "bg-teal-100",
        green_50_01: "bg-green-50_01 text-green-800",
        cyan_700: "bg-cyan-700 text-gray-50_02", // Remove space in class names
        blue_50: "bg-blue-50 text-cyan-700",
    },
    outline: {
        gray_300_01: "border-gray-300_01 border border-solid text-blue_gray-800",
    },
};

const sizes = {
    sm: "h-[32px] px-2",
    md: "h-[40px] px-2",
    xs: "h-[26px] px-1.5 text-[12px]",
    lg: "h-[40px] px-4 text-[16px]", // Correct syntax error
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "lg",
    color = "white_A700",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shapes[shape]} ${sizes[size]} ${variants[variant][color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "round"]),
    size: PropTypes.oneOf(["sm", "md", "xs", "lg"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["white_A700", "teal_100", "green_50_01", "cyan_700", "blue_50", "gray_300_01"]),
};

export { Button };
