import React from 'react';
import "./pagination.css";

export default function pagination({ page , number , numberFunction}) {

    const pageArray = [];
    for (let i = 1; i <= page; i++) {
        pageArray.push(i)
    }

  return (
    <div className='pagination'>
        <button className='pre-page' onClick={() => numberFunction(pref => pref - 1)} disabled={number === 1}>
            <i className="bi bi-chevron-double-right"></i>
        </button>
        {pageArray.map(item => (
            <div key={item} className={number === item ? 'page active' : 'page'} onClick={() => numberFunction(item)} >
                {item}
            </div>
        ))}
        <button className='next-page' onClick={() => numberFunction(pref => pref + 1)} disabled={number === page}>
            <i className="bi bi-chevron-double-left"></i>
        </button>
    </div>
  )
}
