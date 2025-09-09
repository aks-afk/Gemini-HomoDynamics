import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
            padding: '2rem',
            textAlign: 'center',
            border: '1px solid #EAE8E1',
            borderRadius: '4px',
            background: '#FCFBF8',
            margin: '2rem 0'
        }}>
          <h2 style={{
              fontSize: '1.5rem',
              color: '#3A3A3A',
              fontWeight: 'normal',
          }}>Something went wrong.</h2>
          <p style={{
              color: '#5A5A5A',
              lineHeight: 1.6
          }}>
              An error occurred while trying to render this content. Please try refreshing the page or selecting a different section.
          </p>
          {this.state.error && (
            <pre style={{
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
                textAlign: 'left',
                backgroundColor: '#F1F0EC',
                padding: '1rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                color: '#8A8A8A',
                maxHeight: '200px',
                overflowY: 'auto'
            }}>
                {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
