import React from "react";

const sizes = {
  body1_light: "font-poppins text-[18px] font-normal not-italic lg:text-[15px]",
  textxs: "text-[23px] font-normal not-italic lg:text-[19px] md:text-[21px]",
};

const Text = ({ children, className = "", as, size = "body1_light", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-txt-0 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
