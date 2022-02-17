import React from "react";
import styles from "./text.css";
import classNames from "classnames";
import { EColor, TSizes } from "../../../constants";

interface ITextProps {
  As?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = "span",
    color = EColor.black,
    bold = false,
    children,
    size,
    mobileSize,
    tabletSize,
    desktopSize,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    {
      [styles[`m${mobileSize}`]]: mobileSize,
    },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color],
    { [styles.bold]: bold }
  );

  return <As className={classes}>{children}</As>;
}
