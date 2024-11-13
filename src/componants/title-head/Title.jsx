import React from 'react';
import "./title.css";

function Title({title}) {
  return (
    <div className="head-section">
        <h2>{title}</h2>
    </div>
  )
}

export default Title