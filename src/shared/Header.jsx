import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import styles from "./header.less";

function HeaderComponent() {
  // const [state, setState] = useState(false);
  // const state = true;
  console.log(styles, styles.example);

  return (
    <header>
      <h1 className={styles.example}>React App my own</h1>
      {/* <button onClick={() => setState(!state)}>
        {state ? "hide" : "show"}
      </button>
      {state && <h3> Here I'm</h3>} */}
      <p>It replace code without page reloading</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);
