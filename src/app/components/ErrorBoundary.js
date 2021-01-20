import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    console.log(
      "This is where I would log to google analytics/logrocket/sanity or other error logging system"
    );
    console.log({ error, info });

    this.setState({ hasError: true });
  }

  render() {
    const { children, component: Component } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return Component ? <Component /> : <p>⚠️ Wooops something broken ⚠️</p>;
    }

    return children;
  }
}

export default ErrorBoundary;
