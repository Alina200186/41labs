import { Button, Text, Img } from "./..";
import React from "react";
import {Link} from 'react-router-dom'

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex sm:flex-col justify-between items-center gap-5`}>
      <Img src="images/logo.png" alt="Header Logo" className="h-[50px] w-[296px] object-contain" />
      <ul className="flex flex-wrap gap-[50px]">
        
        <li>
          <a href="#" className="cursor-pointer lg:text-[15px]">
            <Text color="black" as="p" className="font-poppins text-[18px] font-normal text-txt-0 hover:font-semibold">
              Home
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="cursor-pointer lg:text-[15px]">
            <Link to="/User">
            <Text color="black" as="p" className="font-poppins text-[18px] font-normal text-txt-0 hover:font-semibold">
              About
            </Text>
            </Link>
          </a>
        </li>
        <li>
          <a href="#" className="cursor-pointer lg:text-[15px]">
            <Text as="p" className="font-poppins text-[18px] font-normal text-txt-0 hover:font-semibold">
              Services
            </Text>
          </a>
        </li>
        <li>
          <a href="#" className="cursor-pointer lg:text-[15px]">
            <Text as="p" className="font-poppins text-[18px] font-normal text-txt-0 hover:font-semibold">
              Page
            </Text>
          </a>
        </li>
      </ul>
      <Button 
  shape="round" 
  className="min-w-[222px] rounded-full px-[34px] font-bold bg-orange-500 text-white hover:bg-orange-600 sm:px-4"
>
  Contact us 
</Button>
    </header>
  );
}
