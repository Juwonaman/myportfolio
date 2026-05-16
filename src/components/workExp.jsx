import React, { useEffect, useState } from 'react';
import workEx from '../data/workExp';

export function CompAndRole() {
    const [index, setIndex] = useState(0);

    useEffect(() => { 
        if (workEx.length === 0) return;

        const id = setInterval(() => {
            setIndex((i) => (i +1) % workEx.length);
        }, 2000);
        return () => clearInterval(id);
    }, [workEx.length]);

    if (workEx.length === 0) return null;
    const current = workEx[index];

  return (
    <div>
      {"Previous "}{current.role} @ {current.company} 
    </div>
  );
}


export function WorkExp() {
    return(
        <section>
            <h2>Work Experience</h2>
            
            {workEx.map((comp, idx) => <div key = {idx}>
                 <h3>{comp.company}</h3>
                 {/* <p>{comp.role} @ {comp.company} </p> */}
                 <p>{comp.role}</p>
                    <p>{comp.date}</p>
                    <p>{comp.location}</p>
                    <ul>
                        {comp.duties.map((duty, idx) => <li key = {idx}>{duty}</li>)}
                    </ul>
                 </div>)}
        </section>
    )
}