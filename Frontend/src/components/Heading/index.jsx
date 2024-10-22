import React from "react";

const sizes = {
  body1_bold: "font-poppins text-[18px] font-semibold lg:text-[15px]",
  h1: "text-[68px] font-extrabold lg:text-[68px] md:text-[48px]",
  h6: "text-[22px] font-bold lg:text-[18px]",
  headingxs: "text-[50px] font-bold lg:text-[42px] md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "h1", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-txt-1 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
