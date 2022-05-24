import React from 'react';

function Tooltip() {
  return (
    <div>
      <div id="tooltip" className="top">
        <div className="tooltip-arrow" />
        <div className="tooltip-label">ToolTip Component</div>
      </div>

      <div id="tooltip" className="right">
        <div className="tooltip-arrow" />
        <div className="tooltip-label">ToolTip Component</div>
      </div>

      <div id="tooltip" className="bottom">
        <div className="tooltip-arrow" />
        <div className="tooltip-label">ToolTip Component</div>
      </div>

      <div id="tooltip" className="left">
        <div className="tooltip-arrow" />
        <div className="tooltip-label">ToolTip Component</div>
      </div>
    </div>
  );
}

export default Tooltip;
