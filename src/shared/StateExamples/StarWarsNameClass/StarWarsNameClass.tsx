import React from "react";
import { uniqueNamesGenerator, starWars } from "unique-names-generator";

interface IStarWarsNameClassState {
  name: string;
  count: number;
}

export class StarWarsNameClass extends React.PureComponent<
  {},
  IStarWarsNameClassState
> {
  state: Readonly<IStarWarsNameClassState> = {
    name: this.randomName(),
    count: 0,
  };
  // constructor(props: {}) {
  //   super(props);
  //   this.state = { name: "123" };
  // }

  public render() {
    console.log(this.state.count);
    return (
      <section>
        <span>{this.state.name}</span>
        <div />
        <button onClick={this.handleClick}>I need name!</button>
        <span>{this.state.count}</span>
      </section>
    );
  }

  private handleClick = () => {
    this.setState({
      name: this.randomName(),
    });
    this.setState((state, props) => ({ count: state.count + 1 }));
    this.setState((state, props) => ({ count: state.count + 1 }));
    // this.setState({ count: this.state.count + 1 }); // WRONG!
  };

  private randomName(): string {
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }
}
