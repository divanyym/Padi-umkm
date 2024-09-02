import React from "react";
import protoTypes from "protoTypes";

const shapes = {
    cicle: "rounded- [50%]",
    round: "rounded",
};
const variants = {
    fill: {
        white_A700: "bg-white-a700 text-cyan-700",
        teal_100: "bg-teal-100",
        green_50_01: "bg-green-50_01 text-green-800",
        cyan_700: "bg-cyan- 700 text-gray-50_02",
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
    lg: "h-[40]px px-4 text-[16px]",

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
            className={ `${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && [variant]?.[color]}`}
            {...restProps}
            >
                {!!leftIcon && leftIcon}
                {children}
                {!!rightIcon && rightIcon}
            </button>
        );
    }
};

Button.protoTypes = {
    className: protoTypes.string,
    children: protoTypes.Node,
    leftIcon: protoTypes.node,
    rightIcon: protoTypes.node,
    shape: protoTypes.oneOf(["circle", "round"]),
    size: protoTypes.oneOf(["sm", "md", "xs", "lg"]),
    variant: protoTypes.oneOf(["fill", "outline"]),
    color: protoTypes.oneOf(["white_A700", "teal_100", "green_50_01", "cyan_700", "blue_50", "gray_300_01"]),
};

export { Button };