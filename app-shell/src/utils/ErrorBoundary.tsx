import React from 'react';

// Define an interface for the component's state
interface ErrorBoundaryState {
  hasError: boolean;
}

// Since ErrorBoundary is expected to wrap children, its props need to include them.
// React.ReactNode covers everything that can be rendered: numbers, strings, elements, or an array containing these types.
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI.
      return <div>Loading error</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
