import React, { ReactNode } from "react";
import styles from "./content.css";

interface IContentProps {
  children?: ReactNode;
}

export function Content({ children }: IContentProps) {
  return <main className={styles.content}>{children}</main>;
}
