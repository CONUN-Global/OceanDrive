import React, { useRef } from 'react';

function Main() {
  const cardRef = useRef(null);

  return (
    <div>
      <div ref={cardRef}>Card1</div>
    </div>
  );
}
export default Main;
