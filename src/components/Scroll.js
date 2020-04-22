import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'none', border: '3px solid black', height: '795px'}}>
      {props.children}
    </div>
  );
};

export default Scroll; 