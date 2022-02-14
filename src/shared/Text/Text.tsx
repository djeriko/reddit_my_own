import React from "react";
import styles from "./text.css";

interface ITextProps {
  children: string;
  mobileSize?: number;
  size?: number;
  color: string;
}

export function Text({ children, mobileSize, size, color }: ITextProps) {
  return <span>{children}</span>;
}
