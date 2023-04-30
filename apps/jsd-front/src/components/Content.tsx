import React from 'react';

const styles: { [property: string]: React.CSSProperties } = {
  container: {
    padding: '0 2rem',
  }
} as const;

const Content = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  )
}

export default Content;