import React from "react";

interface Props {
  fallback: () => JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.props.fallback()}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
