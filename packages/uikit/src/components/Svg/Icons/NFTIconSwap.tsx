import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
        <Svg width="18" height="18" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M52 7H20C12.8203 7 7 12.8203 7 20V52C7 59.1797 12.8203 65 20 65H52C59.1797 65 65 59.1797 65 52V20C65 12.8203 59.1797 7 52 7ZM20 0C8.95431 0 0 8.95431 0 20V52C0 63.0457 8.95431 72 20 72H52C63.0457 72 72 63.0457 72 52V20C72 8.95431 63.0457 0 52 0H20ZM16.5 19C16.5 17.067 18.067 15.5 20 15.5H36C37.933 15.5 39.5 17.067 39.5 19C39.5 20.933 37.933 22.5 36 22.5H23.5V35C23.5 36.933 21.933 38.5 20 38.5C18.067 38.5 16.5 36.933 16.5 35V19ZM53 56.5C54.933 56.5 56.5 54.933 56.5 53V37C56.5 35.067 54.933 33.5 53 33.5C51.067 33.5 49.5 35.067 49.5 37V49.5H37C35.067 49.5 33.5 51.067 33.5 53C33.5 54.933 35.067 56.5 37 56.5H53Z" fill="#1BE0AA"/>
</Svg>

   
  );
};

export default Icon;