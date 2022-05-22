import React, { useRef } from 'react';

function Main() {
  const cardRef = useRef(null);

  return (
    <div>
      <div ref={cardRef}>Card 1</div>
    </div>
  );
}
export default Main;
