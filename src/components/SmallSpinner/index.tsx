import React from 'react';
import Spinner from 'react-spinner-material';

function SmallSpinner({ color }: { color?: string }) {
  return (
    <div>
      <Spinner radius={120} color={color} stroke={2} visible={true} />
    </div>
  );
}

export default SmallSpinner;
