import React, { useState } from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";
import styles from "./starWarsNameFunction.less";

interface IStarWarsNameFunctionState {
  name: string;
  count: number;
}

export function StarWarsNameFunction() {
  const randomName = () =>
    uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      name: randomName(),
    }));
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  const [state, setState] = useState<IStarWarsNameFunctionState>({
    name: randomName(),
    count: 0,
  });

  console.log(">>", state.count);

  return (
    <section className={styles.container}>
      <span className={styles.name}>{state.name}</span>
      <div className={styles.gap}></div>
      <button onClick={handleClick} className={styles.button}>
        I need name!
      </button>
    </section>
  );
}
