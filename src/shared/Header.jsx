import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import styles from "./header.less";
import { StarWarsNameFunction } from "./StateExamples/StarWarsNameFunction/StarWarsNameFunction";

function HeaderComponent() {
  return <StarWarsNameFunction />;
}

export const Header = hot(HeaderComponent);
