import React from "react";
import { BlockIcon } from "../../../../Icons";
import { Text } from "../../../../Text";
import WarningIcon from "../../../../Icons/WarningIcon";
import styles from "./menulistitem.css";

interface IMenuItemsListProp {
  postId: string;
}

export function MenuListItem({ postId }: IMenuItemsListProp) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <Text size={12} color={""}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <WarningIcon />
        <Text size={12} color={""}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
