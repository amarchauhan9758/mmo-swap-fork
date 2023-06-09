import styled from "styled-components";
import { variant } from "styled-system";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;
  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
    // border:2px solid red;
  //  box-shadow: 3px -1px 0px #1be0aa, -3px 1px 0px #1be0ac;
  border-top: 3px solid #1be0ac; 
   border-right: 3px solid #1be0ac;
    border-left: 3px solid #1be0ac;
    border-bottom: 1px solid #270e60;
    padding-left:12px;
    padding-right:12px;
    color:#1be0aa;
    width:100%;
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
      // background-color: #270e60;
        border-radius: 2px 2px 0 0;
        
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  //box-shadow: ${({ $isActive }) => ($isActive ? "0px -1px 2px 1px #1be0aa, 0px -2px 3px 0px #1be0aa" : "")};
  //border-top: ${({ $isActive }) => ($isActive ? "1px solid #1be0aa" : "")};
  // color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "inherit")};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
    //  background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    ${({ $variant }) => $variant === "default" && "border-radius: 16px;"};
  }
`;

export default StyledMenuItem;
