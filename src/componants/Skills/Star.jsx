import React from 'react';
import "./Skills.css";

function Star({star}) {
  return (
    <div className='skill-star'>
      {star >= 1 ? ( <i className="bi bi-star-fill"></i> ) 
      :
       star >= 0.5 ? ( <i className="bi bi-star-half"></i> ) 
      : 
      ( <i className="bi bi-star"></i> )
      }

{star >= 2 ? ( <i className="bi bi-star-fill"></i> ) 
      :
       star >= 1.5 ? ( <i className="bi bi-star-half"></i> ) 
      : 
      ( <i className="bi bi-star"></i> )
      }

{star >= 3 ? ( <i className="bi bi-star-fill"></i> ) 
      :
       star >= 2.5 ? ( <i className="bi bi-star-half"></i> ) 
      : 
      ( <i className="bi bi-star"></i> )
      }

{star >= 4 ? ( <i className="bi bi-star-fill"></i> ) 
      :
       star >= 3.5 ? ( <i className="bi bi-star-half"></i> ) 
      : 
      ( <i className="bi bi-star"></i> )
      }

{star >= 5 ? ( <i className="bi bi-star-fill"></i> ) 
      :
       star >= 4.5 ? ( <i className="bi bi-star-half"></i> ) 
      : 
      ( <i className="bi bi-star"></i> )
      }

    </div>
  )
}

export default Star