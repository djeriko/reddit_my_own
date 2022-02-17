import React from "react";
import { Dropdown } from "../../../helpers/Dropdown";
import { MenuIcon } from "../../../Icons";
import { Text } from "../../../helpers/Text";
import styles from "./menu.css";
import { MenuListItem } from "./MenuListItem";

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuListItem postId="123" />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
