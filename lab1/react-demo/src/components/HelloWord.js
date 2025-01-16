import React from 'react';

// Một component HelloWorld linh hoạt hơn
function HelloWorld({ name }) {
  return <div>Hello, {name || 'World'}!</div>;
}

export default HelloWorld;
