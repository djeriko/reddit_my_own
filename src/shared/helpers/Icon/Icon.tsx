import React from "react";
import { EColor, TSizes } from "../../../constants";
import classNames from "classnames";
import styles from "./icon.css";

interface IIconProps {
  name: EIcon;
  size: TSizes;
  color?: EColor;
}

export const enum EIcon {
  warning = "warning",
  block = "block",
}

const iconPath: { [key: string]: string } = {
  block:
    "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z",
  warning:
    "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z",
};

export function Icon({ name, size, color = EColor.grey99 }: IIconProps) {
  const classes = classNames(styles[`s${size}`], styles[color]);

  return (
    <svg className={classes} id="foo" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d={iconPath[name]} />
    </svg>
  );
}
