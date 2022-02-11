import React from "react";

interface ILifecycleProps {
  someProp: number;
}

interface ILifecycleState {
  stateField: number;
  isMounted: boolean;
  hasError: boolean;
}

export class Lifecycle extends React.Component<
  ILifecycleProps,
  ILifecycleState
> {
  constructor(props: ILifecycleProps) {
    super(props);

    this.state = { stateField: 0, isMounted: false, hasError: false };
    // this.handleCLick = this.handleCLick.bind(this);
  }

  // Calls before render()
  static getDerivedStateFromProps(
    props: Readonly<ILifecycleProps>,
    state: Readonly<ILifecycleState>
  ) {
    return { stateField: props.someProp }; // Производное состояние
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  // Не испльзовать при PureComponent
  public shouldComponentUpdate(
    nextProps: Readonly<ILifecycleProps>,
    nextState: Readonly<ILifecycleState>,
    nextContext: any
  ): boolean {
    return this.state != nextState || this.props != nextProps;
  }

  public render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }
    return <div onClick={this.handleCLick}>Hello world</div>;
  }

  public getSnapshotBeforeUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>
  ): any | null {
    return null;
  }

  public componentDidUpdate(
    prevProps: Readonly<ILifecycleProps>,
    prevState: Readonly<ILifecycleState>,
    snapshot?: any
  ) {
    if (snapshot > 1000) {
      this.setState({});
    }
  }

  // Для side эффектов
  public componentDidMount() {
    document.addEventListener("resize", () => {});
    setTimeout(() => {}, 0);
    this.setState({ isMounted: true });
  }

  // Soon will deprecated
  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // logError(errorInfo.componentStack);
  }

  public componentWillUnmount() {
    document.removeEventListener("resize", () => {});
  }

  public UNSAFE_componentWillMount() {}

  public UNSAFE_componentWillReceiveProps() {}

  public UNSAFE_componentWillUpdate() {}

  private handleCLick = () => {
    this.setState({ stateField: 1 });
  };
}
