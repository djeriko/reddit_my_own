import React from "react";
import { MetaData } from "./MetaData";
import { PostLink } from "./PostLink";
import styles from "./textcontent.css";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <MetaData />
      <PostLink />
    </div>
  );
}
