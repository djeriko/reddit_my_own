import React from "react";
import styles from "./metadata.css";

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="https://cdn.dribbble.com/users/329647/avatars/normal/58ba49bf7a4846b0c868ce18ee855519.jpg?1614962766"
          alt="avatar"
        />
        <a href="#user-url" className={styles.username}>
          Mark Grigoriev
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>4 hours ago
      </span>
    </div>
  );
}
