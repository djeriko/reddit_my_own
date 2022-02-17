import React from "react";
import { Text } from "../../../../helpers/Text";
import styles from "./menulistitem.css";
import { EIcon, Icon } from "../../../../helpers/Icon";

interface IMenuItemsListProp {
  postId: string;
}

export function MenuListItem({ postId }: IMenuItemsListProp) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcon.block} size={16} />
        <Text size={12}>Скрыть</Text>
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem}>
        <Icon name={EIcon.warning} size={16} />
        <Text size={12}>Пожаловаться!</Text>
      </li>

      <div className={styles.divider} />
    </ul>
  );
}
