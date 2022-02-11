import React from "react";
import styles from "./postlink.css";

export function PostLink() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Реплицированные с зарубежных источников возможности
      </a>
    </h2>
  );
}
