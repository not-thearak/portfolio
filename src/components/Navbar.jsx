import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="container"
      data-animate="fade-down"
      style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 4rem', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span>Web Designer</span>
        <span style={{ color: 'var(--accent-red)' }}>Digital Creator</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Available for Freelance</span>
        <span style={{ color: 'var(--accent-red)', fontSize: '1.2rem' }}>+</span>
      </div>
    </nav>
  );
};

export default Navbar;
