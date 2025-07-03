import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <img 
      src="/images/logo.png"  // path relative to the public folder
      alt="Logo"
      style={{ width }}
    />
  );
}

export default Logo;
