import React from 'react';
import "./title.css";

function Title({title, discrep}) {
  return (
    <div className="head-section">
        <h2>{title}</h2>
        <p>
          {discrep}
        </p>
    </div>
  )
}

export default Title