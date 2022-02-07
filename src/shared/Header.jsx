import * as React from "react";
import { hot } from "react-hot-loader/root";

function HeaderComponent() {
  const [state, setState] = React.useState(false);

  return (
    <header>
      <h1>Hmr example!!!</h1>
      <button onClick={() => setState(!state)}>
        {state ? "hide" : "show"}
      </button>
      {state && <h3> Here I'm</h3>}
      <p>It replace code without page reloading</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);
