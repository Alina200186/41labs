import React from "react";


const shapes = {
  round: "rounded-[30px]",
};
const variants = {
  gradient: {
    teal_600_green_900_7c: "bg-gradient text-txt-1",
  },
};
const sizes = {
  md: "h-[106px] px-[34px] text-[50px]",
  sm: "h-[78px] px-[34px] text-[41px] text-txt-1",
  xs: "h-[60px] px-[34px] text-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "xs",
  color = "2",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-txt-1 ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};



export { Button };
