import React from "react";
import styles from "./preview.css";

export function Preview() {
  return (
    <div>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/290035/screenshots/2486609/media/2db2f040ae9febba22635e60bdb60aa0.jpg?compress=1&resize=400x300&vertical=top"
      />
    </div>
  );
}
